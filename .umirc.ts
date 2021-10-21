import { defineConfig } from 'umi';
// @ts-ignore
import CompressionPlugin from 'compression-webpack-plugin';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // locale: false,
  locale: {
    // default zh-CN
    default: 'zh-CN',
    // default true, when it is true, will use `navigator.language` overwrite default
    antd: true,
    baseNavigator: false,
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  dynamicImport: {},
  mock: false,
  mfsu: {},
  fastRefresh: {},

  chainWebpack(config: any) {
    config.plugin('CompressionPlugin').use(
      new CompressionPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i,
        // 只处理大于xx字节 的文件，默认：0
        threshold: 10240,
        // 示例：一个1024b大小的文件，压缩后大小为768b，minRatio : 0.75
        minRatio: 0.8, // 默认: 0.8
        // 是否删除源文件，默认: false
        deleteOriginalAssets: false,
      }),
    );
  },
});
