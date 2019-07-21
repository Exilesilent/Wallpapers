<template>
  <div>
    <div id="main">
      <img :src="url.url" @click="openImg">
    </div>
    <div id="food">
      <h2>标签：{{url.tag}}</h2>
      <p>创建时间：{{url.create}}</p>
      <p>更新时间：{{url.update}}</p>
      <div class="line"></div>
    </div>
    <div id="text">
      <p>温馨提示</p>
      <p>下拉或点击图片进行预览</p>
      <p>长按保存图片</p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      url: ''
    }
  },
  onLoad (options) {
    console.log('111111111111')
    console.log(options)
    this.url = options
  },
  methods: {
    openImg () {
      console.log('我点击了图片')
      wx.previewImage({
        current: this.url.url, // 当前显示图片的http链接
        urls: [this.url.url] // 需要预览的图片http链接列表
      })
    }
  },
  async onPullDownRefresh () {
    this.openImg()
    wx.stopPullDownRefresh()
  }
}
</script>
<style lang="scss">
    #main{
        width: 100%;
        height: auto;
        img{
            width: 100%;
        }
    }
    #food{
      padding: 10px;
      h2{
        font-size: 18px;
        margin: 20px 0;
      }
      p{
        font-size: 14px;
        line-height: 28px;
      }
      .line{
        margin-top: 20px;
        background-color: #cecece;
        width: 100%;
        height: 1px;
      }
    }
    #text{
      padding: 0 10px;
      p{
        font-size: 12px;
        margin: 10px 0;
        color: #cecece;
        text-align: center;
      }
    }
</style>

