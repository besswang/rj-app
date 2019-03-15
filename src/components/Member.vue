<template>
  <div>
    <img class="logo" src="../assets/images/logo.jpg" alt="">
    <panel style="color:#9e9e9e;" :list="list" type="3"></panel>
  </div>
</template>

<script>
import { Panel } from 'vux'
import { MEMBER_LIST } from '@/components/meta/meta.js'
export default {
  name: 'member',
  components: {
    Panel
  },
  data () {
    return {
      list: MEMBER_LIST
    }
  },
  methods: {

  }
}
</script>

<style lang="less">
.logo{
  display:block;
  width:30%;
  padding:10% 0;
  margin:0 auto;
}
</style>
