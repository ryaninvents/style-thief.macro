// This file is a little gross, but `babel-plugin-macros` requires that your
// filename end in `.macro.js` or `/macro`. This conflicts with default @pika/pack
// requirement of `src/index.js`; therefore, we need this extra wrapper file so that
// the plugin has the correct name for testing.

import StyleThief from '..';
export default StyleThief;
