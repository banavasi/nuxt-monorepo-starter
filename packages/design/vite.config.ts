import { URL, fileURLToPath } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueMacros from 'unplugin-vue-macros/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueMacros(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dirs: ['./composables'],
      vueTemplate: true,
    }),
    Components({
      dirs: ['./components'],
      dts: true,
      directoryAsNamespace: true,
    }),
  ],
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./', import.meta.url)),
    },
  },
})
