import type { Config } from 'tailwindcss'

import tailwindConfig from '../../packages/dev/tailwind/tailwind.config'

const config: Pick<Config, 'content' | 'presets'> = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    // '../../packages/ui/components/**/*.{.js,.ts,.jsx,.tsx}',
  ],
  presets: [tailwindConfig],
}

export default config
