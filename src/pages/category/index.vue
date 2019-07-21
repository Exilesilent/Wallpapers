<template>
  <div>
    <div id="top">
      <a id="search" href="/pages/search/main">
        <img src="../../../static/img/search@3x.png">
        <h3>搜索主题、图片</h3>
      </a>
    </div>
    <div id="main">
      <ul>
        <li v-for="item in img" :key="item.id">
          <navigator :url="'/pages/categoryList/main?id='+item.id">
            <img :src="item.url" class="img">
            <p class="p"><i>{{item.name}}</i></p>
          </navigator>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      img: [],
      images: [
        {
          id: 36,
          name: '4K专区',
          url: 'http://p19.qhimg.com/bdm/683_422_0/t0153352fb3735ab24a.jpg'
        },
        {
          id: 9,
          name: '风景大片',
          url: 'http://p18.qhimg.com/bdm/683_422_0/t01674af4a0c9d2b6da.jpg'
        },
        {
          id: 10,
          name: '炫酷时尚',
          url: 'http://p19.qhimg.com/bdm/341_210_0/t016993db2def404f58.jpg'
        },
        {
          id: 5,
          name: '游戏壁纸',
          url: 'http://p19.qhimg.com/bdm/341_210_0/t01b779f0f138d0d381.jpg'
        },
        {
          id: 26,
          name: '动漫卡通',
          url: 'http://p16.qhimg.com/bdm/341_210_0/t012c72977098ebb457.jpg'
        },
        {
          id: 16,
          name: '劲爆体育',
          url: 'http://p18.qhimg.com/bdm/683_422_0/t01e1386a4a8e69d951.jpg'
        },
        {
          id: 15,
          name: '小清新',
          url: 'http://p17.qhimg.com/bdm/341_210_0/t0134e7ef35f1a9debd.jpg'
        },
        {
          id: 14,
          name: '萌宠动物',
          url: 'http://p16.qhimg.com/bdm/341_210_0/t0138079a813656e7c1.jpg'
        }
      ],
      imagess: [
        {
          id: 36,
          name: '4K专区',
          url: 'http://p19.qhimg.com/bdm/683_422_0/t0153352fb3735ab24a.jpg'
        },
        {
          id: 9,
          name: '风景大片',
          url: 'http://p18.qhimg.com/bdm/683_422_0/t01674af4a0c9d2b6da.jpg'
        },
        {
          id: 10,
          name: '炫酷时尚',
          url: 'http://p19.qhimg.com/bdm/341_210_0/t016993db2def404f58.jpg'
        },
        {
          id: 5,
          name: '游戏壁纸',
          url: 'http://p19.qhimg.com/bdm/341_210_0/t01b779f0f138d0d381.jpg'
        },
        {
          id: 26,
          name: '动漫卡通',
          url: 'http://p16.qhimg.com/bdm/341_210_0/t012c72977098ebb457.jpg'
        },
        {
          id: 16,
          name: '劲爆体育',
          url: 'http://p18.qhimg.com/bdm/683_422_0/t01e1386a4a8e69d951.jpg'
        },
        {
          id: 15,
          name: '小清新',
          url: 'http://p17.qhimg.com/bdm/341_210_0/t0134e7ef35f1a9debd.jpg'
        },
        {
          id: 14,
          name: '萌宠动物',
          url: 'http://p16.qhimg.com/bdm/341_210_0/t0138079a813656e7c1.jpg'
        },
        {
          id: 22,
          name: '军事天地 ',
          url: 'http://p15.qhimg.com/bdm/683_422_0/t015abeaa023dfd2495.jpg'
        },
        {
          id: 6,
          name: '美女模特',
          url: 'http://p17.qhimg.com/bdm/341_210_0/t01376b4835ce9371ed.jpg'
        },
        {
          id: 30,
          name: '爱情美图',
          url: 'http://p17.qhimg.com/bdm/341_210_0/t01853651e4cc5ed4ef.jpg'
        },
        {
          id: 12,
          name: '汽车天下',
          url: 'http://p15.qhimg.com/bdm/341_210_0/t011e1a7d92933bac30.jpg'
        },
        {
          id: 35,
          name: '文字控',
          url: 'http://p18.qhimg.com/bdm/341_210_0/t01226a759fa1293f9d.jpg'
        },
        {
          id: 18,
          name: 'BABY秀',
          url: 'http://p17.qhimg.com/bdm/341_210_0/t016395617044ed8e60.jpg'
        },
        {
          id: 11,
          name: '明星风尚',
          url: 'http://p18.qhimg.com/bdm/341_210_0/t010b54ead9ceb5baff.jpg'
        },
        {
          id: 29,
          name: '月历壁纸',
          url: 'http://p15.qhimg.com/bdm/341_210_0/t01b993e6c32ca1b865.jpg'
        },
        {
          id: 7,
          name: '影视剧照',
          url: 'http://p17.qhimg.com/bdm/341_210_0/t01cba8a6185f2f8e03.jpg'
        },
        {
          id: 13,
          name: '节日美图',
          url: 'http://p19.qhimg.com/bdm/341_210_0/t018eaacc0f419fc0cc.jpg'
        }
      ]
    }
  },
  created () {
    this.img = this.images
  },
  methods: {
    _getRegisterInfo () {
      wx.showLoading({
        title: '玩命加载中'
      })
      setTimeout(() => {
        wx.hideLoading()
      }, 1000)
      this.img = this.imagess
    },
    stop () {
      wx.showLoading({
        title: '努力刷新中'
      })
      setTimeout(() => {
        wx.hideLoading()
      }, 1000)
      this.img = this.images
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
  /* background-color: #000; */
  /* z-index: 10000; */
}
#top #search {
  width: 95%;
  height: 35px;
  background-color: #efefef;
  border-radius: 5px;
  margin: 10px;
  position: fixed;
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
#main {
  width: auto;
}
#main ul {
  margin-top: 10px;
  padding: 0 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
#main ul li {
  width: 48%;
  height: 150px;
  background-color: #efefef;
  border-radius: 5px;
  margin-bottom: 10px;
  navigator{
    position: relative;
    width: 100%;
    height: 100%;
    img{
      width: 100%;
      height: 100%;
      border-radius: 5px;
    }
    p{
      position: absolute;
      bottom: 0;
      background-color: rgba($color: #000, $alpha: 0.3);
      width: 100%;
      height: 35px;
      border-radius: 0 0 5px 5px;
      i{
        font-size: 16px;
        line-height: 35px;
        text-align: center;
        color: #c2c2c2;
      }
    }
  }
}
#main ul li:nth-child(2n) {
  margin-left: 10px;
}
</style>