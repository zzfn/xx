import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  html: {
    favicon: 'https://cdn.zzfzzf.com/assets/favicon.ico',
    title: '寻仙攻略',
  },
  output: {
    assetPrefix: 'https://cdn.zzfzzf.com/xx/',
  },
  plugins: [pluginReact()],
});
