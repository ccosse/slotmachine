
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue'), props: route => {
        const count = Number(route.query.reels || 5)
        const reelCount = Number.isInteger(count) && count >= 1 && count <= 20 ? count : 5
        const preset = typeof route.query.preset === 'string' && /^[A-Z]+$/.test(route.query.preset) && route.query.preset.length === reelCount ? route.query.preset : ''
        return { reelCount, preset, compact: route.query.compact === '1' }
      } }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
