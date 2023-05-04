import { defineConfig,loadEnv} from 'vite';
import vue from '@vitejs/plugin-vue';
import {resolve} from 'path';

process.env = { ...process.env };

export default ({ mode }) => {
  process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ''));

// https://vitejs.dev/config/
return  defineConfig({
  server: {
    port: 3011
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
    extensions: ['.ts', '.js', '.vue'],
  },
})

}