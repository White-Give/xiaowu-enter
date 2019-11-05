<template>
    <div class="box-faxian">
        <div class="head">
            <p class="head-left" @click="Gourl">&lt;</p>
            <p class="head-right">发现</p>
        </div>
        <ul>
            <li v-for="(item,index) of navList" :key="index" 
                @click="routeGo(item.url)"
                :class="{cur:item.title==$route.meta.name}"
            >{{item.title}}</li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navList: [
                {
                    title: "小屋号",
                    url:'/discover/den'
                },
                {
                    title: "关注上新",
                    url:'/discover/newarrival'
                }
            ]
        };
    },
    methods:{
        routeGo(url){
            this.$router.push({path:url})
        },
        Gourl(){
            this.$router.go(-1)
        }
    }
};
</script>

<style scoped lang='stylus'>
.box-faxian {
    width 100vw
    height 100vh
    background-color #efefef
    overflow hidden
    .head {
        width: 100%;
        height: rem(50);
        background-color: #fff;
        display: flex;
        align-items: center;

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
            padding-left: rem(130);
        }
    }

    ul {
        width: 100%;
        height: 40px;
        background: #fff;
        list-style: none;
        display: flex;
        li {
            width: 50%;
            text-align: center;
            line-height: 40px;
        }
        li.cur{
            background-color purple 
            color #fff
        }
    }

}
</style>