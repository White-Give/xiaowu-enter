<template>
    <div class="box-shezhi">
        <div class="head">
            <p class="head-left" @click="routeGo('/mine')">&lt;</p>
            <p class="head-right">设置</p>
        </div>
        <div class="main" @click="routeGo('/mine/install/setname')">
            <div class="main-left">
                <img src="/image/logo.png" alt />
            </div>
            <div class="main-center">
                <p class="main-center-top">小屋门窗</p>
                <p class="main-center-bottom">账号 : xiaowumenchuang</p>
            </div>
            <div class="main-right">
                <img src="/image/fanhui.png" alt />
            </div>
        </div>
        <ul>
            <li class="clicklist clickbottom" @click="routeGo('/mine/install/myaddless')">
                <span>我的地址</span>
                <img src="/image/fanhui.png" alt />
            </li>
            <li class="clicklist clickbottom" @click="routeGo('/mine/install/setsecurity')">
                <span>账户安全</span>
                <img src="/image/fanhui.png" alt />
            </li>
            <li class="clicklist" @click="routeGo('/mine/install/setnotice')">
                <span>通知提醒</span>
                <img src="/image/fanhui.png" alt />
            </li>
            <li class="clicklist clickbottom"  @click="routeGo('/mine/install/setprivacy')">
                <span>隐私设置</span>
                <img src="/image/fanhui.png" alt />
            </li>
            <li class="clicklist">
                <span>帮助与反馈</span>
                <img src="/image/fanhui.png" alt />
            </li>
            <li class="clicklist" @click="routeGo('/mine/install/setconcerning')">
                <span>关于小屋门窗</span>
                <img src="/image/fanhui.png" alt />
            </li>
        </ul>
        <div class="bottom" @click="routeGo('/login')">
            <img src="/image/tuichu.png" alt="">
        </div>
        <router-view></router-view>
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
.box-shezhi {
    width: 100vw;
    height: 100vh;
    background-color: #EFEFEF;
    color: #464646;
    position absolute
    top 0
    left 0
    z-index 2
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
            padding-left: rem(130);
        }
    }

    .main {
        width: 100%;
        height: rem(90);
        background-color: #fff;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #ccc;

        .main-left {
            width: rem(60);
            height: rem(60);
            margin: 0 rem(12);

            img {
                width: 100%;
            }
        }

        .main-center {
            flex: 1;

            .main-center-top {
                font-size: rem(18);
                padding-bottom: rem(10);
            }

            .main-center-bottom {
                font-size: rem(12);
                color: #acacac;
            }
        }

        .main-right {
            padding-right: rem(15);
        }
    }

    .clicklist {
        height: rem(55);
        background-color: #fff;
        display: flex;
        align-items: center;
        padding: 0 rem(15);

        span {
            flex: 1;
        }
    }
    .clickbottom{
        border-bottom: 5px solid #EFEFEF;
    }
    .bottom{
        width 100vw
        height rem(50)
        position absolute
        bottom 0
        img{
            width 100%
        }
    }
}
</style>