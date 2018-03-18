#!/usr/bin/env node

/* eslint no-console: "off" */
const webpack = require('webpack');
const config = require('../webpack.config.build.js');

function build() {
  webpack(config, (err, stats) => {
    process.stdout.write(`${stats.toString()}\n`);
  });
}

if (require.main === module) {
  build(process.argv);
}

module.exports = build;
