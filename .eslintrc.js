module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `@config/eslint-config`
  extends: ['@config/eslint-config/index.js'],
  settings: {
      next: {
          rootDir: ['apps/*/'],
      },
  },
}
