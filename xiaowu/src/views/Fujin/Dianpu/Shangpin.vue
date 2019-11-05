<template>
    <div id="shangpin">
        <header>
            <ul>
                <li>商品</li>
                <li @click="routerGo('/fujin/pinglun')">评价</li>
                <li @click="routerGo('/fujin/xiangqing')">详情</li>
            </ul>
            <div class="header-img">
                <img src="/images/position.png" alt />
            </div>
            <div class="goback">
                <p class="iconfont icon-fanhui" @click="routerBack('/fujin')"></p>
            </div>
        </header>
        <router-view></router-view>
        <div class="main">
            <div class="main-img">
                <img src="/images/bgd.png" alt />
            </div>
            <div class="main-money">
                <span>&yen;888-1088</span>
            </div>
            <div class="mian-txt">
                <span>阳光房铝包木断桥铝塑钢窗</span>
                <p>
                    <img src="/images/share.png" alt /> 分享
                </p>
            </div>
        </div>
        <div class="changtiao">
            <img src="/images/changtiao.png" alt />
        </div>
        <div class="guige">
            <p>规格</p>
            <span @click="showguige">选择系列/颜色</span>
        </div>
        <div class="guige">
            <p>参数</p>
            <span @click="showCanshu">品牌、材质......</span>
        </div>
        <div class="changtiao">
            <img src="/images/changtiao.png" alt />
        </div>
        <div class="pingjia">
            <div class="pingjia-head">
                <p>商品评价(999)</p>
                <span @click="routerGo('/fujin/pinglun')">查看全部></span>
            </div>
            <div class="pingjia-main">
                <div class="p-m-t">
                    <span>卖家非常快，安装非常到位，材料我看了都是好材料，会推荐 给朋友。</span>
                </div>
            </div>
        </div>
        <div class="changtiao">
            <img src="/images/changtiao.png" alt />
        </div>
        <div class="shangpu">
            <div class="shangpu-head">
                <div class="shangpu-h-img">
                    <img src="/images/box.png" class="s-h-i-img" />
                </div>
                <div class="shangpu-h-txt">
                    <span>小屋门窗直营店</span>
                    <p>净月区森杨路99号</p>
                </div>
                <div class="shangpu-h-all">
                    <span>全部商品</span>
                </div>
                <div class="shangpu-h-go">
                    <span>进店逛逛</span>
                </div>
            </div>
            <div class="shangpu-foot">
                <ul>
                    <li>
                        商品评分：
                        <p>9.8</p>
                    </li>
                    <li>
                        服务态度：
                        <p>9.8</p>
                    </li>
                    <li>
                        服务速度：
                        <p>9.8</p>
                    </li>
                </ul>
            </div>
        </div>

        <div class="guigeyuyue" v-show="issShow">
            <div class="guigeyuyue-header">
                <div class="g-h-i">
                    <img src="/images/timg.png" alt />
                </div>
                <div class="g-h-t">
                    <p>&yen;888-1088 /平米</p>
                </div>
                <div @click=" showguige" class="gb">
                    <img src="/images/cha.png" alt class="chacha" />
                </div>
            </div>
            <div class="guigeyuyue-fenlei">
                <span class="g-f-txtt">阳光房11系列</span>
                <span class="g-f-txtt">阳光房11系列</span>
                <span class="g-f-txtt">阳光房11系列</span>
                <span class="g-f-txtt">阳光房11系列</span>
                <span class="g-f-txtt">阳光房11系列</span>
                <span class="g-f-txtt">阳光房11系列</span>
            </div>
            <div class="guigeyuyue-num">
                <div class="add">
                    <img src="/images/+.png" alt class="addbtn" />
                </div>
                <p>1</p>
                <div class="jian">
                    <img src="/images/-.png" alt class="jianbtn" />
                </div>
            </div>
            <div class="guigeyuyue-foot">
                <p>立即预约</p>
            </div>
        </div>

        <div class="canshu" v-show="isShow">
            <div class="canshu-header">
                <span>产品参数</span>
            </div>
            <ul>
                <li>
                    品牌：
                    <span>墨瑟</span>
                </li>
                <li>
                    型号：
                    <span>墨瑟70系列</span>
                </li>
                <li>
                    材质：
                    <span>断桥铝</span>
                </li>
                <li>
                    打开方式：
                    <span>平开/上悬</span>
                </li>
                <li>
                    玻璃品牌：
                    <span>台玻</span>
                </li>
                <li>
                    玻璃规格：
                    <span>5mm</span>
                </li>
                <li>
                    五金品牌：
                    <span>三星</span>
                </li>
                <li>
                    胶条：
                    <span>三元乙丙</span>
                </li>
                <li>
                    计价单位：
                    <span>平方米</span>
                </li>
            </ul>
            <button @click="showCanshu">完成</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isShow: false,
            issShow: false
        };
    },
    methods: {
        showCanshu() {
            this.isShow = !this.isShow;
        },
        showguige() {
            this.issShow = !this.issShow;
        },
        routerGo(url) {
            this.$router.push({ path: url });
        },
        routerBack(url) {
            this.$router.push({ path: url });
        }
    }
};
</script>
<style lang='stylus' scoped src='./shangpin.styl'></style>
