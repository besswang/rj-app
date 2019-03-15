<template>
  <div>
    <h1 class="header">订单信息</h1>
    <my-panel :list="panellist" :car="car"></my-panel>
    <h1 class="header">选择支付方式</h1>
    <my-check :list="checklist"></my-check>
  </div>
</template>

<script>
import MyPanel from '@/components/common/MyPanel.vue'
import MyCheck from '@/components/common/MyCheck.vue'
import { CHECK_LIST, PANEL_LIST } from './meta/meta.js'
export default {
  name: 'car',
  components: {
    MyPanel,
    MyCheck
  },
  data () {
    return {
      car: true,
      panellist: PANEL_LIST,
      checklist: CHECK_LIST
    }
  },
  methods: {

  }
}
</script>

<style lang="less">
.header{
  font-size:14px;
  background:#e5e5e5;
  color:#404040;
  padding:10px 15px;
}
</style>
