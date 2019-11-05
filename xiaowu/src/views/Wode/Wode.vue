<template>
  <div class="box-wode">
    <div class="head">
          <!-- 头部顶头 -->
          <div class="head-top">
              <div class="head-img">
                  <img src="/image/moren.png" alt="">
              </div>
              <div class="head-name">
                  <p class="head-name-font">小屋门窗</p>
                  <p class="head-name-img"><img src="/image/shiming.png" alt=""></p>
              </div>
              <span @click="routeGo('/mine/install')">设置</span>
          </div>
          <!-- 收藏店铺 -->
          <div class="head-bottom">
              <ul>
                  <li>
                      <p>8</p>
                      <p>收藏夹</p>
                  </li>
                  <li>
                      <p>8</p>
                      <p>关注店铺</p>
                  </li>
                  <li>
                      <p>8</p>
                      <p>浏览记录</p>
                  </li>
              </ul>
          </div>
    </div>
    <!-- 我的订单 -->
    <div class="main">
        <div class="main-top" @click="routeGo('/mine/order/dingdanAll')">
            <span>我的订单</span>
            <span class="main-top-see">查看更多订单 <img src="/image/fanhui.png" alt=""></span>
        </div>
        <div class="main-center">
            <figure @click="routeGo('/mine/demand')"><img src="/image/xuqiu.png" alt=""><figcaption>我的需求</figcaption></figure>
            <figure @click="routeGo('/mine/order/contract')"><img src="/image/hetong.png" alt=""><figcaption>待签合同</figcaption></figure>
            <figure @click="routeGo('/mine/order/willpay')"><img src="/image/daifukuan.png" alt=""><figcaption>待付款</figcaption></figure>
            <figure @click="routeGo('/mine/order/willevaluated')"><img src="/image/daipingjia.png" alt=""><figcaption>待评价</figcaption></figure>
            <figure><img src="/image/shouhou.png" alt=""><figcaption>售后</figcaption></figure>
        </div>
        <div class="main-bottom">
            <figure @click="routeGo('/mine/wallet/vip')"><img src="/image/huiyuanka.png" alt=""><figcaption>会员卡</figcaption></figure>
            <figure @click="routeGo('/mine/wallet/coupon')"><img src="/image/youhuijuan.png" alt=""><figcaption>优惠卷</figcaption></figure>
            <figure @click="routeGo('/mine/wallet/surplus')"><img src="/image/yue.png" alt=""><figcaption>余额:888</figcaption></figure>
            <figure @click="routeGo('/mine/wallet')"><img src="/image/juxing.png" alt=""><figcaption>我的钱包</figcaption></figure>
        </div>
    </div>
    <!-- 尾部图片 -->
    <div class="bottom">
        <img src="/image/haibao11.png" alt="">
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
}
</script>

<style scoped lang=stylus>
.box-wode{
    width 100vw
    height 100vh
    position relative
}
.head{
    width 100%
    height rem(170)
    color #fff
    border-bottom rem(10) solid #EBEBEB
    background:linear-gradient(180deg,rgba(232, 136, 17, 0.5),rgba(241, 161, 40, 0.5),rgba(236, 69, 144, 0.5),rgba(165, 15, 105, 0.5),rgba(193, 5, 118, 0.5));
    .head-top{
        display flex
        padding rem(24) rem(14) 0 rem(14)
        .head-img{
            width rem(53)
            height rem(53)
            margin-right rem(15) 
            img{
                width 100%
                height 100%
            }
        }
        .head-name{
            flex 1
            .head-name-font{
                padding-bottom rem(10) 
                font-family:PingFang SC;
                font-size rem(19)
            }
            .head-name-img{
                width rem(53)
                height rem(22)
                img{
                    width 100%
                    height 100%
                }
            }
        }
        span{
            display block
            width rem(40)
        }
    }
    .head-bottom{
        ul{
            display flex
            justify-content space-around
            text-align center
            padding-top rem(18)
            font-size rem(16)
        }
    }
}
.main{
    .main-top{
        display flex
        justify-content space-between
        margin 0 rem(10)
        padding 0 rem(10)
        height rem(50)
        line-height rem(50)
        border-bottom 1px solid #999
        .main-top-see{
            font-size rem(14)
            color #989898
            img{
                height rem(11)
            }
        }
    }
    .main-center{
        height rem(90)
        padding rem(15) rem(10)
        display flex
        text-align center
        justify-content space-around
        figure{
            width 20%
            height 100%
            figcaption{
                width 100%
                font-size rem(14)
            }
            img{
                width 55%
            }
        }
    }
    .main-bottom{
        padding rem(10) rem(15)
        border-top rem(10) solid #EBEBEB
        display flex
        justify-content space-around
        text-align center
        figure{
            width 25%
            figcaption{
                font-size rem(14)
            }
            img{
                width 42%
            }
        }
    }
}
.bottom{
    width 100%
    img{
        width 100%
    }
}
</style>