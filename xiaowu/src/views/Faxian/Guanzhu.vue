<template>
    <div class="box-shang">
        <div class="content1">
            <!-- 导航图 -->
            <nav>
                <img src="/imgs/1.png" alt />
            </nav>
            <!-- 店铺一 -->
            <div class="shop">
                <!-- 店铺头部 -->
                <div class="top">
                    <div class="t-left">
                        <img src="/imgs/4.png" alt />
                    </div>
                    <div class="t-right">
                        <h4>德国墨瑟旗舰店</h4>
                        <p>07-23</p>
                    </div>
                </div>
                <!-- 店铺主要内容 -->
                <div class="main">
                    <div class="main1">
                        <img src="/imgs/5.png" alt />
                        <p>实德60塑钢窗</p>
                    </div>
                    <div class="main1">
                        <img src="/imgs/6.png" alt />
                        <p>实德60塑钢窗</p>
                    </div>
                    <div class="main1">
                        <img src="/imgs/7.png" alt />
                        <p>实德60塑钢窗</p>
                    </div>
                </div>
            </div>
            <!-- 店铺二 -->
            <div class="shop">
                <!-- 店铺头部 -->
                <div class="top">
                    <div class="t-left">
                        <img src="/imgs/4.png" alt />
                    </div>
                    <div class="t-right">
                        <h4>德国墨瑟旗舰店</h4>
                        <p>07-23</p>
                    </div>
                </div>
                <!-- 店铺主要内容 -->
                <div class="main">
                    <div class="main1">
                        <img src="/imgs/5.png" alt />
                        <p>实德60塑钢窗</p>
                    </div>
                    <div class="main1">
                        <img src="/imgs/6.png" alt />
                        <p>实德60塑钢窗</p>
                    </div>
                    <div class="main1">
                        <img src="/imgs/7.png" alt />
                        <p>实德60塑钢窗</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang='stylus'>
.box-shang {
    width: 100vw;
    background-color: #efefef;

    nav img {
        margin: 10px 0 8px 0;
    }

    .shop {
        padding: 5px;
        background: #fff;
    }

    .top {
        width: 100%;
        height: 50px;
        display: flex;
    }

    .top img, .t-left {
        width: 50px;
        height: 50px;
    }

    .t-right {
        margin-left: 5px;
    }

    .t-right h4 {
        padding-top: 5px;
    }

    .t-right p {
        font-size: 13px;
        margin-top: 5px;
        color: #D6D6D6;
    }

    .main {
        width: 100%;
        height: 130px;
        display: flex;
        justify-content: space-around;
        padding-top: 5px;
    }

    .main img {
        width: 100px;
    }

    .main p {
        font-size: 13px;
        color: gray;
    }
}
</style>