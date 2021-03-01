
import {ajax} from './request'

export function getcategory (){
      return ajax({url:"/category"})
}
export function subcategory(a){
      return ajax({
            url:"/subcategory",
            params:{
                  maitKey:a
            }
      })
}
export function categorygoods(a){
      return ajax({
            url:"/subcategory/detail",
            params:{
                  miniWallkey:a,
                  type:'pop'
            }
      })
}