<template>
    <div class="box-setcon">
        <div class="head">
            <p class="head-left" @click="routeGo('/mine/install')">&lt;</p>
            <p class="head-right">关于小屋门窗</p>
        </div>
        <ul>
            <li v-for="(item,index) of guanyuList" :key="index">
                <p>{{item.title}}</p>
                <div>
                    <img src="/image/fanhui.png" alt="">
                </div>
            </li>
        </ul>
        <div class="bottom">
            <div class="bottom-top">
                <p>分享二维码给好友</p>
                <div>
                    <img src="/image/fanhui.png" alt="">
                </div>
            </div>
            <div class="bottom-center">
                <img src="/image/logo.png" alt="">
                <p>当前版本号:1.00.1</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            guanyuList:[{
                title:'新版本检测'
            },{
                title:'版权信息'
            },{
                title:'平台服务协议'
            }]
        }
    },
    methods:{
        routeGo(url){
            this.$router.push({path:url})
        }
    }
};
</script>

<style scoped lang='stylus'>
.box-setcon {
    width: 100vw;
    height: 100vh;
    background-color: #EFEFEF;
    position absolute
    top 0
    left 0
    z-index 3
    .head {
        width: 100%;
        height: rem(50);
        background-color: #fff;
        display: flex;
        align-items: center;
        .head-left {
            font-size: rem(37);
            margin-left: rem(15);
        }

        .head-right {
            display: block;
            font-size: rem(20);
            color: #333;
            font-family: PingFang SC;
            font-weight: bold;
            padding-left: rem(90);
        }
    }
    ul{
        background-color #fff
        li{
            height rem(50)
            display flex
            align-items center
            padding 0 rem(15)
            color #464646
            border-bottom 1px solid #EFEFEF 
            p{
                flex 1
            }
        }
    }
    .bottom{
        border-top 5px solid #EFEFEF
        background-color #fff
        padding 0 rem(15)
        .bottom-top{
            height rem(50)
            display flex
            align-items center
            color #464646
            p{
                flex 1
            }
        }
        .bottom-center{
            text-align center
            img{
                width rem(100)
                margin rem(15) 0
            }
            p{
                font-size rem(14)
                color #BCBCBC
                padding rem(15) 0
            }
        }
    }
}
</style>