import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import jsdoc from 'eslint-plugin-jsdoc';
import prettier from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import';
import react from 'eslint-plugin-react';

export default tseslint.config(
  {
    ignores: [
      'dist',
      'node_modules',
      'build',
      '*.config.js',
      '*.config.cjs',
      '.eslintrc.cjs',
      'vite.config.ts',
      'vite.config.d.ts',
    ],
  },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      sourceType: 'module',
      parserOptions: {
        ecmaVersion: 6,
        project: './tsconfig.json',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'simple-import-sort': simpleImportSort,
      jsdoc: jsdoc,
      prettier: prettier,
      import: importPlugin,
      react: react,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@typescript-eslint/no-unused-expressions': [
        'error',
        { allowShortCircuit: true, allowTernary: true },
      ],
      'prettier/prettier': 'error',
      'react/function-component-definition': 'off',
      'react/no-array-index-key': 'off',
      'react/jsx-filename-extension': [
        'error',
        { extensions: ['.tsx', '.jsx'] },
      ],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'import/no-unresolved': 'off',
      'no-param-reassign': 'off',
      'arrow-body-style': 'off',
      'react/jsx-props-no-spreading': 'warn',
      '@typescript-eslint/no-shadow': 'warn',

      '@typescript-eslint/adjacent-overload-signatures': 'error',
      '@typescript-eslint/prefer-function-type': 'error',
      '@typescript-eslint/restrict-plus-operands': 'error',
      '@typescript-eslint/consistent-type-definitions': 'error',
      '@typescript-eslint/no-confusing-non-null-assertion': 'error',
      '@typescript-eslint/no-require-imports': 'error',
      '@typescript-eslint/prefer-includes': 'error',
      '@typescript-eslint/prefer-optional-chain': 'error',
      '@typescript-eslint/require-array-sort-compare': 'error',
      '@typescript-eslint/switch-exhaustiveness-check': 'error',
      '@typescript-eslint/no-empty-interface': [
        'error',
        {
          allowSingleExtends: false,
        },
      ],
      '@typescript-eslint/no-inferrable-types': 'error',
      '@typescript-eslint/no-misused-new': 'error',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: true,
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/unified-signatures': 'error',
      'jsdoc/require-description-complete-sentence': [
        'error',
        {
          tags: ['see', 'copyright'],
        },
      ],
      'jsdoc/require-param': [
        'error',
        {
          checkDestructured: false,
          enableFixer: false,
        },
      ],
      'jsdoc/require-param-name': 'error',
      'jsdoc/require-param-description': 'error',
      'jsdoc/check-tag-names': 'error',
      'jsdoc/no-types': 'error',
      'func-style': [
        'error',
        'declaration',
        {
          allowArrowFunctions: true,
        },
      ],
      'jsdoc/check-alignment': 'error',
      'jsdoc/no-bad-blocks': 'error',
      'object-curly-spacing': ['error', 'always'],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  // Overrides
  {
    files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react', '^@?\\w'],
            ['^(@|components)(/.*|$)'],
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            ['^\\u0000'],
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            ['^.+\\.?(css)$'],
          ],
        },
      ],
    },
  },
);
