const path = require('path');

const buildEslintCommand = (filenames) =>
  `npx eslint ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')}`;

const buildStylelintCommand = (filenames) =>
  `npx stylelint ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')}`;

module.exports = {
  '*.{ts,tsx}': [buildEslintCommand],
  '*.css': [buildStylelintCommand],
};
