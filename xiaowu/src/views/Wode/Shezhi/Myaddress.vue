<template>
    <div class="box-myadd">
        <div class="head">
            <p class="head-left" @click="routeGo('/mine/install')">&lt;</p>
            <p class="head-right">地址管理</p>
        </div>
        <div class="bottom">
            <van-address-list
                v-model="chosenAddressId"
                :list="list"
                :disabled-list="disabledList"
                disabled-text="以下地址超出配送范围"
                default
                @add="onAdd"
                @edit="onEdit('/mine/install/myaddless/setaddress',id)"
            />
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            chosenAddressId: "1",
            list: [
                {
                    id: "1",
                    name: "张三",
                    tel: "13000000000",
                    address:
                        "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室"
                },
                {
                    id: "2",
                    name: "李四",
                    tel: "1310000000",
                    address: "浙江省杭州市拱墅区莫干山路 50 号"
                }
            ],
            disabledList: [
                {
                    id: "3",
                    name: "王五",
                    tel: "1320000000",
                    address: "浙江省杭州市滨江区江南大道 15 号"
                }
            ]
        };
    },
    methods: {
        onAdd() {
            Toast('11')
        },

        onEdit(url, index) {
            this.$router.push({path:url},index)
        },
        routeGo(url){
            this.$router.push({path:url})
        }
    }
};
</script>

<style scoped lang='stylus'>
.box-myadd{
    width 100vw
    height 100vh
    position absolute
    background-color #efefef
    top 0
    left 0
    z-index 4
    .head {
        width: 100%;
        height: rem(50);
        background-color: #fff;
        display: flex;
        align-items: center;
        border-bottom: 5px solid #EFEFEF;

        .head-left {
            font-size: rem(37);
            margin-left: rem(15);
        }

        .head-right {
            display: block;
            font-size: rem(20);
            color: #333;
            font-family: PingFang SC;
            font-weight: bold;
            padding-left: rem(115);
        }
    }
}
</style>