import Layout from '@/layout'
export default {
  path: '/policy',
  component: Layout,
  children: [{
    name: 'policy',
    path: '',
    component: () => import('@/views/policy'),
    meta: {
      title: '策略管理'
    //   icon: 'tree-table'
    }
  }]
}

