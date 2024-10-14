module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `@dev/eslint-config-custom`
  extends: ['@config/eslint-config/index.js'],
  settings: {
      next: {
          rootDir: ['apps/*/'],
      },
  },
}
