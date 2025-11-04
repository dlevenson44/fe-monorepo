import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: false, // Disable tsup's DTS generation
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  treeshake: true,
})
