import Layout from '@/layout'
export default {
  path: '/personnel',
  component: Layout,
  meta: {
    title: '人员管理',
    icon: 'renyuanguanli'
  },
  children: [{
    name: 'personnel',
    path: '',
    component: () => import('@/views/personnel/personnelList'),
    meta: {
      title: '人员列表'
    }
  },
  {
    name: 'personnelTotal',
    path: 'personneltotal',
    component: () => import('@/views/personnel/personnelTotal'),
    meta: {
      title: '人效统计'
    }
  },
  {
    name: 'workList',
    path: 'worklist',
    component: () => import('@/views/personnel/workList'),
    meta: {
      title: '工作量列表'
    }
  }]
}

