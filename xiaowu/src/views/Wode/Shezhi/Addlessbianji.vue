<template>
    <div class="box-setadd">
        <div class="head">
            <p class="head-left" @click="routeGo('/mine/install/myaddless')">&lt;</p>
            <p class="head-right">地址编辑</p>
        </div>
        <div>
            <van-address-edit
                :area-list="areaList"
                show-postal
                show-delete
                show-set-default
                show-search-result
                :search-result="searchResult"
                area-columns-placeholder="['北京', '昌平', '北小营']"
                @save="onSave"
                @delete="onDelete"
                @change-detail="onChangeDetail"
            />
        </div>
    </div>
</template>

<script>
export default {
    props:['areaList'],
    data() {
        return {
            areaList,
            searchResult: []
        };
    },

    methods: {
        onSave() {
            Toast("save");
        },
        onDelete() {
            Toast("delete");
        },
        onChangeDetail(val) {
            if (val) {
                this.searchResult = [
                    {
                        name: "黄龙万科中心",
                        address: "杭州市西湖区"
                    }
                ];
            } else {
                this.searchResult = [];
            }
        },
        routeGo(url){
            this.$router.push({path:url})
        }
    }
};
</script>

<style scoped lang='stylus'>
.box-setadd{
    width 100vw
    height 100vh
    background-color #efefef
    position absolute
    top 0
    left 0
    z-index 1000
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