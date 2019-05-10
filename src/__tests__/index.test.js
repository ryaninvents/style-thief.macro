import path from 'path';
import pluginTester from 'babel-plugin-tester';
import macrosPlugin from 'babel-plugin-macros';

pluginTester({
  plugin: macrosPlugin,
  fixtures: path.join(__dirname, '__fixtures__'),
});
