import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  output: {
    assetPrefix: 'https://cdn.zzfzzf.com/xx/',
  },
  plugins: [pluginReact()],
});
