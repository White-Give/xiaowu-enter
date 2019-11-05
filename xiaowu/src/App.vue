<template>
    <div id="app">
        <!-- <Login></Login> -->
        <router-view></router-view>
        <ul class="navList">
            <li v-for="(item,index) of navList" :key="index" @click="torouter(item.url)">{{item.title}}</li>
        </ul>
    </div>
</template>
<script>
import Login from './views/Login/Login.vue'
export default{
    data(){
        return{
            navList:[{
                title:'首页',
                url:'/firstpage'
            },{
                title:'附近产品',
                url:'/goods/gooslist'
            },{
                title:'发现',
                url:'/discover/den'
            },{
                title:'我的',
                url:'/mine'
            }]
        }
    },
    components:{
        Login
    },
    methods:{
        torouter(url){
            this.$router.push({path:url})
        }
    }
}
</script>
<style>
.navList{
    position: fixed;
    bottom:0 ;
    display: flex;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: #efefef;
}
.navList li{
    width: 25%;
}
</style>
