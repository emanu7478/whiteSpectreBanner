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
        'no-console': 2,
      },
    },
  ],
};
