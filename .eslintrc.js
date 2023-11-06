module.exports = {
    root: true,
    // This tells ESLint to load the config from the package `@dev/eslint-config-custom`
    extends: ['@dev/custom'],
    settings: {
        next: {
            rootDir: ['apps/*/'],
        },
    },
}
