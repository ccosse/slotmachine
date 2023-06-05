<template>
  <img src="https://raw.githubusercontent.com/ccosse/slotmachine/master/src/assets/cherries.png" style="opacity:0.5;width:100px;height:100px;transform:rotateZ(90deg)">
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent ({
  name: 'TileComponent',
  props: ['imgUrl'],
  setup () {
    return {
    }
  }
})
</script>
<style>
</style>