const postcssConfig = require('@dev/tailwind/postcss.config')

module.exports = {
  ...postcssConfig,
  plugins: {
    ...postcssConfig.plugins,
    tailwindcss: { ...postcssConfig.tailwindcss },
    autoprefixer: { ...postcssConfig.autoprefixer },
  },
}
