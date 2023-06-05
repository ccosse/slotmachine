<template>
  <div id="stage" class="stage">
    <ReelComponent :reelIdx="0" :reelid="'reel0'" :reelcontainerid="'reelcontainer0'"/>
    <ReelComponent :reelIdx="1" :reelid="'reel1'" :reelcontainerid="'reelcontainer1'"/>
    <ReelComponent :reelIdx="2" :reelid="'reel2'" :reelcontainerid="'reelcontainer2'"/>
    <ReelComponent :reelIdx="3" :reelid="'reel3'" :reelcontainerid="'reelcontainer3'"/>
    <ReelComponent :reelIdx="4" :reelid="'reel4'" :reelcontainerid="'reelcontainer4'"/>
    <!--
    -->
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
import ReelComponent from 'components/ReelComponent.vue'
export default defineComponent({
  name: 'StageComponent',
  components: { ReelComponent },
  setup(){
    return {
      t_elapsed: ref(0)
    }
  },
  mounted(){
    this.t_elapsed = 0
  }
})
</script>
<style>
</style>