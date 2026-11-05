/**
  Author          :Charlie Cosse
  Website         :www.asymptopia.com
  Email           :ccosse@gmail.com
  Copyright       :(C) 2023 Asymptopia Software
  License         :ALL RIGHTS RESERVED
*/
<template>
  <div id="stage" class="stage">
    <ReelComponent v-for="(images, i) in ximgs" :key="i" :ximgs="images" :reelIdx="i" :reelid="'reel'+i" :reelcontainerid="'reelcontainer'+i" :numpanes="20" :t360="t360" :w_pane="'100px'" :h_pane="'100px'" :style="{ left: `calc(${i+1}*(100% - 20px) / ${ximgs.length+1})` }"/>
    <!--
    -->
    <hline id="h2"/>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
import ReelComponent from './ReelComponent.vue'
/**
  The StageComponent holds a set of ReelComponents
*/

export default defineComponent({
  name: 'StageComponent',
  components: {
    ReelComponent
  },
  props: ['t360', 'ximgs'],
  setup(props){
    console.log(props)
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
#stage {
  width: 100%;
  height: 700px;
  background-color: #bbddbb;
}
#h2 {
  position: absolute;
  top: 350px;
  background-color: red;
  width:100%;
  height:1px;
}
</style>