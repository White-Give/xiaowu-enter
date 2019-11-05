
<template>
    <div class="wode-qianbao">
        <div class="head">
            <span @click="routerGo('/mine')">&lt;</span>
            <span>我的钱包</span>
        </div>

        <div class="content">
            <img src="/img/wodeqianbao/125.png" alt />

            <div class="money" @click="routerGo('/mine/wallet/surplus')">
                <img src="/img/wodeqianbao/1.png" alt />
                <span>余额</span>
                <span>888</span>
                <img src="/img/wodeqianbao/7.png" alt class="pay" />
                <img src="/img/wodeqianbao/8.png" alt class="takeout" />
            </div>

            <div class="youhui" @click="routerGo('/mine/wallet/Coupon')">
                <img src="/img/wodeqianbao/2.png" alt />
                <span>优惠券</span>
                <span>8张</span>
                <img src="/img/wodeqianbao/5.png" alt class="jiantou" />
            </div>
            <div class="yinhangka" @click="routerGo('/mine/wallet/Bankcard')">
                <img src="/img/wodeqianbao/4.png" alt />
                <span>我的银行卡</span>
                <img src="/img/wodeqianbao/5.png" alt class="jiantou" />
            </div>
            <div class="huiyuan" @click="routerGo('/mine/wallet/Vip')">
                <img src="/img/wodeqianbao/3.png" alt />
                <span>会员卡</span>
                <span>8张</span>
                <!-- <img src="/img/wodeqianbao/5.png" alt class="jiantou" /> -->
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>


<script>
import { Cell, CellGroup } from "vant";

export default {
    methods: {
        routerGo(url) {
            this.$router.push({ path: url });
        }
    }
};
</script>

<style lang="stylus" scoped>
.wode-qianbao {
    width: 100vw;
    height: 100vh;
    background-color #efefef
    position: absolute;
    top 0
    left 0
    z-index: 4
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

.content {
    background-color: #eee;

    img {
        width: 100%;
        height: 150px;
    }

    .money {
        width: 95%;
        height: 70px;
        margin-top: 15px;
        border: 1px dotted red;
        border-radius: 5px;
        background-color: #fff;
        margin-left: 10px;
        position: relative;

        img {
            width: 25px;
            height: 25px;
            margin: 21px 0 23px 23px;
        }

        .pay {
            width: 60px;
            height: 30px;
            margin-left: 140px;
        }

        .takeout {
            width: 60px;
            height: 30px;
        }

        span:first-of-type {
            left: 15%;
            top: 35%;
            position: absolute;
            margin-left: 20px;
        }

        span:nth-of-type(2) {
            position: absolute;
            left: 30%;
            top: 35%;
        }
    }

    .youhui {
        width: 95%;
        height: 70px;
        margin-top: 15px;
        margin-left: 10px;
        background-color: #fff;
        border-radius: 5px;
        position: relative;

        img {
            width: 25px;
            height: 25px;
            margin: 21px 0 23px 23px;
        }

        span:first-of-type {
            left: 15%;
            top: 35%;
            position: absolute;
            margin-left: 20px;
        }

        span:nth-of-type(2) {
            position: absolute;
            left: 35%;
            top: 35%;
        }

        .jiantou {
            margin-left: 300px;
            width: 15px;
            height: 15px;
        }
    }

    .huiyuan {
        width: 95%;
        height: 70px;
        margin-top: 15px;
        margin-left: 10px;
        border-radius: 5px;
        background-color: #fff;
        position: relative;

        img {
            width: 25px;
            height: 25px;
            margin: 21px 0 23px 23px;
        }

        span:first-of-type {
            left: 15%;
            top: 35%;
            position: absolute;
            margin-left: 20px;
        }

        span:nth-of-type(2) {
            position: absolute;
            left: 35%;
            top: 35%;
        }

        .jiantou {
            margin-left: 300px;
            width: 15px;
            height: 15px;
        }
    }

    .yinhangka {
        width: 95%;
        height: 70px;
        margin-top: 15px;
        border-radius: 5px;
        margin-left: 10px;
        background-color: #fff;
        position: relative;

        img {
            width: 25px;
            height: 25px;
            margin: 21px 0 23px 23px;
        }

        span {
            left: 15%;
            top: 35%;
            position: absolute;
            margin-left: 20px;
        }

        .jiantou {
            margin-left: 300px;
            width: 15px;
            height: 15px;
        }
    }

    .kong {
        width: 100%;
        height: 150px;
        background-color: #eee;
    }
}
</style>
