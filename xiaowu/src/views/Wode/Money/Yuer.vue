<template>
  <div class="yu-e">
    <div class="head">
      <span @click="urlGo()">&lt;</span>
      <span>余额</span>
    </div>
    <div class="content">
      <img src="/img/yuer/2.png" alt="" class="qian">
      <p class="wode1">我的余额</p>
     <p class="wode2">￥<span class="wode3">888</span></p>
     <p class="chongzhi">充值</p>
     <img src="/img/yuer/3.png" alt="" class="tixian">
    </div>
    
     <router-view />
  </div>
</template>

<script>
export default {
   methods:{
     goBack(url){
       this.$router.push({path:url})
     },
     urlGo(){
        this.$router.go(-1)
    }
   }
}
</script>


<style lang="stylus" scoped>
.yu-e{
  width 100vw;
  height 100vh;
  position absolute;
  top 0
  left 0
  z-index:4;
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
.content{
  text-align center
  .qian{
    margin-top 70px
    width 100px;
    height 100px
  }
  .tixian{
    width 80%;
    height 50px
    margin-top 20px
  }
  .chongzhi{
    margin-left 40px
    background-color #d90b81
    border-radius 5px 
    width 297px;
    height 50px
    line-height 50px
    margin-top 50px
  }
  .wode1,.wode2,.wode3{
    font-size 25px
  }
}
</style>
