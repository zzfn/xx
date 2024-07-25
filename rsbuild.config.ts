import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  html: {
    title: 'xx',
  },
  output: {
    assetPrefix: 'https://cdn.zzfzzf.com/xx/',
  },
  plugins: [pluginReact()],
});
