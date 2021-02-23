import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)




const router =  new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:
  [
    {
     path:"",
     redirect:"/home",
     meta:{title:'首页'}
    },
    {
      path:"/home",
      component:() => import('../views/home/home.vue'),
      meta:{title:'首页'}
    },
    {
      path:"/category",
      component:() => import('../views/category/category.vue'),
      meta:{title:'分类'}
    },
    {
      path:"/shopcart",
      component:() => import('../views/shopcart/shopcart.vue'),
      meta:{title:'购物车'}
    },
    {
      path:"/profild",
      component:() => import('../views/profild/profild.vue'),
      meta:{title:'个人信息'}
    },
    {
      path:'/detail',
      component:() => import ('../views/detail/detail.vue'),
      meta: { title:'商品详情' }
    }
   ],
})
  
router.beforeEach((to, from, next) => {
 // console.log(to);
    document.title  = to.matched[0].meta.title
  
    next()
})
export default router

