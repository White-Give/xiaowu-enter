<template>
    <div class="box-dianpu">
        <div class="head">
            <p class="head-left">&lt;</p>
            <p class="head-right">店铺简介</p>
        </div>
        <div class="box-name">
            <div class="box-name-left">
                <img src="/image/xiaowumenchuang.png" alt="">
            </div>
            <div class="box-name-main">
                <p class="box-name-main-left">德国墨瑟官方旗舰店</p>
                <p class="box-name-main-right">555粉丝</p>
            </div>
            <p class="box-name-right">关注</p>
        </div>
        <div class="box-ping">
            <div>
                <p>8</p>
                <p>全部商品</p>
            </div>
            <div>
                <p>8</p>
                <p>上新</p>
            </div>
            <div>
                <p>98%</p>
                <p>好评率</p>
            </div>
        </div>
        <ul>
            <li v-for="(item,index) of storeMiao" :key="index">
                <span>{{item.title}}</span> <span class="cur">{{item.pingfenone}}</span> 
                <span class="cur">行业平均</span> <span class="cur">{{item.pingfentwo}}</span>
            </li>
        </ul>
        <p class="box-addless">店铺地址 <span class="box-addless-size">净月区mmmmmm</span></p>
        <p class="box-time">开店时间 <span class="box-time-size">2019-10-01</span></p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            storeMiao:[{
                title:'描述相符',
                pingfenone:9.88,
                pingfentwo:9.77
            },{
                title:'服务态度',
                pingfenone:9.88,
                pingfentwo:9.77
            },{
                title:'服务速度',
                pingfenone:9.88,
                pingfentwo:9.77
            }]
        }
    }
};
</script>

<style scoped lang='stylus'>
.box-dianpu{
    width 100vw
    height 100vh
    background-color #fff
    position relative
    left 0
    top 0
    z-index 500
    .head {
        width: 100%;
        height: 50px;
        background-color: #fff;
        display: flex;
        align-items: center;
        .head-left {
            font-size: 37px;
            margin-left: 15px;
        }
        .head-right {
            display: block;
            font-size: 20px;
            color: #333;
            font-family: PingFang SC;
            font-weight: bold;
            padding-left: 115px;
        }
    }
    .box-name{
        border-bottom 5px solid #efefef
        display flex
        margin-top 5px
        padding 0 15px 5px 15px
        .box-name-left{
            width 70px
            height 70px
            background-color #efefef
            margin-right 10px
        }
        .box-name-main{
            flex 1
            .box-name-main-left{
                font-size 15px
                padding 10px 0
            }
            .box-name-main-right{
                font-size 13px
            }
        }
        .box-name-right{
            width 70px
            height 23px
            border 1px solid purple 
            color purple
            text-align center
            margin-top 8%
            border-radius 15px
        }
    }
    .box-ping{
        display flex
        text-align center
        font-size 13px
        border-bottom 5px solid #efefef
        div{
            width 33.33%
            padding 10px 0
        }
    }
    ul{
        font-size 12px
        padding 0 15px
        border-bottom 5px solid #efefef
        li{
            width 100%
            text-align left 
            span{
                padding-right 30px
            }
            span.cur{
                color #E20000
            }
        }
    }
    .box-addless,.box-time{
        height 35px
        line-height 35px
        padding 0 15px
        font-size 12px
        span{
            margin-left 35px
        }
        .box-addless-size{
            color #E20000
        }
        .box-time-size{
            color #333
        }
    }
}
</style>