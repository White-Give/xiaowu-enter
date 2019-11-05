<template>
  <div class="quanpin-lei">
          <router-view />
    <div class="head">
      <span @click="goBack('/mine/wallet')">&lt;</span>
      <span>优惠券</span>
    </div>
     <ul>
        <li class="top-quanbu" @click="goAll('/mine/wallet/coupon')">全部</li>
        <li>全品类优惠券</li>
        <li @click="goUrl('/mine/wallet/Coupon/dianpu')">店铺优惠券</li>
      </ul>
    <div class="quanbu-center">
          <img class="zuo" src="/img/quanpinlei/1.png" alt />
          <div class="center-right">
            <div class="center-top">
              <p class="qian">&yen;158 慢888减158</p>
            </div>
            
            <div class="center-bottom">
              <p>
                <span class="quan">店铺优惠券</span>
               
              </p>
            </div>
            <div class="center-zhongjian">
               <p class="youxiaoqi">有效期：2018.11.11 0:00-2019.8.9 0:00</p>
            </div>
          </div>
           <div class="hezi">
                <img src="/img/quanpinlei/3.png" alt="" class="you">
                </div>
          </div>
          <div class="quanbu-center">
          <img class="zuo" src="/img/quanpinlei/1.png" alt />
          <div class="center-right">
            <div class="center-top">
              <p class="qian">&yen;158 慢888减158</p>
            </div>
            
            <div class="center-bottom">
              <p>
                <span class="quan">店铺优惠券</span>
               
              </p>
            </div>
            <div class="center-zhongjian">
               <p class="youxiaoqi">有效期：2018.11.11 0:00-2019.8.9 0:00</p>
            </div>
          </div>
           <div class="hezi">
                <img src="/img/quanpinlei/3.png" alt="" class="you">
                </div>
          </div>
     <div class="bottom">
            <img src="/img/quanpinlei/2.png" alt="" class="lingquan">
          </div>
 
  </div>
</template>

<script>

export default {
  methods:{
    goBack(url){
      this.$router.push({path:url})
    },goAll(url){
       this.$router.push({path:url})
    },goUrl(url){
       this.$router.push({path:url})
    }
  }
};
</script>


<style lang="stylus" scoped>
.quanpin-lei{
     width 100vw;
  height 100vh;
  position absolute;
  z-index:5;
  background #fff
}
.head {
  width: 100%;
  height: 44px;
  position: relative;
  background-color: #fff;

  span:first-of-type {
    line-height: 44px;
    font-size: 40px;
    margin-left: 20px;
  }

  span:nth-of-type(2) {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
  }
}
ul{
    width 100%
    height 40px;
    margin-bottom 15px
    display flex;
    justify-content space-around
    li{
      width 33.3%
      text-align center
      line-height 40px
    }
  }
.quanbu-center {
        display: flex;
        justify-content: space-between;
        padding: 0px 10px 10px 10px;
        // border-bottom: 1px solid #999999;
        // background-color #999999

        .zuo {
          width: 73px;
          height: 83px;
          // flex: 2;
        }
     
        .center-right {
          // flex: 5;
          // padding: 10px 0;
        }


        .center-top, .center-bottom .center-zhongjian{
          display: flex;
          justify-content: space-between;
          .deguo{
            font-size 14px;
            color #ec3232
          }
          .qian{
            color  #ec3232
            margin-left 10px
          }
        
        }
        .center-bottom {
          padding-top: 10px;
          height 50px

    
          .quan{
            font-size 10px
            color #b9c4b8
            line-height 10px
            margin-left 10px
          }
        }
         .center-zhongjian{
       .youxiaoqi{
            font-size 8px
            color #b9c4b8
            margin-left 5px
          }
   }
      }
      .bottom{
        position fixed
        bottom 0
        .lingquan{
          width 100%;
          height 50px
        }
      }
        .hezi{
        // flex 0.5;
            width 80px;
            height 80px
            line-height 80px
            border-left 1px dotted red
            .you{
            width 70px;
            height 25px
            line-height 25px
            // margin-left 190px
            vertical-align middle
            padding-left 10px
            
          
          }
          }
        
</style>
