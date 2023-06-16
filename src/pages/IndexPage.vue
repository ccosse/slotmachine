/**
  Author          :Charlie Cosse
  Website         :www.asymptopia.com
  Email           :ccosse@gmail.com
  Copyright       :(C) 2023 Asymptopia Software
  License         :ALL RIGHTS RESERVED
*/
<template>
  <q-page>
    <div>
    <!-- t360 < 5 is too accurate and leads to bad alignment; also must manually set animation-duration at ReelComponent-->
    <StageComponent :ximgs = "this.ximgs" :t360="5"/>
    <ControlsComponent :ximgs = "this.ximgs" :t360="5" :numpane="20"/>
    </div>
  </q-page>
</template>
<script>
import { defineComponent, ref } from 'vue'
import StageComponent from 'components/StageComponent.vue'
import ControlsComponent from 'components/ControlsComponent.vue'
/**
  The IndexPage holds the Stage and Controls
*/
const reelImgs = [
  'https://raw.githubusercontent.com/ccosse/slotmachine/master/src/assets/cherries.png',
  'https://raw.githubusercontent.com/ccosse/slotmachine/master/src/assets/pineapple.png',
  'https://raw.githubusercontent.com/ccosse/slotmachine/master/src/assets/lemon.png',
  'https://raw.githubusercontent.com/ccosse/slotmachine/master/src/assets/seven.png',
  'https://raw.githubusercontent.com/ccosse/slotmachine/master/src/assets/gem.png',
  'https://raw.githubusercontent.com/ccosse/slotmachine/master/src/assets/seven2.png',
  'https://raw.githubusercontent.com/ccosse/slotmachine/master/src/assets/bar.png',
  'https://raw.githubusercontent.com/ccosse/slotmachine/master/src/assets/bell.png',
  'https://raw.githubusercontent.com/ccosse/slotmachine/master/src/assets/seven3.png',
  'https://raw.githubusercontent.com/ccosse/slotmachine/master/src/assets/dollar.png',
  'https://raw.githubusercontent.com/ccosse/slotmachine/master/src/assets/cherries.png',
  'https://raw.githubusercontent.com/ccosse/slotmachine/master/src/assets/pineapple.png',
  'https://raw.githubusercontent.com/ccosse/slotmachine/master/src/assets/lemon.png',
  'https://raw.githubusercontent.com/ccosse/slotmachine/master/src/assets/seven.png',
  'https://raw.githubusercontent.com/ccosse/slotmachine/master/src/assets/gem.png',
  'https://raw.githubusercontent.com/ccosse/slotmachine/master/src/assets/seven2.png',
  'https://raw.githubusercontent.com/ccosse/slotmachine/master/src/assets/bar.png',
  'https://raw.githubusercontent.com/ccosse/slotmachine/master/src/assets/bell.png',
  'https://raw.githubusercontent.com/ccosse/slotmachine/master/src/assets/seven3.png',
  'https://raw.githubusercontent.com/ccosse/slotmachine/master/src/assets/chest.png'
]
const offset = 3 // each reel is advanced by <offset> images from the previous reel (-3, +3); more than |3| * (5 reels) > 20 -> WRAP-ERROR
export default defineComponent({
  name: 'IndexPage',
  components: {StageComponent, ControlsComponent},
  setup () {
    return {
      turn: null,
      ximgs: ref([
        reelImgs.slice(offset*0,20).concat(reelImgs.slice(0, offset*0)),
        reelImgs.slice(offset*1,20).concat(reelImgs.slice(0, offset*1)),
        reelImgs.slice(offset*2,20).concat(reelImgs.slice(0, offset*2)),
        reelImgs.slice(offset*3,20).concat(reelImgs.slice(0, offset*3)),
        reelImgs.slice(offset*4,20).concat(reelImgs.slice(0, offset*4))
      ])
    }
  }
})
</script>
