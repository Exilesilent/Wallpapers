<template>
  <div>
    <div id="top">
      <div id="search">
        <img src="../../../static/img/search@3x.png" class="search">
        <input type="search" name="search" v-model="inputData" @focus="input" @blur="inputshow" @change="showclear">
        <h3 v-show="show">搜索主题、图片</h3>
        <img src="../../../static/img/clear.png" class="clear" @click="click" v-show="clear">
      </div>
    </div>
    <div id="main">
      <h2>热门搜索</h2>
      <p>搜索功能暂未开放,将在2.0版本中更新</p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      inputData: '',
      show: true,
      clear: false
    }
  },
  computed: {
    showclear () {
      if (this.inputData.length) {
        this.clear = true
        this.show = false
      } else {
        this.clear = false
        this.show = true
      }
    }
  },
  methods: {
    click () {
      this.inputData = ''
      this.show = true
      this.clear = false
    },
    input () {
      this.show = false
    },
    inputshow () {
      if (!this.inputData.length) {
        this.show = true
      }
    }
  },
  // 停止下拉刷新
  async onPullDownRefresh () {
    wx.stopPullDownRefresh()
  }
}
</script>
<style>
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
#top #search .search {
  width: 18px;
  height: 18px;
  position: absolute;
  top: 8px;
  left: 10px;
}
#top #search .clear {
  width: 18px;
  height: 18px;
  position: absolute;
  top: 8px;
  right: 10px;
  z-index: 9999;
}
#top #search h3 {
  position: absolute;
  margin-left: 40px;
  line-height: 35px;
  color: #c2c2c2;
  font-size: 16px;
  top: 0px;
}
#top #search input{
  width: 78%;
  height: 100%;
  margin: 0 40px;
  font-size: 16px;
}

#main {
  padding: 10px;
}
#main p {
  font-size: 16px;
  color: #c2c2c2;
  margin-top: 10px;
  text-align: center;
}
</style>