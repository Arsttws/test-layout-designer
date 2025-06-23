import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
  base: '/test-layout-designer/',
  plugins: [injectHTML()],
});
