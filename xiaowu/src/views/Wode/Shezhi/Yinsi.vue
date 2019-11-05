<template>
    <div class="box-yinsi">
        <div class="head">
            <p class="head-left" @click="routeGo('/mine/install')">&lt;</p>
            <p class="head-right">隐私设置</p>
        </div>
        <div class="main">
            <ul>
                <li>
                    <div class="main-left">
                        <p class="main-left-top">通过手机号搜索到我</p>
                        <p class="main-left-bottom">关闭后，其他用户将不能通过手机号搜索到你，你也 不会出现在其他人的手机</p>
                    </div>
                    <div class="main-right">
                        <van-switch
                            v-model="checkedone"
                            size="24px"
                        />
                    </div>
                </li>
                <li>
                    <div class="main-left">
                        <p class="main-left-top">通过会员名搜索到我</p>
                        <p class="main-left-bottom">关闭后，其他用户将不能通过会员名搜索到你</p>
                    </div>
                    <div class="main-right">
                        <van-switch
                            v-model="checkedtwo"
                            size="24px"
                        />
                    </div>
                </li>
                <li>
                    <span class="main-black">黑名单列表</span>
                    <div>
                        <img src="/image/fanhui.png" alt="">
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            checkedone:true,
            checkedtwo:false
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
.box-yinsi{
    width 100vw
    height 100vh
    background-color #EFEFEF
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
            padding-left: rem(115);
        }
    }
    .main{
        width 100vw
        background-color #fff
        padding 0 rem(15)
        color #464646
        ul{
            li{
                display flex
                padding rem(15) 0
                border-bottom 1px solid #EFEFEF
                .main-left{
                    width 80%
                    .main-left-top{
                        font-size rem(17)
                    }
                    .main-left-bottom{
                        padding-top rem(10)
                        padding-right rem(10)
                        font-size rem(12)
                        color #8E8E8E
                    }
                }
                .main-right{
                    width 20%
                }
                .main-right{
                    text-align center
                }
                .main-black{
                    flex 1
                }
            }
        }
    }
}
</style>