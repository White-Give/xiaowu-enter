<template>
    <div class="box-yinsi">
        <div class="head">
            <p class="head-left" @click="routeGo('/mine/install')">&lt;</p>
            <p class="head-right">通知提醒</p>
        </div>
        <div class="main">
            <ul>
                <li>
                    <div class="main-left">
                        <p class="main-left-top">新消息提醒</p>
                        <p class="main-left-bottom">关闭后，小屋门窗不运行时将收不到新消息提醒</p>
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
                        <p class="main-left-top">铃声提醒</p>
                    </div>
                    <div class="main-right">
                        <van-switch
                            v-model="checkedtwo"
                            size="24px"
                        />
                    </div>
                </li>
                <li>
                    <div class="main-left">
                        <p class="main-left-top">振动提醒</p>
                    </div>
                    <div class="main-right">
                        <van-switch
                            v-model="checkedthree"
                            size="24px"
                        />
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
            checkedtwo:false,
            checkedthree: false
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
        border-bottom 5px solid #efefef
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