<template>
  <div>
    <div class="flex flex-direction_row justify-content_flex-center align-items_center flex-wrap">
      <router-link v-for="item in list" :key="item.id" :to="item.link" :class="type">
        <div class="flex flex-direction_column justify-content_flex-center align-items_center">
          <div class="img-con flex align-items_center vux-1px">
            <img :src="item.src" alt="">
          </div>
          <p class="title" v-text="item.label"></p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { CheckIcon } from 'vux'
export default {
  components: {
    CheckIcon
  },
  props: {
    type: String,
    list: Array
  },
  data () {
    return {
      width: '22%'
    }
  },
  methods: {

  }
}
</script>
<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
.list1{
  margin:1%;
  font-size:14px;
  width:22%;
  .img-con{
    width:100%;
    height:80px;
    img{
      width: 100%;
      max-height: 100%;
    }
  }
  .title{
    color:#525252;
    padding-top:10px;
  }
}
.list2{
  margin:1%;
  font-size:14px;
  width:45%;
  .img-con{
    width:100%;
    height:100px;
    overflow:hidden;
    img{
      width: 100%;
      max-height: 100%;
    }
  }
  .title{
    color:#525252;
    padding-top:10px;
  }
}
</style>
