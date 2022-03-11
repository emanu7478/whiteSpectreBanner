module.exports = {
  root: true,
  extends: '@react-native-community',
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      'babel-module': {
        root: ['.'],
        alias: require('./aliases.json'),
      },
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 8,
    sourceType: 'module',
  },
  plugins: ['react', 'react-native', '@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'import/no-unresolved': 2,
        'no-console': 2,
        'promise/prefer-await-to-then': 2,
        'promise/no-nesting': 2,
        'promise/prefer-await-to-callbacks': 2,
        'react-native/no-unused-styles': 2,
        'react-native/split-platform-components': 1,
        'react-native/no-inline-styles': 1,
        'react-native/no-raw-text': 1,
        'require-await': 2,
      },
    },
  ],
};
