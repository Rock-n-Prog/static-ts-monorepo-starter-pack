module.exports = {
  plugins: ['functional'],
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prefer-type-alias/recommended',
    'plugin:import/recommended',
    'plugin:functional/recommended',
    'plugin:functional/stylistic',
    'prettier',
    'turbo',
  ],
  rules: {
    curly: 'warn',
    eqeqeq: 'warn',
    'prefer-template': 'warn',
    'func-style': ['warn', 'declaration'],
    'no-negated-condition': 'warn',
    'no-else-return': 'warn',
    'no-nested-ternary': 'warn',
    'import/order': 'warn',
    'import/first': 'warn',
    'import/exports-last': 'warn',
    'functional/no-return-void': 'off',
    'functional/no-expression-statements': 'off',
    'functional/functional-parameters': 'off',
    'functional/prefer-immutable-types': [
      'error',
      {
        enforcement: 'ReadonlyShallow',
        variables: {
          enforcement: 'None',
        },
      },
    ],
    'functional/no-mixed-type': 'off',
    'turbo/no-undeclared-env-vars': 'off',
  },
  overrides: [
    {
      files: ['**/*.js'],
      rules: {
        'functional/immutable-data': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
