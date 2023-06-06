<template>
  <q-img
    :src="this.imgUrl"
    :width="this.w_pane"
    :height="this.h_pane"
    style="opacity:.6;transform:rotateZ(90deg)"
  ></q-img>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent ({
  name: 'TileComponent',
  props: ['imgUrl', 'w_pane', 'h_pane'],
  setup (props) {
    console.log(props)
    return {
    }
  }
})
</script>
<style>
</style>