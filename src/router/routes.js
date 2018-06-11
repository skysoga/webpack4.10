import IndexAdmin from '@/views/index/Index'
import Login from '@/views/login/Index'
import LoginPage from '@/views/login/Login'

const router = [{
  path: '/',
  component: resolve => import('@/views/Index'),
  children: [{
    path: '/site',
    component: resolve => import('@/views/index/SidebarIndex'), // 右侧内容块入口，分有sidebar和无
    children: [
      {
        path: 'lottery',
        name: 'lottery',
        component: resolve => import('@/views/site/LotteryHot')
      }, {
        path: 'logo',
        name: 'logo',
        component: resolve => import('@/views/site/LotteryHot')
      }
    ]
  }, {
    path: '/',
    component: resolve => import('@/views/DashBoard'),
  }]
}, {
  path: '/login',
  component: Login,
  children: [{
    path: '/',
    component: LoginPage
  }]
}]

export default router
