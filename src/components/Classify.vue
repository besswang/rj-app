<template>
  <div>
    <my-panel :list="panellist"></my-panel>
  </div>
</template>

<script>
import MyPanel from '@/components/common/MyPanel.vue'
import { PANEL_LIST } from '@/components/meta/meta.js'
export default {
  name: 'classify',
  components: {
    MyPanel
  },
  data () {
    return {
      panellist: PANEL_LIST
    }
  },
  methods: {

  }
}
</script>
