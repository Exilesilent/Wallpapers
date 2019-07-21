<template>
  <div>
    <div id="main">
      <img src='http://www.kxming.cn/fight.jpeg' @click="openImg">
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    openImg () {
      wx.previewImage({
        current: 'http://www.kxming.cn/fight.jpeg', // 当前显示图片的http链接
        urls: ['http://www.kxming.cn/fight.jpeg'] // 需要预览的图片http链接列表
      })
    }
  },
  // 上拉加载
  onReachBottom: function () {
    // 执行上拉执行的功能
    this._getRegisterInfo()
  },
  // 停止下拉刷新
  async onPullDownRefresh () {
    this.openImg()
    wx.stopPullDownRefresh()
  }
}
</script>
<style lang="scss">
#main {
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 400px;
  }
}
</style>