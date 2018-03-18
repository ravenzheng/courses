const RawSource = require('webpack-sources/lib/RawSource');
const evaluate = require('eval');
const path = require('path');
const cheerio = require('cheerio');
const url = require('url');
const Promise = require('bluebird');

function GenerateStaticPagePlugin(options) {
  options = options || {};
  this.entry = options.entry;
  this.paths = Array.isArray(options.paths) ? options.paths : [options.paths || '/'];
  this.locals = options.locals;
  this.globals = options.globals;
}

GenerateStaticPagePlugin.prototype.apply = function (compiler) {
  const self = this;

  compiler.plugin('this-compilation', (compilation) => {
    compilation.plugin('optimize-assets', (_, done) => {
      let renderPromises;

      const webpackStats = compilation.getStats();
      const webpackStatsJson = webpackStats.toJson();

      try {
        const asset = findAsset(self.entry, compilation, webpackStatsJson);

        if (asset == null) {
          throw new Error(`Source file not found: "${self.entry}"`);
        }

        const assets = getAssetsFromCompilation(compilation, webpackStatsJson);
        // debugger;
        delete compilation.assets[assets.main];
        const source = asset.source();
        let render = evaluate(
          source,
          /* filename: */ self.entry,
          /* scope: */ self.globals,
          /* includeGlobals: */ true
        );

        if (render.hasOwnProperty('default')) {
          render = render.default;
        }

        if (typeof render !== 'function') {
          throw new Error(`Export from "${
            self.entry
          }" must be a function that returns an HTML string. Is output.libraryTarget in the configuration set to "umd"?`);
        }

        renderPaths(
          self.locals,
          self.paths,
          render,
          assets,
          webpackStats,
          compilation
        ).nodeify(done);
      } catch (err) {
        compilation.errors.push(err.stack);
        done();
      }
    });
  });
};

function renderPaths(userLocals, paths, render, assets, webpackStats, compilation) {
  const renderPromises = paths.map((outputPath) => {
    const locals = {
      path: outputPath,
      assets,
      webpackStats
    };
    for (const prop in userLocals) {
      if (userLocals.hasOwnProperty(prop)) {
        locals[prop] = userLocals[prop];
      }
    }
    
    const renderPromise =
      render.length < 2
        ? Promise.resolve(render(locals))
        : Promise.fromNode(render.bind(null, locals));

    return renderPromise
      .then((output) => {
        const outputByPath = typeof output === 'object' ? output : makeObject(outputPath, output);
        const assetGenerationPromises = Object.keys(outputByPath).map((key) => {
          const rawSource = outputByPath[key];
          const assetName = pathToAssetName(key);

          if (compilation.assets[assetName]) {
            return;
          }
          compilation.assets[assetName] = new RawSource(rawSource);
        });

        return Promise.all(assetGenerationPromises);
      })
      .catch((err) => {
        compilation.errors.push(err.stack);
      });
  });

  return Promise.all(renderPromises);
}

var findAsset = function (src, compilation, webpackStatsJson) {
  if (!src) {
    const chunkNames = Object.keys(webpackStatsJson.assetsByChunkName);

    src = chunkNames[0];
  }

  const asset = compilation.assets[src];

  if (asset) {
    return asset;
  }

  let chunkValue = webpackStatsJson.assetsByChunkName[src];

  if (!chunkValue) {
    return null;
  }
  // Webpack outputs an array for each chunk when using sourcemaps
  if (chunkValue instanceof Array) {
    // Is the main bundle always the first element?
    chunkValue = chunkValue[0];
  }
  return compilation.assets[chunkValue];
};

// Shamelessly stolen from html-webpack-plugin - Thanks @ampedandwired :)
var getAssetsFromCompilation = function (compilation, webpackStatsJson) {
  const assets = {};
  for (const chunk in webpackStatsJson.assetsByChunkName) {
    let chunkValue = webpackStatsJson.assetsByChunkName[chunk];

    // Webpack outputs an array for each chunk when using sourcemaps
    if (chunkValue instanceof Array) {
      // Is the main bundle always the first element?
      chunkValue = chunkValue[0];
    }

    if (compilation.options.output.publicPath) {
      chunkValue = compilation.options.output.publicPath + chunkValue;
    }
    assets[chunk] = chunkValue;
  }

  return assets;
};

function pathToAssetName(outputPath) {
  let outputFileName = outputPath.replace(/^(\/|\\)/, ''); // Remove leading slashes for webpack-dev-server

  if (!/\.(html?)$/i.test(outputFileName)) {
    outputFileName = path.join(outputFileName, 'index.html');
  }

  return outputFileName;
}

function makeObject(key, value) {
  const obj = {};
  obj[key] = value;
  return obj;
}

function relativePathsFromHtml(options) {
  const html = options.source;
  const currentPath = options.path;

  const $ = cheerio.load(html);

  const linkHrefs = $('a[href]')
    .map((i, el) => $(el).attr('href'))
    .get();

  const iframeSrcs = $('iframe[src]')
    .map((i, el) => $(el).attr('src'))
    .get();

  return []
    .concat(linkHrefs)
    .concat(iframeSrcs)
    .map((href) => {
      if (href.indexOf('//') === 0) {
        return null;
      }

      const parsed = url.parse(href);

      if (parsed.protocol || typeof parsed.path !== 'string') {
        return null;
      }

      return parsed.path.indexOf('/') === 0 ? parsed.path : url.resolve(currentPath, parsed.path);
    })
    .filter(href => href != null);
}

module.exports = GenerateStaticPagePlugin;
