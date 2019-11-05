<template>
  <div class="yu-e">
    <div class="head">
      <span @click="urlGo()">&lt;</span>
      <span>会员卡</span>
    </div>
 <!-- 会员一 -->
        <div class="member1">
            <h3>富豪门窗</h3>
            <h5><span>9.5</span>折VIP</h5>
            <p>仅限线上使用</p>
        </div>
        <!-- 会员二 -->
        <div class="member1">
                <h3>东阳门窗</h3>
                <h5><span>9.8</span>折VIP</h5>
                <p>仅限线上使用</p>
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
  left 0
  top 0
  z-index:2;
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
 /* 会员一 */
        .member1{
            width: 90%;
            height: 100px;
            background: url('/img/huiyuanka/3.png') round;
            margin: 0 auto;
            margin-bottom rem(10)
            text-align: center;
        }
        .member1 h3{
            padding: 5% 0 4%;
            font-family: "STKaiti,sans-serif";
        }
        .member1 h5{
            font-weight: normal;
        }
        .member1 span{
            color: red;
        }
        .member1 p{
            width: 30%;
            margin: 0 0 0 70%;
            font-size: 12px;
            color: #8C8C8C;
        }
         .member1:nth-of-type(2){
             margin-top: 10px;
        }
</style>