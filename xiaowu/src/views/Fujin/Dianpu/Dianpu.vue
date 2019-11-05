<template>
    <div class="box-xiang">
        <div class="head">
            <div class="head-left" @click="routeGo('/goods/business')">
                <img src="/image/goback.png" alt="">
            </div>
            <van-search placeholder="断桥铝" v-model="value" />
            <div class="head-right">
                <img src="/img/消息.png" alt="">
            </div>
        </div>
        <div class="main" @click="Gourl(goxiang)">
            <div class="main-top">
                <div class="main-top-left">
                    <img src="/image/xiaowumenchuang.png" alt="">
                </div>
                <div class="main-top-zhong">
                    <p class="main-top-zhong-one">{{storeList.storeTitle}}</p>
                    <p class="main-top-zhong-two">{{storeList.storeaddless}}</p>
                </div>
                <div class="main-top-size">
                    <p class="main-top-size-one">{{storeList.storefensi}}</p>
                    <p class="main-top-size-two">粉丝数</p>
                </div>
                <span class="main-top-bottom">关注</span>
            </div>
        </div>
        <div class="navnav">
            <ul>
                <li v-for="(item,index) of navList" :key="index" 
                    @click="routeGo(item.url,index)"
                    :class="{cur : $route.params.size == item.size}"
                >{{item.title}}</li>
            </ul>
            <router-view :shopList='shopList'></router-view>
        </div>
    </div>
</template>

<script>
export default {
    props:['dianpuList'],
    data(){
        return{
            value:'',
            shopList:[]
        }
    },
    computed:{
        navList(){
            var arr = [{
                title:'首页',
                size:'shouye',
                url:'/goods/business/'+this.dianpuList.id+'/shouye'
            },{
                title:'全部商品',
                size:'quanbu',
                url:'/goods/business/'+this.dianpuList.id+'/quanbu'
            },{
                title:'上新',
                size:'shangxin',
                url:'/goods/business/'+this.dianpuList.id+'/shangxin'
            }];
            return arr
        },
        storeList(){
            return this.dianpuList.shopStore[0]
        },
        goxiang(){
            return '/goods/business/'+this.dianpuList.id+'/xiangqing'
        }
    },
    mounted(){
        this.shopList = this.storeList[this.$route.params.size]
    },
    methods:{
        routeGo(url,index){
            this.$router.push({path:url})
            // console.log(url,"urlurlurlurlurl");
            // console.log(this.$route.params);
            this.shopList = this.storeList[this.$route.params.size]
        },
        Gourl(url){
            console.log(url);
            this.$router.push({path:url})
        }
    }
};
</script>

<style scoped lang='stylus'>
.box-xiang{
    width 100vw
    height 100vh
    background-color #efefef
    position absolute
    top 0
    left 0
    z-index 8
    .head {
        height: 60px;
        padding: 0 rem(15);
        display: flex;
        align-items: center;
        background-color: #fff;
        justify-content: space-between;

        .head-right {
            padding: rem(5) rem(15);
            img{
                width 70%
            }
        }    
    }
    .main{
        .main-top{
            height rem(90)
            background-color #fff
            padding 0 rem(10)
            display flex
            .main-top-left{
                width rem(80)
                height rem(80)
                margin-right rem(10)
                img{
                    width 100%
                }
            }
            .main-top-zhong{
                padding-right rem(40)
                .main-top-zhong-one{
                    font-size rem(15)
                    font-weight bold
                    padding rem(15) 0
                }
                .main-top-zhong-two{
                    font-size rem(12)
                    color #333333
                }
            }
            .main-top-size{
                text-align center
                font-size rem(13)
                padding-right rem(10)
                .main-top-size-one{
                    padding rem(23) 0 rem(5) 0
                }
            }
            .main-top-bottom{
                display block
                font-size rem(12)
                height rem(22)
                padding rem(2) rem(4)
                color purple
                border 1px solid purple
                border-radius rem(10)
                margin-top 10%
            }
        }
    }
    ul{
        height rem(50)
        display flex
        text-align center
        background-color #fff
        li{
            line-height rem(50)
            width 33.33%;
            &.cur{
                color purple;
                border-bottom 1px solid purple
            }
        }
    }
}
</style>