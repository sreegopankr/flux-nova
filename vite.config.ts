import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import dts from "vite-plugin-dts";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), dts(), tailwindcss(),],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'FluxNova',
      fileName: (format) => `flux-nova.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})
