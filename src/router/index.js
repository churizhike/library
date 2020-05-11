import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
// import componentsRouter from './modules/components'
// import chartsRouter from './modules/charts'
// import tableRouter from './modules/table'
// import nestedRouter from './modules/nested'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '用户画像', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/report',
    component: Layout,
    redirect: '/report/report',
    meta: { title: '趋势分析', icon: 'dashboard', affix: true },
    children: [
      {
        path: 'report',
        component: () => import('@/views/report/report'),
        name: 'report',
        meta: { title: '口味纬度分析', icon: 'dashboard', affix: true }
      },
      {
        path: 'report1',
        component: () => import('@/views/report/report1'),
        name: 'report',
        meta: { title: '窗口纬度分析', icon: 'dashboard', affix: true }
      },
      {
        path: 'report2',
        component: () => import('@/views/report/report2'),
        name: 'report',
        meta: { title: '菜品纬度分析', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/rank',
    component: Layout,
    redirect: '/rank/rank',
    meta: { title: '热销纬度', icon: 'dashboard', affix: true },
    children: [
      {
        path: 'rank',
        component: () => import('@/views/rank/rank'),
        name: 'rank',
        meta: { title: '热销口味', icon: 'dashboard', affix: true }
      },
      {
        path: 'rank1',
        component: () => import('@/views/rank/rank1'),
        name: 'rank',
        meta: { title: '热销窗口', icon: 'dashboard', affix: true }
      },
      {
        path: 'rank2',
        component: () => import('@/views/rank/rank2'),
        name: 'rank',
        meta: { title: '热销菜品', icon: 'dashboard', affix: true }
      }
    ]
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
