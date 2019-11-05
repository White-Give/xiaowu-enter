<template>
  <div id="app" >
    <router-view></router-view>
    <div class="shouye">
        <header>
            <div class="header-sousuo">
                <img src="/img/定位.png" alt="">
                <img src="/img/扫一扫 拷贝.png" alt="">
                
                <input type="text" placeholder="请输入搜索内容" @click="routerGo('/firstpage/search')">
                <img src="/img/消息.png" alt="" class="last_img">
            </div>
            <img src="/img/228431588524717155.png" alt="">
        </header>
        <div class="header-nav">
            <figure>
                <img src="/img/需求.png" alt="">
                <figcaption>需求发布</figcaption>
            </figure>
            <figure @click="routerGo('/goods/business')">
                <img src="/img/需求.png" alt="">
                <figcaption>搜索商家</figcaption>
            </figure>
            <figure>
                <img src="/img/需求.png" alt="">
                <figcaption>需求发布</figcaption>
            </figure>
            <figure>
                <img src="/img/需求.png" alt="">
                <figcaption>需求发布</figcaption>
            </figure>
            <figure>
                <img src="/img/需求.png" alt="">
                <figcaption>需求发布</figcaption>
            </figure>
        </div>
         <!-- 广告 -->
        <div class="guanggao">
            <div class="info">
                <img src="/img/交易 快报.png" alt="">
                <ul>
                    <li>恭喜用户[小屋***77]与商家[实德门窗]</li>
                    <li>于18.10.20 13:04签订门窗定制合同</li>
                </ul>
                <a href="#" @click="routerGo('/firstpage/business')">更多</a>
            </div>
            <img src="/img/59cc4db46c052.png" alt="">
        </div>
        <!-- 产品选择 -->
        <div class="chanpin">
            <p>
                <img src="/img/窗户(1).png" alt="">
                <span>产品选择</span>
            </p>
            <div class="xuanze">
                <ul>
                    <li>塑钢窗</li>
                    <li>塑钢窗</li>
                    <li>塑钢窗</li>
                    <li>塑钢窗</li>
                    <li>塑钢窗</li>
                    <li>塑钢窗</li>
                </ul>
            </div>
            <div class="liebiao">
                <figure>
                    <img src="/img/timg (2).png" alt="">
                    <p>
                        <span>实德60塑钢窗</span>
                        <span style="color: #f00;font-size:12px;">¥240</span>
                    </p>
                    <p style="color: #63654f;font-size:12px;">
                        <span>刘氏门窗</span>
                        <span>销量：888</span>
                    </p>
                </figure>
                <figure>
                    <img src="/img/timg (2).png" alt="">
                    <p>
                        <span>实德60塑钢窗</span>
                        <span style="color: #f00;font-size:12px;">¥240</span>
                    </p>
                    <p style="color: #63654f;font-size:12px;">
                        <span>刘氏门窗</span>
                        <span>销量：888</span>
                    </p>
                </figure>
                <figure>
                    <img src="/img/timg (2).png" alt="">
                    <p>
                        <span>实德60塑钢窗</span>
                        <span style="color: #f00;font-size:12px;">¥240</span>
                    </p>
                    <p style="color: #63654f;font-size:12px;">
                        <span>刘氏门窗</span>
                        <span>销量：888</span>
                    </p>
                </figure>
                <figure>
                    <img src="/img/timg (2).png" alt="">
                    <p>
                        <span>实德60塑钢窗</span>
                        <span style="color: #f00;font-size:12px;">¥240</span>
                    </p>
                    <p style="color: #63654f;font-size:12px;">
                        <span>刘氏门窗</span>
                        <span>销量：888</span>
                    </p>
                </figure>
            </div>
            <!-- 查看更多 -->
            <p class="more">查看更多</p>
        </div>

        <!-- 门窗维修 -->
        <div class="chanpin weixiu">
            <p>
                <img src="/img/窗户(1).png" alt="">
                <span>门窗维修</span>
            </p>
            <div class="xuanze">
                <ul>
                    <li>朝阳区</li>
                    <li>朝阳区</li>
                    <li>朝阳区</li>
                    <li>朝阳区</li>
                    <li>朝阳区</li>
                    <li>朝阳区</li>
                </ul>
            </div>

            
            <!-- 查看更多 -->
            <p class="more">查看更多</p> 
        </div>
      </div>
    
  </div>
</template>

<script>
export default {
  
    methods: {
        routerGo(url) {
            this.$router.push({ path: url });
        }
    }
}
</script>

<style scoped lang='stylus'>
#app{
  width: 100%;
  height: 100%;
}
.shouye{
  width: 100vw;
  height: 100vh;
  overflow-y:auto;
  padding-bottom 50px
}
header {
    width: 100%;
    height: 180px;
}

header>img {
    width: 100%;
    height: 100%;
}

header .header-sousuo {
    width: 100%;
    height: 45px;
    position: fixed;
    background: rgba(255, 255, 255, 0.6);
    top: 0px;
    left: 0;
    display: flex;
    justify-content: space-around;
    align-items: center
}

header .header-sousuo>img {
    width: 34px;
    height: 35px;
}

header .header-sousuo>input {
    width: 225px;
    height: 30px;
    outline: none;
    background: #c6c6cb
}
.header-nav {
    width: 100%;
    height: 100px;
    border-bottom: 3px solid #eee;
    display: flex;
    justify-content: space-around;
    align-items: center
}

.header-nav figure {
    width: 13%;
    height: 50px
}

.header-nav figure img {
    padding-left: 14%;
    width: 72%;
    height: 65%
}

.header-nav figure figcaption {
    font-size: 12px
}
.guanggao {
    width: 90%;
    height: 180px;
    margin: 0 auto
}

.guanggao .info {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center
}

.guanggao .info>img {
    width: 45px;
    height: 45px;
}

.guanggao .info ul {
    border-left: 1px solid #ab9c9c;
    padding-left: 15px
}

.guanggao .info ul li {
    font-size: 12px;
    padding: 3px 0;
    color: #333333
}

.guanggao .info a {
    color: #6D6D6D;
}

.guanggao>img {
    width: 100%
}
.chanpin {
    width: 90%;
    margin: 0 auto
    padding-top rem(10)
}

.chanpin>p {
    height: 40px;
    width: 100%;
    text-align: center;
    line-height: 30px;
    color: #dc6c9e;
    font-size: 22px;
    padding-bottom: 10px;
}

.chanpin p img {
    vertical-align: middle;
    width: 20px;
    height: 20px
}

.xuanze {
    width: 100%;
    height: 80px;
}

.xuanze ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.xuanze ul li {
    width: 30%;
    height: 30px;
    font-size: 14px;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
    border: 1px solid #ccc;
}

.liebiao {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.liebiao figure {
    width: 46%;
    height: 230px;
    background: #f1e2e2;
    border-radius: 5px 5px 0 0;
    margin-bottom: 10px;
}

.liebiao figure img {
    width: 100%
}

.liebiao figure p {
    display: flex;
    justify-content: space-between;
    padding: 5px rem(10);
    font-size: 14px;
}

.chanpin .more {
    width: 100%;
    height: 30px;
    font-size: 16px;
    color: #333333;
}
</style>
