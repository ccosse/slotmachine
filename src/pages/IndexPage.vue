/**
  Author          :Charlie Cosse
  Website         :www.asymptopia.com
  Email           :ccosse@gmail.com
  Copyright       :(C) 2023 Asymptopia Software
  License         :ALL RIGHTS RESERVED
*/
<template>
  <div :style="compact ? { '--machine-scale': scale } : {}" ref="host" :class="['slot-machine', { compact }]">
    <div class="machine-canvas" :style="compact ? { width: '1000px', transform: `scale(${scale})` } : {}">
    <!-- t360 < 5 is too accurate and leads to bad alignment; also must manually set animation-duration at ReelComponent-->
    <StageComponent :ximgs = "this.ximgs" :t360="5"/>
    <ControlsComponent :key="reelCount + preset" :ximgs = "this.ximgs" :t360="5" :numpane="20" :preset="preset" :auto-spin="compact"/>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import StageComponent from '../components/StageComponent.vue'
import ControlsComponent from '../components/ControlsComponent.vue'
/**
  The IndexPage holds the Stage and Controls
*/
const reelImgs = [
  new URL('../assets/cherries.png', import.meta.url).href,
  new URL('../assets/pineapple.png', import.meta.url).href,
  new URL('../assets/lemon.png', import.meta.url).href,
  new URL('../assets/seven.png', import.meta.url).href,
  new URL('../assets/gem.png', import.meta.url).href,
  new URL('../assets/seven2.png', import.meta.url).href,
  new URL('../assets/bar.png', import.meta.url).href,
  new URL('../assets/bell.png', import.meta.url).href,
  new URL('../assets/seven3.png', import.meta.url).href,
  new URL('../assets/dollar.png', import.meta.url).href,
  new URL('../assets/cherries.png', import.meta.url).href,
  new URL('../assets/pineapple.png', import.meta.url).href,
  new URL('../assets/lemon.png', import.meta.url).href,
  new URL('../assets/seven.png', import.meta.url).href,
  new URL('../assets/gem.png', import.meta.url).href,
  new URL('../assets/seven2.png', import.meta.url).href,
  new URL('../assets/bar.png', import.meta.url).href,
  new URL('../assets/bell.png', import.meta.url).href,
  new URL('../assets/seven3.png', import.meta.url).href,
  new URL('../assets/chest.png', import.meta.url).href
]
const offset = 3
export default defineComponent({
  name: 'IndexPage',
  components: {StageComponent, ControlsComponent},
  props: {
    reelCount: { type: Number, default: 5, validator: n => Number.isInteger(n) && n > 0 && n <= 20 },
    preset: { type: String, default: '', validator: s => /^[A-Z]*$/.test(s) },
    compact: { type: Boolean, default: false }
  },
  data () { return { scale: 1 } },
  mounted () {
    this.observer = new ResizeObserver(([entry]) => { this.scale = Math.min(1, entry.contentRect.width / 1000) })
    this.observer.observe(this.$refs.host)
  },
  beforeUnmount () { this.observer.disconnect() },
  computed: {
    ximgs () {
      return Array.from({ length: this.reelCount }, (_, i) => {
        const shift = (offset * i) % reelImgs.length
        const images = reelImgs.slice(shift).concat(reelImgs.slice(0, shift))
        if (this.preset.length === this.reelCount) {
          const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="#303030"/><text x="50" y="75" text-anchor="middle" font-family="Georgia,serif" font-style="italic" font-weight="bold" font-size="76" fill="#f4d955" stroke="#3e6c23" stroke-width="1.5" paint-order="stroke">${this.preset[i]}</text></svg>`
          images[0] = 'data:image/svg+xml,' + encodeURIComponent(svg)
        }
        return images
      })
    }
  }
})
</script>
<style>
html, body { height: 100%; }
.slot-machine { position: relative; }
.slot-machine.compact { height: calc(150px * var(--machine-scale, 1)); width: 100%; margin: auto; overflow: visible; }
.compact .machine-canvas { transform-origin: top left; position: relative; height: 150px; }
.compact #stage { height: 150px; overflow: hidden; background-color: #303030; }
.compact .reel_container { top: 70px; }
.compact #h2 { top: 75px; background-color: #bda04e; opacity: .55; }
.compact .controls { position: absolute; inset: 0; height: 150px; background: transparent; z-index: 8; display: block; pointer-events: none; }
.compact .controls > div { position: static; }
.compact .controlB { position: absolute; right: calc(12px / var(--machine-scale, 1)); bottom: calc(9px / var(--machine-scale, 1)); width: calc(88px / var(--machine-scale, 1)); height: calc(32px / var(--machine-scale, 1)); min-height: calc(32px / var(--machine-scale, 1)); font-size: calc(13px / var(--machine-scale, 1)); opacity: .86; pointer-events: auto; }
.compact #resultsLabel, .compact #timerLabel, .compact .pane .text-h6 { display: none; }
</style>
