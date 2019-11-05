<template>
  <div class="box-xuqiu">
      <div class="head">
          <p class="head-left" @click="routerBack('/mine')">&lt;</p>
          <p class="head-right">我的需求</p>
      </div>
      <div class="main">
          <div class="main-top">
              <img src="/image/dingzhimenchuang.png" alt="">
              <span class="main-top-left">定制门窗</span>
              <span class="main-top-right">等待接单</span>
          </div>
          <div class="main-xuqiu">
              <p class="main-xuqiu-left">需求描述:</p>
              <p class="main-xuqiu-right">[断桥铝]新房装窗，需要质量、隔音好的一款断桥铝窗，三室两厅。价格在三百元以内</p>
          </div>
          <div class="main-xuqiu">
              <p class="main-xuqiu-left">地址信息:</p>
              <p class="main-xuqiu-right">吉林省-长春市-南关区 <br> 森杨路970号小屋门窗</p>
          </div>
          <div class="main-xuqiu">
              <p class="main-xuqiu-left">联系人:</p>
              <p class="main-xuqiu-right">王先生    18888888888</p>
          </div>
          <div class="main-bottom">
            <span class="main-bottom-left"><img src="/image/quxiaoyuyue.png" alt=""></span>
            <span class="main-bottom-right"><img src="/image/xiugaixinxi.png" alt=""></span>
        </div>

      </div>
      <div class="main">
          <div class="main-top">
              <img src="/image/menchuangweixiu.png" alt="">
              <span class="main-top-left">定制门窗</span>
              <span class="main-top-right">等待接单</span>
          </div>
          <div class="main-xuqiu">
              <p class="main-xuqiu-left">门窗维修:</p>
              <p class="main-xuqiu-right">[框体维修]三扇塑钢窗的窗框破损，需要维修</p>
          </div>
          <div class="main-xuqiu">
              <p class="main-xuqiu-left">地址信息:</p>
              <p class="main-xuqiu-right">吉林省-长春市-南关区 <br> 森杨路970号小屋门窗</p>
          </div>
          <div class="main-xuqiu">
              <p class="main-xuqiu-left">联系人:</p>
              <p class="main-xuqiu-right">王先生    18888888888</p>
          </div>
          <div class="main-bottom">
            <span class="main-bottom-left"><img src="/image/quxiaoyuyue.png" alt=""></span>
            <span class="main-bottom-right"><img src="/image/xiugaixinxi.png" alt=""></span>
        </div>
        </div>
  </div>
</template>

<script>
export default {
    methods:{
        routerBack(url){
            this.$router.push({path:url})
        }
    }
}
</script>

<style scoped lang='stylus'>
.box-xuqiu{
    position absolute
    top 0
    left 0
    z-index 2
    width 100vw
    height 100vh
    background-color #EFEFEF
}
.head{
    width 100%
    height rem(50)
    background-color #fff
    display flex
    align-items center
    .head-left{
        font-size rem(37)
        margin-left rem(15)
    }
    .head-right{
        display block
        font-size:rem(20);
        font-family:PingFang SC;
        font-weight:bold;
        padding-left rem(100)
    }
}
.main{
    background-color #fff
    height rem(175)
    border 1px dotted #000
    margin rem(9) rem(12) 0 rem(12)
    .main-top{
        width 100%
        padding rem(5) 0
        img{
            width rem(20)
            height rem(20)
            vertical-align middle
            margin-left 37% 
            margin-right rem(5)
        }
        .main-top-left{
            font-size:14px;
            font-weight:400;
        }
        .main-top-right{
            font-size:11px;
            font-weight:400;
            color:rgba(199,14,96,1);
            margin-left 19%
        }
    }
    .main-xuqiu{
        padding rem(3) 0
        display flex
        .main-xuqiu-left{
            font-size rem(13)
            width 33%
            color #C70E60
            padding-left rem(5) 
        }
        .main-xuqiu-right{
            font-size rem(13)
            color #333
            padding-right rem(5) 
        }
    }
    .main-bottom{
        display flex
        .main-bottom-left,.main-bottom-right{
            display block
            width:rem(74);
            height:rem(28);
            img{
                width 100%
            }
        }
        .main-bottom-left{
            margin-left 50%
            margin-right rem(10)
        }
    }
}
</style>