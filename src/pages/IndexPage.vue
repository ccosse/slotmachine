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
import { neonSymbols, reelSymbolOrder } from '../assets/neonSymbols.js'
/**
  The IndexPage holds the Stage and Controls
*/
const reelImgs = reelSymbolOrder.map(name => neonSymbols[name])
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
          const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><text x="50" y="76" text-anchor="middle" font-family="Arial Rounded MT Bold, DejaVu Sans, Verdana, sans-serif" font-weight="900" font-size="78" fill="#009500" stroke="#f1ff00" stroke-width="4" paint-order="stroke fill" stroke-linejoin="round">${this.preset[i]}</text></svg>`
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
.slot-machine.compact { height: calc(190px * var(--machine-scale, 1)); width: 100%; margin: auto; overflow: visible; }
.compact .machine-canvas { transform-origin: top left; position: relative; height: 190px; border-radius: 20px; overflow: hidden; background: #303030; }
.compact #stage { position: absolute; top: 20px; left: 0; width: 100%; height: 150px; overflow: hidden; background: #303030; border-radius: 14px; }
/* A foreground bezel masks the square edges and softens the column divisions. */
.compact #stage::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 5;
  pointer-events: none;
  border-radius: 14px;
  box-shadow: inset 0 0 0 9px #303030;
  background: repeating-linear-gradient(to right,
    transparent 0,
    transparent calc(100% / 8 - 1px),
    rgba(48, 48, 48, .14) calc(100% / 8 - 1px),
    rgba(48, 48, 48, .14) calc(100% / 8));
}
.compact .reel_container { top: 70px; border: none; }
.compact .reel .pane { border: none !important; background: transparent; backface-visibility: hidden; }
.compact .reel .pane .q-img { opacity: 1 !important; }
.compact #h2 { display: none; }
.compact .controls { position: absolute; inset: 0; height: 190px; background: transparent; z-index: 8; display: block; pointer-events: none; }
.compact .controls > div { position: static; }
.compact .controlB { position: absolute; right: calc(12px / var(--machine-scale, 1)); bottom: calc(9px / var(--machine-scale, 1)); width: calc(88px / var(--machine-scale, 1)); height: calc(32px / var(--machine-scale, 1)); min-height: calc(32px / var(--machine-scale, 1)); font-size: calc(13px / var(--machine-scale, 1)); opacity: .86; pointer-events: auto; }
.compact #resultsLabel, .compact #timerLabel, .compact .pane .text-h6 { display: none; }
</style>
