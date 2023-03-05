module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: ['stylelint-config-recommended', 'stylelint-config-styled-components'],
  customSyntax: '@stylelint/postcss-css-in-js',
  rules: {
    'string-quotes': 'single',
    'rule-empty-line-before': null,
    'value-keyword-case': null,
    'declaration-empty-line-before': null,
  },
};
