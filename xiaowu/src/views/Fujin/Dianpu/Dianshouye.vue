<template>
    <div class="box-box">
        <div class="box-shouye">
            <div class="box-img" v-for="(item,index) of shopList" :key="index" 
                @click="routeGo('/goods/business/'+paramsID+'/'+paramsSIZE+'/shangpin')"
            >
                <div>
                    <img src="/image/xiaowumenchuang.png" alt="">
                </div>
                <p class="box-top">{{item.shopTitle}}</p>
                <p class="box-bottom"><span class="box-bottom-left">￥{{item.price}}</span>
                <span class="box-bottom-right">销量:{{item.storevolume}}</span></p>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    props:['shopList'],
    methods:{
        routeGo(url){
            console.log(this.$route.params);
            this.$router.push({path:url})
        }
    },
    computed:{
        paramsID(){
            return this.$route.params.id
        },
        paramsSIZE(){
            return this.$route.params.size
        }
    }
};
</script>

<style scoped lang='stylus'>
.box-shouye{
    padding 0 rem(10)
    display flex
    justify-content space-between
    flex-wrap wrap
    .box-img{
        width 48%
        background-color #fff
        margin rem(10) 0 0 0
        img{
            width 100%
        }
        .box-top{
            font-size rem(15)
            padding rem(5) rem(5)
        }
        .box-bottom{
            display flex
            justify-content space-between
            padding 0 rem(5) rem(5) rem(5)
            span{
                display block
            }
            .box-bottom-left{
                font-size rem(14)
                color red
            }
            .box-bottom-right{
                font-size rem(14)
                color #848484
            }
        }
    }
}
</style>