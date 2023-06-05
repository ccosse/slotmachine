<template>
  <div id="controlPanel" class="controls flex flex-center justify-center">
    <q-btn class="controlB" no-caps style="background-color:green" v-if="!this.spinning" @click="this.spin()">Spin</q-btn>
    <q-btn class="controlB" no-caps style="background-color:red" v-else @click="this.stop()">Stop</q-btn>
    <div class="on-right">
      {{this.t_elapsed}}
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
import * as d3 from 'd3'
export default defineComponent({
  name: 'ControlsComponent',
  setup(){
    return {
      spinning: ref(false),
      t_elapsed: ref(0),
      t0: Date.now()
    }
  },
  methods:{
    spin(){
      console.log('Spin', document.getElementById("controlPanel").getBoundingClientRect().width)
      this.spinning = true
      d3.selectAll(".reel").classed("spinning", this.spinning)
    },
    stop(){
      console.log('Stop')
      this.spinning = false
      d3.select("#reel0").classed("spinning", this.spinning)
      /*
      d3.select("#reel1").classed("spinning", this.spinning)
      d3.select("#reel2").classed("spinning", this.spinning)
      d3.select("#reel3").classed("spinning", this.spinning)
      d3.select("#reel4").classed("spinning", this.spinning)
      */
    }
  }
})
</script>
<style>
.controls {width:100%;height:100px;background-color:orange}
.controlB {width: 100px; height:50px; }
</style>