import axios from 'axios'

 export function ajax(obj){
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/m5',
        timeout:5000
    });
    instance.interceptors.response.use(res => {
        return res.data;
    })
    return instance(obj)
 }
 
  
