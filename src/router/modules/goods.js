import Layout from '@/layout'
export default {
  path: '/goods',
  component: Layout,
  meta: {
    title: '商品管理',
    icon: 'icon_shangpin'
  },
  children: [{
    name: 'goods',
    path: '',
    component: () => import('@/views/goods/goods'),
    meta: {
      title: '商品管理'
    }
  }, {
    name: 'goodsType',
    path: 'goodstype',
    component: () => import('@/views/goods/goodsType'),
    meta: {
      title: '商品类型'
    }
  }]
}

