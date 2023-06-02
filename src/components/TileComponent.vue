<template>
<div class="flex col vertical-middle">
  <div class="tile">
    <q-img :src="this.imgUrl"></q-img>
  </div>
</div>
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
.tile {
  width: 100%;
  height:100%;
  background-color:aqua;
  transform:rotateZ(90deg);
}
</style>