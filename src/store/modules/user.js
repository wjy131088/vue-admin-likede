import { loginAPI } from '@/api/user'
export default {
  namespaced: true,
  state: {
    token: null
  },
  mutations: {
    SET_TOKEN(state, payload) {
      state.token = payload.data.token
    }
  },
  actions: {
    async loginAction(context, data) { // 哪里想用 哪掉
      try {
        // 发送请求获取用户token
        const res = await loginAPI(data) // 实际上就是一个promise res就是执行的结果
        // console.log(res)
        context.commit('SET_TOKEN', res)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
