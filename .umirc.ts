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
};
