<template>
  <div class="jiaoyi-kuaibao">
       <div class="header">
            <p><span @click="goBack('/firstpage')">&lt;</span>交易快报</p>
        </div>

        <ul>
            <li>
                <img src="/img/图层 4 拷贝.png" alt="">
                <section>
                    <p>恭喜用户[小屋***77]与商家[东阳门窗]</p>
                    <p>于18.10.20 13:04签订门窗定制合同</p>
                </section>
            </li>
            <li>
                <img src="/img/图层 4 拷贝.png" alt="">
                <section>
                    <p>恭喜用户[小屋***77]与商家[东阳门窗]</p>
                    <p>于18.10.20 13:04签订门窗定制合同</p>
                </section>
            </li>
            <li>
                <img src="/img/图层 4 拷贝.png" alt="">
                <section>
                    <p>恭喜用户[小屋***77]与商家[东阳门窗]</p>
                    <p>于18.10.20 13:04签订门窗定制合同</p>
                </section>
            </li>
        </ul>
  </div>
</template>

<script>
export default {
    methods:{
       goBack(url){
           this.$router.push({ path: url });
       }
   }
}
</script>

<style scoped lang='stylus'>
.jiaoyi-kuaibao{
  width: 100vw;
  height: 100vh;
  background-color #fff
  position: absolute;
  top:0;
  left:0;
  z-index: 5;
}
.header {
    width: 100%;
    height: 50px;
}
.header p{
    text-align: center;
    line-height: 50px;
    font-size: 20px;
    font-weight: 900;
}
.header p span{
    position: absolute;
    left: 15px
}
ul{
    width: 96%;
    margin: 10px auto
}
ul li{
    width: 100%;
    height: 80px;
    border-bottom: 3px dashed #ddd;
    padding: 10px 0;
    vertical-align: middle;
}
ul li img{
    width: 20%;
    float: left;
}
ul li section{
    padding: 5px 0 0 0;
    width: 75%;
    float: right;
}
ul li section p{
    padding: 5px 0;
    font-size: 14px;
}
</style>