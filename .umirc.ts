export default {
  npmClient: 'pnpm',
  publicPath: process.env.NODE_ENV === 'development' ? '/' : 'http://family.qiunian.top/code/',
  routes: [
    {
      path: '/',
      component: '@/layouts/index.tsx',
      routes: [
        {
          path: '/',
          component: '@/pages/index.tsx',
        },
        {
          path: '/user',
          component: '@/pages/About/index.tsx',
        },
      ]
    },
  ],
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'lodash',
        libraryDirectory: '',
        camel2DashComponentName: false, // default: true
      },
    ],
  ],
  proxy: {
    '/path': {
      target: 'http://192.168.1.2:8080/path',
      changeOrigin: true,
      pathRewrite: { '^/path': '' },
    },
  }
};
