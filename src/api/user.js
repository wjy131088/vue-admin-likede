import request from '@/utils/request'

export function getCodeAPI(clientToken) {
  return request({
    url: `user-service/user/imageCode/${clientToken}`,
    method: 'get',
    responseType: 'blob'
  })
}
export function loginAPI(data) {
  return request({
    url: 'user-service/user/login',
    method: 'POST',
    data
  })
}

export function getInfo(token) {

}

export function logout() { }

