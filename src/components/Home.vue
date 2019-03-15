<template>
  <div>
    <swiper :list="swiperList" v-model="swiperIndex" auto loop></swiper>
    <search
      @result-click="resultClick"
      @on-change="getResult"
      :results="results"
      v-model="value"
      position="absolute"
      auto-scroll-to-top
      top="46px"
      @on-focus="onFocus"
      @on-cancel="onCancel"
      @on-submit="onSubmit"
      ref="search">
    </search>
    <my-grid :list="mainList" type="list1"></my-grid>
    <group-title>热销产品</group-title>
    <my-grid :list="mainList" type="list2"></my-grid>
  </div>
</template>

<script>
import { Swiper, Search, GroupTitle, ViewBox } from 'vux'
import { HOME_GRID, BANNER_LIST } from './meta/meta.js'
import MyGrid from './common/MyGrid'
export default {
  name: 'home',
  components: {
    MyGrid,
    Swiper,
    Search,
    GroupTitle,
    ViewBox
  },
  data () {
    return {
      type: 'list1',
      swiperIndex: 0,
      results: [],
      value: '搜索',
      swiperList: BANNER_LIST,
      mainList: HOME_GRID
    }
  },
  methods: {
    resultClick (item) {
      window.alert('you click the result item: ' + JSON.stringify(item))
    },
    getResult (val) {
      console.log('on-change', val)
      this.results = val ? this.getResult(this.value) : []
    },
    onSubmit () {
      this.$refs.search.setBlur()
      this.$vux.toast.show({
        type: 'text',
        position: 'top',
        text: 'on submit'
      })
    },
    onFocus () {
      console.log('on focus')
    },
    onCancel () {
      console.log('on cancel')
    }
  }
}
</script>
<style lang="less" scoped>
.weui-grid__icon{
  width:50px;
}
</style>
