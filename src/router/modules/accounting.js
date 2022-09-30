import Layout from '@/layout'
export default {
  path: '/accounting',
  component: Layout,
  children: [{
    name: 'accounting',
    path: '',
    component: () => import('@/views/accounting'),
    meta: {
      title: '对账统计',
      icon: 'zhangdan'
    }
  }]
}

