import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        business:[]
    },
    mutations: {
        GETSHANGJIA(state,payload){
            state.business=payload
        }
    },
    actions: {
        async GETSHANGJIA({commit}){
            var {business} = await fetch('/getall').then(res=>res.json())
            commit('GETSHANGJIA',business)
        }
    }
})
