<template>
  <div>
    <div id="top">
      <a id="search" href="/pages/search/main">
        <img src="../../../static/img/search@3x.png">
        <h3>搜索主题、图片</h3>
      </a>
    </div>
    <div id="slide">
      <Swiper :images="img"/>
    </div>
    <div id="main">
      <div v-model="items" v-for="(item, index) in items" class="list">
        <navigator :url="'/pages/list/main?id='+ item.id +'&url=' + item.url + '&tag=' + item.utag + '&create=' + item.create_time + '&update=' + item.update_time" class="link">
          <img :src="item.url" :key="item.id">
        </navigator>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from '../../components/swiper'
export default {
  components: { Swiper },
  data () {
    return {
      img: [],
      page: 12,
      images: [
        {
          id: 1,
          url: 'http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg'
        },
        {
          id: 2,
          url: 'http://www.pptbz.com/pptpic/UploadFiles_6909/201306/2013062320262198.jpg'
        },
        {
          id: 3,
          url: 'http://www.pptbz.com/pptpic/UploadFiles_6909/201406/2014063021281300.gif'
        }
      ],
      items: [],
      pageNum: '',
      pageSize: 8
    }
  },
  created () {
    this.getImaData(this.pageSize)
    this.getSwiper()
  },
  methods: {
    getImaData (pageSize) {
      this.$axios
        .get('/index.php?c=WallPaper&a=getAppsByOrder&order=create_time&start=0&count=' + pageSize + '&from=360chrome')
        .then(res => {
          this.items = res.data.data
        })
    },
    _getRegisterInfo () {
      wx.showLoading({
        title: '玩命加载中'
      })
      this.pageSize = this.pageSize + 8
      this.$axios
        .get('/index.php?c=WallPaper&a=getAppsByOrder&order=create_time&start=0&count=' + this.pageSize + '&from=360chrome')
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
      this.page = Math.floor(Math.random() * 20)
      this.getSwiper()
      this.getImaData(8)
      setTimeout(() => {
        wx.hideLoading()
      }, 1000)
    },
    // 获取轮播图的请求
    getSwiper () {
      this.$axios.get('index.php?c=WallPaper&a=getAppsByOrder&order=create_time&start=' + this.page + '&count=3&from=360chrome').then(res => {
        console.log(res)
        this.img = res.data.data
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
    this.stop()
    wx.stopPullDownRefresh()
  }
}
</script>
<style lang="scss">
#top {
  width: auto;
  height: 55px;
}
#top #search {
  width: 95%;
  height: 35px;
  background-color: #efefef;
  border-radius: 5px;
  margin: 10px;
  position: fixed;
  z-index: 100000;
}
#top #search img {
  width: 18px;
  height: 18px;
  position: absolute;
  top: 8px;
  left: 10px;
}
#top #search h3 {
  margin-left: 40px;
  line-height: 35px;
  color: #c2c2c2;
  font-size: 16px;
}
#main{
  padding: 0 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .list{
    width: 48%;
    background-color: #c2c2c2;
    height: 230px;
    margin-right: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    .link{
      display: block;
      width: 100%;
      height: 100%;
      img{
      width: 100%;
      height: 100%;
      border-radius: 5px;
    }
    }
  }
}
#main .list:nth-child(2n){
      margin-right: 0;
}
</style>