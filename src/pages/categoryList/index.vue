<template>
  <div>
    <div id="main">
      <div v-model="items" v-for="(item, index) in items" class="list">
        <navigator
          :url="'/pages/list/main?id='+ item.id +'&url=' + item.url + '&tag=' + item.utag + '&create=' + item.create_time + '&update=' + item.update_time"
          class="link"
        >
          <img :src="item.url" :key="item.id">
        </navigator>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      items: [],
      id: '',
      pageSize: 8
    }
  },
  onLoad (options) {
    this.id = options.id
    this.$axios
      .get('/index.php?c=WallPaper&a=getAppsByCategory&cid=' + this.id + '&start=0&count=' + this.pageSize + '&from=360chrome')
      .then(res => {
        this.items = res.data.data
      })
  },
  methods: {
    _getRegisterInfo () {
      wx.showLoading({
        title: '玩命加载中'
      })
      this.pageSize = this.pageSize + 8
      this.$axios
        .get('/index.php?c=WallPaper&a=getAppsByCategory&cid=' + this.id + '&start=0&count=' + this.pageSize + '&from=360chrome')
        .then(res => {
          this.items = res.data.data
          setTimeout(() => {
            wx.hideLoading()
          }, 1000)
        })
    },
    stop () {
      wx.showLoading({
        title: '努力刷新中'
      })
      setTimeout(() => {
        wx.hideLoading()
      }, 1000)
    }
  },
  // 上拉加载
  onReachBottom: function () {
    // 执行上拉执行的功能
    this._getRegisterInfo()
  },
  // 停止下拉刷新
  async onPullDownRefresh () {
    this.stop()
    wx.stopPullDownRefresh()
  }
}
</script>
<style lang="scss">
#main {
  padding: 0 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .list {
    width: 48%;
    background-color: #c2c2c2;
    height: 230px;
    margin-right: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    .link {
      display: block;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
      }
    }
  }
}
#main .list:nth-child(2n) {
  margin-right: 0;
}
</style>