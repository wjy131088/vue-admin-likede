import Layout from '@/layout'
export default {
  path: '/point',
  component: Layout,
  meta: {
    title: '点位管理'
    //   icon: 'tree-table'
  },
  children: [{
    name: 'point',
    path: '',
    component: () => import('@/views/point/areaManage'),
    meta: {
      title: '区域管理'
    }
  }, {
    name: 'pointmanage',
    path: 'pointmanage',
    component: () => import('@/views/point/pointManage'),
    meta: {
      title: '点位管理'
    }
  }, {
    name: 'cooperativeOperators',
    path: 'cooperativeOperators',
    component: () => import('@/views/point/cooperativeOperators'),
    meta: {
      title: '合作运营商'
    }
  }]
}

