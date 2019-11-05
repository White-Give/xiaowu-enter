<template>
    <div class="yinhang-ka">
        <div class="head">
            <span @click="goBack('/mine/wallet')">&lt;</span>
            <span>银行卡</span>
        </div>
        <!-- 银行卡一 -->
        <div class="bank1">
            <div class="left">
                <img src="/img/yinhangka/4.png" alt />
            </div>
            <div class="right">
                <h5>交通银行</h5>
                <p>储蓄卡</p>
                <h3>****&nbsp;****&nbsp;****&nbsp;1234</h3>
            </div>
        </div>
        <!-- 银行卡二  -->
        <div class="bank2">
            <div class="left">
                <img src="/img/yinhangka/3.png" alt />
            </div>
            <div class="right">
                <h5>中国银行</h5>
                <p>储蓄卡</p>
                <h3>****&nbsp;****&nbsp;****&nbsp;1234</h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        goBack(url) {
            this.$router.push({ path: url });
        }
    }
};
</script>

<style  lang="stylus" scoped>
.yinhang-ka {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top 0
    left 0
    z-index: 9;
    background: #fff;
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

/* 银行卡一 */
.bank1 {
    width: 90%;
    height: 100px;
    background: url('/img/yinhangka/2.png') no-repeat;
    margin: 0 auto;
    display: flex;

    .left {
        width: 15%;
        text-align: center;
        padding-top: 8px;

        img {
            width: 30px;
        }
    }

    .right {
        color: #D5F9FF;
        padding-top: 8px;
    }
}

.bank2 {
    width: 90%;
    height: 100px;
    background: url('/img/yinhangka/5.png') no-repeat;
    margin: 10px auto 0;
    display: flex;

    .left {
        width: 15%;
        text-align: center;
        padding-top: 8px;

        img {
            width: 30px;
        }
    }

    .right {
        color: #D5F9FF;
        padding-top: 8px;
    }
}

.bank1 .right p, .bank2 .right p {
    font-size: 12px;
    color: #69B0EE;
    padding-top: 3px;
}

.bank1 .right h3, .bank1 .right h3 {
    padding-top: 8px;
}
</style>