<template>
    <div class="shop-shang">
        <div class="shop-left">
            <img src="/image/moren.png" alt />
        </div>
        <div class="shop-right">
            <p class="shop-right-zero">阳光房,断桥铝</p>
            <p class="shop-right-one">
                <span>免服务费</span>
                <span>免费量尺</span>
            </p>
            <div class="shop-right-two">
                <p class="shop-right-two-left">￥888</p>
                <p class="shop-right-two-right">销量:888</p>
            </div>
            <div class="shop-right-three">
                <p>距离0.5km</p>
                <p>德国内色</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang='stylus'>
.shop-shang{
        border-top 1px solid #efefef
        height rem(130)
        background-color #fff
        padding rem(5) rem(15)
        display flex
        .shop-left{
            margin-right rem(10)
        }
        .shop-right{
            flex 1
            .shop-right-zero{
                font-size rem(18)
                padding rem(8) 0
            }
            .shop-right-one,.shop-right-two,.shop-right-three{
                display flex
            }
            .shop-right-one{
                padding-bottom rem(5)
                span{
                    display block
                    color #f00
                    border 1px solid #000
                    margin-right rem(5)
                    padding rem(2) rem(3)
                    font-size rem(12)
                }
            }
            .shop-right-two{
                justify-content space-between
                .shop-right-two-left{
                    font-size rem(18)
                    color red
                }
                .shop-right-two-right{
                    font-size rem(12)
                    color #8F8F8F
                }

            }
            .shop-right-three{
                padding-top rem(5)
                display flex
                justify-content space-between
                color #8F8F8F
                font-size rem(12)
            }
        }
    }
</style>