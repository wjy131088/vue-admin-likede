import request from '@/utils/request'

export function getWorkSearch(pageIndex, taskCode, status) {
  return request({
    url: '/task-service/task/search',
    method: 'get',
    params: {
      pageIndex,
      taskCode,
      status
    }
  })
}
export function getTaskDetails(taskId) {
  return request({
    url: `/task-service/taskDetails/${taskId}`,
    method: 'get'
  })
}
