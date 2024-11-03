import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import prettierConfig from 'eslint-config-prettier'
import prettier from 'eslint-plugin-prettier'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ...pluginReact.configs.flat.recommended,
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      'react/prop-types': 0
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  {
    ignores: ['babel.config.js', 'metro.config.js']
  },
  prettierConfig,
  {
    plugins: { prettier }
  }
]
