<template>
    <div class="box-shop">
        <div class="head">
            <div @click="Goback">
                <img src="/image/goback.png" alt />
            </div>
            <van-search placeholder="搜索商家" v-model="value" />
            <span>搜索</span>
        </div>
        <ul>
            <li v-for="(item,index) of navList" :key="index"
                @click="routeGo(item.url)"
                :class="{cur:item.title==$route.meta.name}"
            >{{item.title}}</li>
        </ul>
        <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" />
            <van-dropdown-item v-model="value2" :options="option2" />
        </van-dropdown-menu>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navList: [
                {
                    title: "产品",
                    url:'/goods/gooslist'
                },
                {
                    title: "商家",
                    url:'/goods/business'
                },
                {
                    title: "优质门窗",
                    url:'/goods/youzhi'
                }
            ],
            value : '',
            value1: 0,
            value2: "a",
            option1: [
                { text: "全长春", value: 0 },
                { text: "朝阳区", value: 1 },
                { text: "二道区", value: 2 },
                { text: "宽城区", value: 3 },
                { text: "绿园区", value: 4 },
                { text: "南关区", value: 5 },
                { text: "高新区", value: 6 }
            ],
            option2: [
                { text: "全品类", value: "a" },
                { text: "塑钢窗", value: "b" },
                { text: "铝包木", value: "c" },
                { text: "阳光房", value: "d" },
                { text: "纱窗", value: "e" },
                { text: "木塑铝", value: "f" }
            ]
        };
    },
    methods:{
        routeGo(url){
            this.$router.push({path:url})
        },
        Goback(){
            this.$router.go(-1)
        }
    }
};
</script>

<style scoped lang='stylus'>
.box-shop {
    width: 100%;
    height: 100%;
    background-color: #efefef;
    .head {
        height: 50px;
        padding: 0 rem(15);
        display: flex;
        align-items: center;
        background-color: #fff;
        justify-content: space-between;

        span {
            display: block;
            padding: rem(5) rem(15);
            background-color: purple;
            color: #fff;
            border-radius: rem(5);
        }
    }

    ul {
        height: rem(40);
        background-color: #fff;
        display: flex;
        align-items: center;

        li {
            width: 33.33%;
            height rem(28)
            text-align: center;
        }
        li.cur{
            color purple
            border-bottom 1px solid purple
        }
    }
}
</style>