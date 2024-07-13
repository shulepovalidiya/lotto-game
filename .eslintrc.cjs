module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'eslint-config-prettier',
    'airbnb',
    'airbnb/hooks'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'no-plusplus': ['error', {allowForLoopAfterthoughts: true}],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error'
  },
}
