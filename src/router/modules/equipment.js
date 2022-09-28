import Layout from '@/layout'
export default {
  path: '/equipment',
  component: Layout,
  meta: {
    title: '设备管理'
    //   icon: 'tree-table'
  },
  children: [{
    name: 'equipment',
    path: '',
    component: () => import('@/views/equipment/equipment'),
    meta: {
      title: '设备管理'
    }
  }, {
    name: 'equipment-state',
    path: 'equipmentstate',
    component: () => import('@/views/equipment/equipmentState'),
    meta: {
      title: '设备状态'
    }
  }, {
    name: 'equipment-type',
    path: 'equipmenttype',
    component: () => import('@/views/equipment/equipmentType'),
    meta: {
      title: '设备类型管理'
    }
  }]
}

