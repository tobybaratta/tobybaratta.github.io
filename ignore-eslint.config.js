import typescriptParser from '@typescript-eslint/parser';
import globals from "globals";
import js from "@eslint/js";
import astro from "eslint-plugin-astro";

/** 
 * ESLint is deprecating other forms of configurations in V9. 
 * This file is the configuration structure that will be used moving forward. 
 * https://eslint.org/docs/latest/use/configure/configuration-files-new
 **/
export default [
    js.configs.recommended,
    astro.configs.recommended,
    {
      files: ['*.js', "*.ts", ".astro"],
        languageOptions: {
            parser: typescriptParser,
            globals: {
                ...globals.browser,
                ...globals.node
            },
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                extraFileExtensions: '.astro'
            }
        }
    },
    {
        files: ['*.js', "*.astro"],
        rules: {
            'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
        }
    },
    {
      files: ['*.ts'],
      languageOptions: {
        parser: typescriptParser,
        typescriptOptions: {
          presets: ['@typescript-eslint/recommended']
        }
      },
      rules: {
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' },
        ],
        '@typescript-eslint/no-non-null-assertion': 'off',
      }
    }
];

/**
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' },
        ],
        '@typescript-eslint/no-non-null-assertion': 'off',
      },
    },
    {
      files: ['**//*.astro/*.js', '*.astro/*.js'],
      parser: '@typescript-eslint/parser',
    },
 */