export default {
  npmClient: 'pnpm',
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
