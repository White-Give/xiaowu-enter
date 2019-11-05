<template>
  <div id="dingdan">
    <div class="nav">
      <img class="goback" src="/image/goback.png" alt @click="routeGo('/mine')"/>
      <span>我的订单</span>
    </div>
    <div class="banner">
      <ul>
        <li
          v-for="(item,index) of dingdanList "
          :key="index"
          @click="routeGo(item.url)"
          :class="{cur:item.title == $route.meta.name}"
        >{{item.title}}</li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  data() {
    return {
      dingdanList: [
        {
          title: "全部",
          url: "/mine/order/dingdanAll"
        },
        {
          title: "待签合同",
          url: "/mine/order/contract"
        },
        {
          title: "待付款",
          url: "/mine/order/willpay"
        },
        {
          title: "待评价",
          url: "/mine/order/willevaluated"
        }
      ]
    };
  },
  methods: {
    routeGo(url) {
      this.$router.push({ path: url });
    }
  }
};
</script>

<style lang="stylus" scoped>
#dingdan {
  width: 100vw;
  height: 100vh;
  background: #f4f4f4;
    position absolute
    top 0
    left 0
    z-index 3
  .nav {
    width: 100%;
    height: 44px;
    line-height: 44px;
    border: 1px solid rgba(255, 255, 255, 1);
    background: white;

    span {
      text-align: center;
      display: inline-block;
      font-size: 18px;
      font-weight: 500;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }

    .goback {
      padding-left: 20px;
      display: inline-block;
    }
  }

  .banner {
    width: 100%;
    background: white;

    ul {
      display: flex;
      text-align: center;
      height: 40px;
      line-height: 40px;
    }

    ul li {
      list-style: none;
      flex: 1;
      &.cur{
          background-color #dc1fd1
          color #fff
      }
    }
  }
}
</style>
