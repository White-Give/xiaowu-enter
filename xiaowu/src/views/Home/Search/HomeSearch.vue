<template>
  <div class="sousuo-yemian">
        <div class="header">
            <span class="back" @click="goBack('/firstpage')">&lt;</span>
            <input type="text" placeholder="小屋门窗">
            <span class="sousuo">搜索</span>
        </div>
        <div class="lishi">
            <p>
                <span>历史搜索</span>
                <span class="del">删除</span>
            </p>
            <ul>
                <li>定制门窗</li>
                <li>定制门窗</li>
                <li>定制门窗</li>
                <li>定制门窗</li>
                <li>护栏</li>
                <li>护栏</li>
                <li>护栏</li>
            </ul>
        </div>
        <div class="lishi">
                <p>
                    <span>热门搜索</span>
                </p>
                <ul>
                    <li>定制门窗</li>
                    <li>定制门窗</li>
                    <li>定制门窗</li>
                    <li>定制门窗</li>
                    <li>护栏</li>
                    <li>护栏</li>
                    <li>护栏</li>
                </ul>
        </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            
        };
    },
   methods:{
       goBack(url){
           this.$router.push({ path: url });
       }
   }
}
</script>

<style scoped lang='stylus'>
.sousuo-yemian{
  width: 100vw;
  height: 100vh;
  background-color: #efefef;
  position: absolute;
  top:0;
  left:0;
  z-index: 2;
}
.header{
    width: 100%;
    height: 50px;
    background: #F8F8F8;
    display: flex;
    justify-content: space-around;
    align-items: center;

}
.header input{
    outline: none;
    height: 25px;
    width: 55%;
    border-radius: 15px;
    // background-image: url(../../public/img/搜索.png);
    // background-size: cover;
}
.header input::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    padding-left: 30px
}
.header .back{
    font-size: 30px;

}
.header .sousuo{
    border: 1px solid #fff;
    color: #fff;
    background: #C70E60;
    padding: 5px 15px;
    border-radius: 10px
}
.lishi{
    width: 96%;
    margin: 0 auto;
    padding: 15px 0
}
.lishi ul{
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.lishi ul li{
    padding: 5px 20px;
    background: #ddd;
    margin: 5px 0px
}
.lishi p{
    display: flex;
    justify-content: space-between;
    height: 30px;
    line-height: 30px;
    color: #333333
}
.lishi p .del{
    font-size: 14px
}
</style>