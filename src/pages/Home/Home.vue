<template>
  <div>
    <TypeNav></TypeNav>
    <Listcontainer></Listcontainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="floor in floorList" :key="floor.id" :list="floor"></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import Listcontainer from './ListContainer/ListContainer.vue'
import Rank from './Rank/Rank.vue'
import Like from './Like/Like.vue'
import Recommend from './Recommend/Recommend.vue'
import Floor from './Floor/Floor.vue'
import Brand from './Brand/Brand.vue'
import { mapState } from 'vuex'

export default {
  name: 'ProjectshpHome',

  data () {
    return {

    }
  },
  mounted () {
    // 派发action
    this.$store.dispatch('GetFloorList')
    this.$store.dispatch('getUserInfo')
  },
  methods: {},
  components: {
    Listcontainer,
    Rank,
    Like,
    Recommend,
    Floor,
    Brand
  },
  computed: {
    ...mapState({
      floorList: state => state.Home.floorList
    })
  }
}
</script>

<style lang="less" scoped>
</style>
