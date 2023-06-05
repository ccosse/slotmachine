<template>
  <q-img :src="this.imgUrl" style="opacity:0.5;width:100px;height:100px;transform:rotateZ(90deg)"></q-img>
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