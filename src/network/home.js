import {ajax} from './request'

export function getmultidata(){
  return ajax({ url:'/home/multidata'})
}
export function getgoods(type,page){
  return ajax({
    url:"/home/data",
    params:{
      type,page
    }
  })
}