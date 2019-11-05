<template>
    <div class="box-setsecurity">
        <div class="head">
            <p class="head-left" @click="routeGo('/mine/install')">&lt;</p>
            <p class="head-right">账户安全</p>
        </div>
        <ul class="main">
            <li class="main-li">
                <p class="main-left">账号</p>
                <p class="main-center">xiaowumenchuang</p>
                <div class="main-right">
                    <img src="/image/fanhui.png" alt="">
                </div>
            </li>
            <li class="main-li">
                <p class="main-left">绑定手机号码</p>
                <p class="main-center">188****8888</p>
                <div class="main-right">
                    <img src="/image/fanhui.png" alt="">
                </div>
            </li>
            <li class="main-li">
                <p class="main-left">密码修改</p>
                <div class="main-right">
                    <img src="/image/fanhui.png" alt="">
                </div>
            </li>
            <li class="main-li main-li-one">
                <p class="main-left">注销账户</p>
                <div class="main-right">
                    <img src="/image/fanhui.png" alt="">
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    methods:{
        routeGo(url){
            this.$router.push({path:url})
        }
    }
};
</script>

<style scoped lang='stylus'>
.box-setsecurity {
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
        border-bottom: 5px solid #EFEFEF;

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
            padding-left: rem(115);
        }
    }
    .main{
        background-color #fff
        .main-li{
            display flex
            height rem(50)
            align-items center
            padding 0 rem(15)
            border-bottom 1px solid #efefef
            .main-left{
                flex 1
                color #464646
            }
            .main-center{
                color #848484
                font-size rem(14)
            }
            .main-center{
                margin-right rem(12)
            }
        }
        .main-li-one{
            border-top 5px solid #efefef !important
        }
    }
}
</style>