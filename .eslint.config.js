import tselint from '@typescript-eslint';
import parser from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier/flat';

export default [
  ...tselint.configs.recommended,
  {
    ignores: ['dist', 'node_modules'],
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
      },
    },
    plugins: { '@typescript-eslint': tselint.parser },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-empty-function': 'warn',
      '@typescript-eslint/no-this-alias': 'warn',
    },
  },
  prettier,
];
