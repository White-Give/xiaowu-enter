<template>
    <div class="box-business-all">
        <div class="box-business" v-for="(item,index) of business" :key="index" 
            @click="routeGo('/goods/business/'+item.id+'/shouye',index)"
        >
            <div class="box-business-left">
                <img src="/image/xiaowumenchuang.png" alt="">
            </div>
            <div class="box-business-right">
                <p class="box-business-right-top">
                    <span class="span-one">{{item.busTitle}}</span>
                    <span class="span-two">距离{{item.busjuli}}km</span>
                </p>
                <p class="box-business-right-main">{{item.busaddless}}</p>
                <div class="box-business-right-biao">
                    <span v-for="(items,index) of item.busbiaoqian" :key="index">{{items}}</span>
                </div>
                <p class="box-business-right-bottom">总成交额:<span> {{item.busPrice}} </span>元</p>
            </div>
        </div>
        <router-view :dianpuList='dianpuList'></router-view>
    </div>
</template>

<script>
export default {
    data(){
        return{
            dianpuList:[]
        }
    },
    created(){
        this.$store.dispatch('GETSHANGJIA')
    },
    computed:{
        business(){
            return this.$store.state.business
        }
    },
    methods:{
        routeGo(url,index){
            // console.log(url);
            this.$router.push({path:url})
            this.dianpuList = this.business[index]
            let storeShop = this.business[index]
            let data = new Date().getTime()
            storeShop.data = data
            let arr = localStorage.arrList || [] 
            if(arr.length == 0){
                arr = []
            }else{
                arr = JSON.parse(arr)
            }
            arr.push(storeShop)
            localStorage.arrList = JSON.stringify(arr)
        }
    }
};
</script>

<style scoped lang='stylus'>
.box-business{
    background-color #fff
    display flex
    height rem(120)
    margin rem(5) rem(15)
    padding rem(5) rem(5)
    .box-business-left{
        width rem(110)
        margin-right rem(15)
        height 100%
        img{
            width 100%
        }
    }
    .box-business-right{
        flex 1
        padding-right rem(3)
        .box-business-right-top{
            display flex
            justify-content space-between
            align-items center
            span{
                display inline-block
            }
            .span-one{
                font-size:15px;
                font-weight:bold;
            }
            .span-two{
                font-size:12px;
                color #666
            }
        }
        .box-business-right-main{
            padding rem(3) 0
            font-size rem(12)
            color #666
        }
        .box-business-right-biao{
            display flex
            justify-content space-around
            flex-wrap wrap
            span{
                width 30%
                text-align center
                padding rem(2) 0
                margin-top: rem(3);
                border: 1px solid #ed71a8;
                font-size: rem(11);
                color: #ed71a8;
            }
        }
        .box-business-right-bottom{
            font-size rem(12)
            padding-top rem(3)
            span{
                color red
            }
        }
    }
}
</style>