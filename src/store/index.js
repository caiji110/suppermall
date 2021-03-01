import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "pop",
    //控制rabconntrol控制栏
    categoryindex: 0,
    //用于决定商品分类页面要展示哪些数据
    cartlist: [],
    //商品信息
  },
  mutations: {
    change(state, palyload) {
      state.title = palyload.title;
    },
    changecateindex(state, palyload) {
      state.categoryindex = palyload.index;
    },
    addcart(state, payload) {
      const oldproduct = state.cartlist.find((item) => {
        //console.log(item.iid);
        //console.log(payload.iid);

        return item.iid === payload.iid;
      });
      //console.log(oldproduct);
      //检测是否有该商品， 有则式该商品，没有则是该undefined
      //console.log(undefined)undefined;
      if (oldproduct) {
        oldproduct.count = oldproduct.count + 1;
        //   console.log('11');
        // payload.count ++
        //为什么这样不可以
        // console.log(payload);
        // //
        // console.log(oldproduct);
      } else {
        payload.count = 1;
        state.cartlist.push(payload);
        //console.log(payload);
      }
    //  console.log(state.cartlist);
    },
    changechecked1(state,payload){
      //console.log(payload);
     // console.log('wobeidiaoyongle');
     //console.log(state.cartlist[payload].checked);
      state.cartlist[payload].checked = !state.cartlist[payload].checked
      //console.log(state.cartlist[payload].checked);
     
      //console.log(  state.cartlist[payload.a].checked);
    }
  },
  actions: {},
  modules: {},
});
