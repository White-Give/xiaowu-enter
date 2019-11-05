<template>
  <div class="content">
    <div class="yuyue">
      <div class="yuyue-top">
        <p>
          <img class="dianpu" src="/image/dianpu.png" alt />
          <span>德国墨瑟</span>
          <img class="go" src="/image/go.png" alt />
        </p>
        <p>预约成功，待签订合同</p>
      </div>
      <div class="yuyue-center">
        <img class="yuyuepng" src="/image/yuyue.png" alt />
        <div class="center-right">
          <div class="right-top">
            <p>塑钢窗 断桥铝 铝包木</p>
            <p>&yen;708</p>
          </div>
          <div class="right-bottom">
            <p>
              <span>免费上门</span>
              <span>先行赔付</span>
            </p>
            <p>× 1</p>
          </div>
        </div>
      </div>
      <div class="yuyue-bottom">
        <div class="bottom-top">
          <p>
            共
            <span>1</span>件商品
          </p>
          <p>
            合计：&yen;
            <span>708</span>
          </p>
          <p>（含服务费&yen;0.00）</p>
        </div>
        <div class="bottom-bottom">
          <button>取消预约</button>
          <button>查看进度</button>
          <button>签订合同</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="stylus" scoped>
.content {
  .yuyue {
    height: 200px;
    margin: 15px 10px;
    background: white;

    .yuyue-top {
      padding: 10px;
      display: flex;
      justify-content: space-between;

      p:nth-of-type(2) {
        color: red;
      }

      .dianpu {
        width: 17px;
        height: 14px;
        margin-right: 5px;
      }

      .go {
        width: 6px;
        height: 11px;
        margin-left: 30px;
      }
    }

    .yuyue-center {
      display: flex;
      justify-content: space-between;
      padding: 0px 10px 10px 10px;
      border-bottom: 1px solid #999999;

      .yuyuepng {
        width: 73px;
        height: 73px;
        flex: 1;
      }

      .center-right {
        flex: 3;
        padding: 8px 0 0 10px;
      }

      .right-top, .right-bottom {
        display: flex;
        justify-content: space-between;
      }

      .right-top p:last-of-type {
        color: red;
      }

      .right-bottom {
        padding-top: 10px;

        span {
          display: inline-block;
          text-align: center;
          border: 1px solid #FF0000;
          border-radius: 5px;
          width: 55px;
          height: 20px;
          line-height: 18px;
          font-size: 10px;
        }

        span:last-of-type {
          margin-left: 5px;
        }
      }
    }
  }
}

.yuyue-bottom {
  .bottom-top, .bottom-bottom {
    display: flex;
    justify-content: flex-end;

    p {
      margin-left: 10px;
      font-size: 13px;
    }
  }

  .bottom-top {
    padding: 10px 0px;
  }

  .bottom-bottom {
    padding-right: 10px;

    button {
      background: white;
      border: 1px solid #999999;
      border-radius: 5px;
      width: 74px;
      height: 28px;
      margin-left: 11px;
    }

    button:last-of-type {
      color: #C70E60;
      border: 1px solid #C70E60;
    }
  }
}
</style>