import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

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
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
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
    component: () => import('@/views/login'),
    hidden: true
  },
  {
    path: '/test',
    component: () => import('@/views/home/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    name: 'Home',
    component: Layout,
    redirect: '/',
    children: [
      {
        path: '/',
        component: () => import('@/views/home'),
        meta: { title: '' }
      },
      {
        path: '/hash',
        name: 'hash',
        component: () => import('@/views/game/hash'),
        meta: { title: '' }
      },
      {
        path: '/bull',
        name: 'bull',
        component: () => import('@/views/game/bull'),
        meta: { title: '' }
      },
      {
        path: '/comb',
        name: 'comb',
        component: () => import('@/views/game/comb'),
        meta: { title: '' }
      },
      {
        path: '/champion',
        name: 'champion',
        component: () => import('@/views/game/champion'),
        meta: { title: '' }
      },
      {
        path: '/bjl',
        name: 'bjl',
        component: () => import('@/views/game/bjl'),
        meta: { title: '' }
      }
    ]
  },

  // 活动
  {
    path: '/activity',
    name: 'Activity',
    component: Layout,
    children: [
      {
        path: '/',
        component: () => import('@/views/activity'),
        meta: { title: '' }
      },
      {
        path: '/activity/detail',
        component: () => import('@/views/activity/detail'),
        meta: { title: '' }
      }
    ]
  },

  // 推广
  {
    path: '/promote',
    name: 'Promote',
    component: Layout,
    children: [
      {
        path: '/',
        component: () => import('@/views/promote'),
        meta: { title: '' }
      }
    ]
  },

  // 我的
  {
    path: '/mine',
    name: 'Mine',
    component: Layout,
    children: [
      {
        path: '/',
        component: () => import('@/views/mine'),
        meta: { title: '' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
