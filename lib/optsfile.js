var debug = require('debug')('marionette-js-runner:optsfile'),
    fs = require('fs');

/**
 * Reads the contents of given opts file and updates process.argv with the
 * results.
 *
 * @param {String} file to load opts from.
 */
function loadOptsFile(file) {
  debug('loading opts file', file);
  var opts = fs.readFileSync(file, 'utf8')
    .trim()
    .split(/\s+/);

  process.argv = process.argv
    .slice(0, 2)
    .concat(opts.concat(process.argv.slice(2)));
}

module.exports = loadOptsFile;
