#!/usr/bin/env node

/* eslint no-console: "off" */
const ghPages = require('gh-pages');
const path = require('path');
const moment = require('moment');

function deploy() {
  const basename = path.basename(process.cwd());
  const dist = path.join('build', basename);
  ghPages.publish(
    dist,
    {
      message: `Auto-generated update at ${moment().format()}`
    },
    (err) => {
      if (!err) {
        console.log(`Deploy: ${dist} published.`);
      }
      console.log(err.message);
    }
  );
}

if (require.main === module) {
  deploy();
}

module.exports = deploy;
