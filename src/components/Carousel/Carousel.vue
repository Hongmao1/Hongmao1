<template>
  <div class="swiper-container" id="floor1Swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="carouse in list" :key="carouse.id">
        <img :src="carouse.imgUrl">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
export default {
  name: 'AppCarousel',
  props: [
    'list'
  ],
  mounted () {

  },
  watch: {
    list: {
      immediate: true,
      handler () {
        this.$nextTick(() => {
          let mySwiper = new Swiper('.swiper-container', {
            loop: true, // 循环模式选项
            // autoplay: true,
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }
          })
        })
      }
    }
  }

};
</script>

<style lang="less" scoped>
</style>
