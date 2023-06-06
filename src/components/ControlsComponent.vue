<template>
  <div id="controlPanel" class="controls flex flex-col flex-center justify-center">
    <div>
      <div class="" id="timerLabel">
      {{this.t_elapsed}}
      </div>
      <q-btn class="controlB" no-caps style="background-color:green" v-if="!this.spinning" @click="this.spin()">Spin</q-btn>
      <q-btn class="controlB" no-caps style="background-color:red" v-else @click="this.stop()">Stop</q-btn>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
import * as d3 from 'd3'
export default defineComponent({
  name: 'ControlsComponent',
  props: ['t360', 'numpane'],
  setup(props){
    console.log(props)
    return {
      spinning: ref(false),
      t_elapsed: ref(0),
      t0: Date.now(),
      interval: ref(null),
      pi: Math.acos(-1),
      degPerPane: parseFloat(360./props.numpane),
      degPerSec: 360./parseFloat(props.t360),
      secPerTab: null,
      msPerTab: null
    }
  },
  mounted(){
    console.log('degPerPane', this.degPerPane)
    console.log('degPerSec', this.degPerSec)
    this.secPerTab = this.degPerPane / this.degPerSec
    console.log('secPerTab', this.secPerTab)
    this.msPerTab = this.secPerTab * 1000.
  },
  methods:{
    tick(){
      d3.select("#timerLabel").html((Date.now() - this.t0)/1000.)
      if (this.spinning == true) {
        cancelAnimationFrame(this.interval);
        this.interval = requestAnimationFrame(() => {
          this.tick();
        });
      }
    },
    spin(){
      d3.selectAll(".reel").classed("spinning", false)
      d3.selectAll(".reel").classed("paused", false) // this resets to initial zero rotation
      window.setTimeout(() => {
        console.log('Spin')
        this.t0 = Date.now()
        this.spinning = true
        this.paused = false
        // 250 = .25s = 1 Pane @ 360(20)/5s; +250 -> currently advancing by 1 pane ea reel
        // const dtRun = (3000 + parseInt(Math.random()*3) * 1000 + this.msPerTab)
        const dtRun = ((this.msPerTab*10) + parseInt(Math.random()*3) * (this.msPerTab) + this.msPerTab) //
        console.log('dtRun', dtRun)
        d3.selectAll(".reel").classed("spinning", this.spinning)
        this.tick()
        window.setTimeout(() => this.stop(), dtRun)
      }, 100)
    },
    stop(){
      console.log('Stop')
      cancelAnimationFrame(this.interval);
      this.spinning = false
      this.paused = true
      // reels stop from L to R by adding sufficient int to allow for max previous dt
      window.setTimeout(() => {
        d3.select("#reel0").classed("spinning", this.spinning)
        d3.select("#reel0").classed("paused", this.paused)
      },0*this.msPerTab)
      window.setTimeout(() => {
        d3.select("#reel1").classed("spinning", this.spinning)
        d3.select("#reel1").classed("paused", this.paused)
      },(1 + parseInt(Math.random() * 5))*this.msPerTab)
      window.setTimeout(() => {
        d3.select("#reel2").classed("spinning", this.spinning)
        d3.select("#reel2").classed("paused", this.paused)
      },(5 + parseInt(Math.random() * 5))*this.msPerTab)
      window.setTimeout(() => {
        d3.select("#reel3").classed("spinning", this.spinning)
        d3.select("#reel3").classed("paused", this.paused)
      },(9 + parseInt(Math.random()) * 5)*this.msPerTab)
      window.setTimeout(() => {
        d3.select("#reel4").classed("spinning", this.spinning)
        d3.select("#reel4").classed("paused", this.paused)
      },(13 + parseInt(Math.random() * 5))*this.msPerTab)
    }
  }
})
</script>
<style>
.controls {width:100%;height:100px;background-color:orange}
.controlB {width: 100px; height:50px; }
#timerLabel {font-weight: bold; font-size: 24px;position:relative;left:20px}
</style>