module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  env: {
    browser: true,
    es6: true,
    jquery: true,
    amd: true,
    node: true,
    mocha: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      defaultParams: true,
      modules: true,
      jsx: true
    }
  },
  plugins: [
    'react'
  ],
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: '16.0'
    },
    propWrapperFunctions: [
      'forbidExtraProps'
    ]
  },
  globals: {
    chai: true,
    sinon: true,
    assert: true,
    expect: true,
    should: true
  },
  rules: {
    'block-scoped-var': 'error',
    'complexity': [
      'error',
      9
    ],
    'eol-last': [
      'error',
      'always'
    ],
    'indent': [
      'error',
      2,
      {
        'SwitchCase': 1
      }
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'no-eval': 'error',
    'no-eq-null': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 1
      }
    ],
    'no-shadow': [
      'error'
    ],
    'no-shadow-restricted-names': [
      'error'
    ],
    'no-trailing-spaces': 'error',
    'no-unused-vars': [
      'error',
      {
        'varsIgnorePattern': '^_',
        'argsIgnorePattern': '^_'
      }
    ],
    'no-use-before-define': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'padded-blocks': [
      'error',
      'never'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'strict': [
      'error',
      'global'
    ],
    'comma-dangle': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'padding-line-between-statements': [
      'error',
      // Declarations
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'never', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
      { blankLine: 'always', prev: ['multiline-block-like', 'multiline-expression'], next: ['const', 'let', 'var'] },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: ['multiline-block-like', 'multiline-expression'] },
      // Expressions
      { blankLine: 'always', prev: 'expression', next: '*' },
      { blankLine: 'any', prev: 'expression', next: 'expression', },
      { blankLine: 'always', prev: ['multiline-block-like', 'multiline-expression'], next: 'expression', },
      { blankLine: 'always', prev: 'expression', next: ['multiline-block-like', 'multiline-expression'] },
      // Switches
      { blankLine: 'always', prev: ['while', 'if', 'for', 'switch'], next: '*' },
      // Return
      { blankLine: 'always', prev: 'return', next: '*' },
      { blankLine: 'always', prev: '*', next: 'return' },
    ]
  }
};
