<template>
  <div>
    <ul v-for="item in list" :key="item.id"
    class="flex flex-direction_row align-items_center list vux-1px-b">
      <li class="list-left flex align-items_center">
        <img :src="item.src" alt="">
      </li>
      <li class="list-mid flex_1">
        <div class="flex flex-direction_row align-items_center">
          <p class="title" v-text="item.pay"></p>
          <img class="icon" v-if="item.icon" :src="item.icon" alt="">
        </div>
        <p class="dec" v-if='item.dec' v-text="item.dec"></p>
      </li>
      <li class="list-right">
        <check-icon :value.sync="item.checked" type="plain" @click.native="change(list,item)"></check-icon>
      </li>
    </ul>
  </div>
</template>

<script>
import { CheckIcon } from 'vux'
export default {
  components: {
    CheckIcon
  },
  props: {
    list: Array
  },
  data () {
    return {

    }
  },
  methods: {
    change (list, item) {
      list[0].checked = false
      list[1].checked = false
      item.checked = true
    }
  }
}
</script>
<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
.list{
  padding:10px 15px;
  font-size:14px;
  .list-left{
    margin-right: .8em;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    img{
      width: 100%;
      max-height: 100%;
    }
  }
  .list-mid{
    .title{
      color:#404040;
    }
    .icon{
      width:40px;
      padding-left:5px;
    }
    .dec{
      color:#999;
    }
  }
}
</style>
