<template>
    <div class="box-shouye">
        <div class="box-img">
            <div>
                <img src="/image/xiaowumenchuang.png" alt="">
            </div>
            <p class="box-top">实德60塑钢窗</p>
            <p class="box-bottom"><span class="box-bottom-left">￥240</span><span class="box-bottom-right">销量:888</span></p>
        </div>
        <div class="box-img">
            <div>
                <img src="/image/xiaowumenchuang.png" alt="">
            </div>
            <p class="box-top">实德60塑钢窗</p>
            <p class="box-bottom"><span class="box-bottom-left">￥240</span><span class="box-bottom-right">销量:888</span></p>
        </div>
        <div class="box-img">
            <div>
                <img src="/image/xiaowumenchuang.png" alt="">
            </div>
            <p class="box-top">实德60塑钢窗</p>
            <p class="box-bottom"><span class="box-bottom-left">￥240</span><span class="box-bottom-right">销量:888</span></p>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang='stylus'>
.box-shouye{
    padding 0 rem(10)
    display flex
    justify-content space-between
    flex-wrap wrap
    .box-img{
        width 48%
        background-color #fff
        margin rem(10) 0 0 0
        img{
            width 100%
        }
        .box-top{
            font-size rem(15)
            padding rem(5) rem(5)
        }
        .box-bottom{
            display flex
            justify-content space-between
            padding 0 rem(5) rem(5) rem(5)
            span{
                display block
            }
            .box-bottom-left{
                font-size rem(14)
                color red
            }
            .box-bottom-right{
                font-size rem(14)
                color #848484
            }
        }
    }
}
</style>