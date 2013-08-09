suite('optsfile', function() {
  var optsfile = require('../lib/optsfile');

  /**
   * @param {String} file to load with optsfile relative to fixtures.
   */
  function load(file) {
    optsfile(__dirname + '/fixtures/' + file);
  }

  var originalArgv;
  setup(function() {
    // shallow clone
    originalArgv = Array.prototype.slice.call(process.argv);
  });

  teardown(function() {
    process.argv = originalArgv;
  });

  suite('testops.ops', function() {
    setup(function() {
      load('testops.opts');
    });

    test('has --magicfoobar', function() {
      console.log(process.argv);
      assert.ok(process.argv.indexOf('--magicfoobar') !== -1, process.argv);
    });

    test('has --dodad', function() {
      assert.ok(process.argv.indexOf('--dodad') !== -1, process.argv);
    });
  });
});
