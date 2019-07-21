<template>
    <swiper class="swiper" :indicator-dots="indicatorDots" circular :autoplay="autoplay" :interval="interval" :duration="duration">
        <block v-for="(item, index) in images" :key="index">
            <swiper-item>
              <navigator :url="'/pages/list/main?id='+ item.id +'&url=' + item.url + '&tag=' + item.utag + '&create=' + item.create_time + '&update=' + item.update_time">
                <image :src="item.url_mobile" class="slide-image" mode="aspectFill"/>
              </navigator>
            </swiper-item>
        </block>
    </swiper> 
</template>

<script>
export default {
  props: {
    images: {
      type: Array
    }
  },
  data () {
    return {
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 500
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper {
  height: 376rpx !important;
  padding: 0 10px 10px 10px;
} 
navigator{
  width: 100%;
  height: 100%;
  image {
    height: 100%;
    width: 100%;
    background-color: #efefef;
  }
}
</style>

