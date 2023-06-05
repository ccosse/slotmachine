<template>
  <div class="stage flex row justify-center q-my-sm">
    <ReelComponent :reelIdx="0" :reelid="'reel0'" />
    <ReelComponent :reelIdx="1" :reelid="'reel1'" />
    <ReelComponent :reelIdx="2" :reelid="'reel2'" />
    <ReelComponent :reelIdx="3" :reelid="'reel3'" />
    <ReelComponent :reelIdx="4" :reelid="'reel4'" />
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
.stage {width:80vw;height:45vw;background-color:red;}
</style>