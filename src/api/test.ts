import request from '@/utils/request'

export function getTest(){
  return request({
    url:'/modulesApi/getList',
    method:'get'
  })
}