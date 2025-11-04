import config from '@config/eslint/eslint.config.vite.js'

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...config,
  {
    files: ['stories/**/*.{js,jsx,ts,tsx}'],  // Only lint src directory
  },
  {
    ignores: [
      'storybook-static/**',
      '.storybook/**',
      'dist/**',
      'build/**',
      'node_modules/**',
    ],
  },
]
