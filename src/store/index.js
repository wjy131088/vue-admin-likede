import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'
import createPersistedstate from 'vuex-persistedstate'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user
  },
  getters,
  plugins: [createPersistedstate({
    // paths: ['user.token']
    // 用于存储持久状态的密钥。默认为vuex。
    key: 'DIKEDE',
    reducer(state) {
      const { token } = state.user
      return {
        user: {
          token: token

        }
      }
    }
  })]
})

export default store
