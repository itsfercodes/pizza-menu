module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['plugin:react/recommended', 'plugin:react/jsx-runtime', 'airbnb'],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'react/react-in-jsx-scope': 0,
    'comma-dangle': [
      'error',
      {
        imports: 'never',
        arrays: 'never',
        objects: 'never',
        exports: 'never',
        functions: 'never'
      }
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function'
      }
    ],
    'react/jsx-one-expression-per-line': [
      0,
      {
        allow: 'single-child'
      }
    ]
  }
};
