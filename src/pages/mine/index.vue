<template>
  <div id="mine">
    <img src="../../../static/img/icon.png" id="logo">
    <h2>关于Wallpapers</h2>
    <h3>版本号: 1.0</h3>
    <p>图片资源均来源于互联网</p>
    <p>只是图片搬运工</p>
    <p>如果你喜欢</p>
    <i @click="fight">赞赏支持</i>
    <em>作者:ExileSilent</em>
  </div>
</template>
<script>
export default {
  methods: {
    stop () {
      wx.showLoading({
        title: '版本号:1.0'
      })
      setTimeout(() => {
        wx.hideLoading()
      }, 2000)
    },
    fight () {
      wx.navigateTo({ url: 'fight/main' })
    }
  },
  // 停止下拉刷新
  async onPullDownRefresh () {
    this.stop()
    wx.stopPullDownRefresh()
  }
}
</script>
<style lang="scss">
#mine {
  text-align: center;
  margin-top: 50px;
  color: #c2c2c2;
  line-height: 35px;
  h3{
    font-size: 16px;
  }
}
#mine #logo {
  width: 90px;
  height: 90px;
}
#mine p {
  margin-top: 35px;
  font-size: 16px;
}
#mine i {
  display: block;
  width: 100px;
  height: 40px;
  border-radius: 5px;
  background-color: #d3473a;
  color: #fff;
  line-height: 40px;
  font-size: 16px;
  margin: 0 auto;
  margin-top: 20px;
}
#mine em {
  margin-top: 30px;
  font-size: 12px;
}
</style>