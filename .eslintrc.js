module.exports = {
    env: {
      browser: true,
      es6: true,
    },
    extends: [
      'airbnb',
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: [
      'react',
    ],
    rules: {
      "semi": 0,
      "linebreak-style": 0,
      'react/jsx-props-no-spreading': ['off'],
      'react/eol-last': "never"
    },
};  