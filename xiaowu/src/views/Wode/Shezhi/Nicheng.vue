<template>
    <div class="box-touxiang">
        <div class="head">
            <p class="head-left" @click="routeGo('/mine/install')">&lt;</p>
            <p class="head-right">设置</p>
        </div>
        <div class="main">
            <p class="main-left">头像</p>
            <div class="main-center">
                <img src="/image/logo.png" alt="">
            </div>
            <div class="main-right">
                <img src="/image/fanhui.png" alt="">
            </div>
        </div>
        <div class="bottom">
            <p class="bottom-left">账号</p>
            <p class="bottom-right">xiaowumenchuang</p>
        </div>
        <div class="weibu">
            <p class="weibu-left">昵称</p>
            <p class="weibu-center">小屋门窗</p>
            <div class="weibu-right">
                <img src="/image/fanhui.png" alt="">
            </div>
        </div>
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
.box-touxiang {
    width: 100vw;
    height: 100vh;
    color #464646
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
            padding-left: rem(130);
        }
    }
    .main{
        height rem(100)
        background-color #fff
        display flex
        align-items center
        padding 0 rem(15)
        .main-left{
            flex 1
            font-size rem(18)
        }
        .main-center{
            width rem(60)
            height rem(60)
            margin-right rem(12)
            img{
                width 100%
            }
        }
    }
    .bottom{
        width 100vw
        height rem(50)
        padding 0 rem(15)
        display flex
        justify-content space-between
        align-items center
        background-color #fff
        border-bottom 5px solid #EFEFEF;
        .bottom-right{
            font-size rem(12)
            color #ACACAC
        }
    }
    .weibu{
        width 100vw
        height rem(50)
        display flex
        align-items center
        padding 0 rem(15)
        background-color #ffffff
        .weibu-left{
            flex 1
        }
        .weibu-center{
            margin-right rem(12)
            color #acacac
        }
    }
}
</style>