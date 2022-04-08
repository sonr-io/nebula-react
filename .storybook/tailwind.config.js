const { join } = require('path');

module.exports = {
  presets: [require('../postcss.config.js')],
  content: [join(__dirname, '../libs/**/*.(js|jsx|ts|tsx)')],
  theme: {},
  plugins: []
};