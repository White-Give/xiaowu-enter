import Vue from 'vue'
import VueRouter from 'vue-router'
import shouye from '../views/Fujin/Dianpu/Dianshouye.vue'
Vue.use(VueRouter)

const routes = [{
    //首页
    path:'/firstpage',
    component:()=>import('../views/Home/Home.vue'),
    children:[{
        path: '/firstpage/search',
        component: () => import('../views/Home/Search/HomeSearch.vue')
    },{
        path: '/firstpage/business',
        component: () => import('../views/Home/Gengduo/gengduo.vue')
    },{
        path: '/firstpage/demand',
        component: () => import('../views/Fujin/Shangjia.vue')
    }]
},{
    //附近
    path:'/goods',
    component:()=>import('../views/Fujin/Fujin.vue'),
    children:[{
        path:'/goods/gooslist',
        component:()=>import('../views/Fujin/Shangpin.vue'),
        meta:{
            name:'产品'
        }
    },{
        path:'/goods/business',
        component:()=>import('../views/Fujin/Shangjia.vue'),
        meta:{
            name:'商家'
        },
        children:[{
            path:'/goods/business/:id',
            component: ()=>import('../views/Fujin/Dianpu/Dianpu.vue'),
            children:[{
                path:'/goods/business/:id/:size',
                component: shouye,
                children:[{
                    path:'/goods/business/:id/:size/shangpin',
                    component: ()=>import('../views/Fujin/Dianpu/Shangpin.vue'),
                }]
            },{
                path:'/goods/business/:id/xiangqing',
                component: ()=>import('../views/Fujin/Dianpu/Dianpuxiang.vue'),
            }]
        }]
    },{
        path:'/goods/youzhi',
        component:()=>import('../views/Fujin/Youzhi.vue'),
        meta:{
            name:'优质门窗'
        }
    }]
},{
    //发现
    path:'/discover/den',
    component:()=>import('../views/Faxian/Faxian.vue'),
    children:[{
        path:'/discover/den',
        component:()=>import('../views/Faxian/Xiaowuhao.vue'),
        meta:{
            name:'小屋号'
        }
    },{
        path:'/discover/newarrival',
        component:()=>import('../views/Faxian/Guanzhu.vue'),
        meta:{
            name:'关注上新'
        }
    }]
},{
    //我的
    path:'/mine',
    component:()=>import('../views/Wode/Wode.vue'),
    children:[{
        //我的-需求
        path:'/mine/demand',
        component:()=>import('../views/Wode/Xuqiu.vue')
    },{
        //我的-设置
        path:'/mine/install',
        component:()=>import('../views/Wode/Shezhi/Shezhi.vue'),
        children:[{
            path:'/mine/install/setname',
            component:()=>import('../views/Wode/Shezhi/Nicheng.vue'),
        },{
            path:'/mine/install/setsecurity',
            component:()=>import('../views/Wode/Shezhi/Anquan.vue'),
        },{
            path:'/mine/install/setconcerning',
            component:()=>import('../views/Wode/Shezhi/Guanyu.vue'),
        },{
            path:'/mine/install/setprivacy',
            component:()=>import('../views/Wode/Shezhi/Yinsi.vue'),
        },{
            path:'/mine/install/setnotice',
            component:()=>import('../views/Wode/Shezhi/Tongzhi.vue'),
        },{
            path:'/mine/install/myaddless',
            component:()=>import('../views/Wode/Shezhi/Myaddress.vue'),
            children:[{
                path:'/mine/install/myaddless/setaddress',
                component:()=>import('../views/Wode/Shezhi/Addlessbianji')
            }]
        }]
    },{
        //我的-订单
        path: "/mine/order/dingdanAll",
        component: () => import("../views/Wode/order/order.vue"),
        children: [{
            path: "/mine/order/dingdanAll",
            component: () => import("../views/Wode/order/dingdanAll.vue"),
            meta:{
                name:'全部'
            }
          },{
            path: "/mine/order/contract",
            component: () => import("../views/Wode/order/contract.vue"),
            meta:{
                name:'待签合同'
            }
          },{
            path: "/mine/order/willpay",
            component: () => import("../views/Wode/order/willpay.vue"),
            meta:{
                name:'待付款'
            }
          },{
            path: "/mine/order/willevaluated",
            component: () => import("../views/Wode/order/willevaluated.vue"),
            meta:{
                name:'待评价'
            }
          }]
    },{
        //我的-钱包
        path:'/mine/wallet',
        component:()=>import('../views/Wode/Money/Money.vue'),
        children:[{
            path:'/mine/wallet/surplus',
            component:()=>import('../views/Wode/Money/Yuer.vue')
        },{
            path:'/mine/wallet/bankcard',
            component:()=>import('../views/Wode/Money/Yinhangka.vue')
        },{
            path:'/mine/wallet/vip',
            component:()=>import('../views/Wode/Money/Huiyuanka.vue')
        },{
            path:'/mine/wallet/coupon',
            component:()=>import('../views/Wode/Money/Youhui.vue'),
            children:[{
                path:'/mine/wallet/Coupon/quanpin',
                component:()=>import('../views/Wode/Money/Quanpinlei.vue')
            },{
                path:'/mine/wallet/Coupon/dianpu',
                component:()=>import('../views/Wode/Money/Dianpu.vue')
            }]
        }]
    }]
}]

const router = new VueRouter({
  routes
})
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
export default router
