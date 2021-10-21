import { defineConfig } from 'umi';
// @ts-ignore
import CompressionPlugin from 'compression-webpack-plugin';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  mfsu: {},
  fastRefresh: {},

});
