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
        meta: { title: '维度分析', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/report',
    component: Layout,
    redirect: '/report/report',
    meta: { title: '数据报表', icon: 'dashboard', affix: true },
    children: [
      {
        path: 'report',
        component: () => import('@/views/report/report'),
        name: 'report',
        meta: { title: '月份', icon: 'dashboard' },
        children: [
          {
            path: 'report',
            component: () => import('@/views/report/report'),
            name: 'report',
            meta: { title: '年龄', icon: 'dashboard' }
          },
          {
            path: 'report1',
            component: () => import('@/views/report/report1'),
            name: 'report1',
            meta: { title: '类型', icon: 'dashboard' }
          },
          {
            path: 'report2',
            component: () => import('@/views/report/report2'),
            name: 'report2',
            meta: { title: '方式', icon: 'dashboard' }
          }
        ]
      },
      {
        path: 'reportYear',
        component: () => import('@/views/report/reportYear'),
        name: 'reportYear',
        meta: { title: '年份', icon: 'dashboard', affix: true },
        children: [
          {
            path: 'reportYear',
            component: () => import('@/views/report/reportYear'),
            name: 'reportYear',
            meta: { title: '年龄', icon: 'dashboard' }
          },
          {
            path: 'reportYear1',
            component: () => import('@/views/report/reportYear1'),
            name: 'reportYear1',
            meta: { title: '类型', icon: 'dashboard' }
          },
          {
            path: 'reportYear2',
            component: () => import('@/views/report/reportYear2'),
            name: 'reportYear2',
            meta: { title: '方式', icon: 'dashboard' }
          }
        ]
      }
    ]
  },
  {
    path: '/rank',
    component: Layout,
    redirect: '/rank/rank',
    meta: { title: '热门图书', icon: 'dashboard', affix: true },
    children: [
      {
        path: 'rank',
        component: () => import('@/views/rank/rank'),
        name: 'rank',
        meta: { title: '著作', icon: 'dashboard', affix: true }
      },
      {
        path: 'rank1',
        component: () => import('@/views/rank/rank1'),
        name: 'rank',
        meta: { title: '类型', icon: 'dashboard', affix: true }
      },
      {
        path: 'rank2',
        component: () => import('@/views/rank/rank2'),
        name: 'rank',
        meta: { title: '出版商', icon: 'dashboard', affix: true }
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
