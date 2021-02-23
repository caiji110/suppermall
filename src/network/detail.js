import {ajax} from './request'

export function getdetail(iid){
    return ajax({
        url:'/detail',
        params:{iid}
    })
}