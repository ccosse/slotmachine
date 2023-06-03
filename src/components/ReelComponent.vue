<template>
  <div class="reel_container">
    <div class="reel">
      <figure v-for="(val,idx) in this.tileImgs" :key="idx">
        <TileComponent :imgUrl="this.tileImgs[idx]" />
        <span class="hidden">{{val}}</span>
      </figure>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
import TileComponent from 'components/TileComponent.vue'
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
export default defineComponent({
  name: 'ReelComponent',
  components: { TileComponent },
  props: [ 'reelIdx' ],
  setup(){
    return {
      tileImgs: ref([])
    }
  },
  mounted(){
    this.tileImgs = reelImgs.slice(2*this.reelIdx,20).concat(reelImgs.slice(0, 2*this.reelIdx))
  }
})
</script>
<style>
/*
.reel {width:10vw;background-color:gray}
*/
.reel figure {
  display: block;
  position: absolute;
  width: 14vw;
  height: 14vw;
  top: -8vw;
  border: 2px solid #000;
	backface-visibility: hidden;
}
.reel {
	animation: spinY 20s infinite normal linear both paused;
}
.reel.spinning{
	animation: spinY 20s infinite normal linear both running;
}

.reel_container {
	width: 1px;
	height: 1px;
	position: relative;
	margin: 0 auto 0px;
	border: 1px solid #FFFF;
	top:20vw;

	transform:rotateZ(-90deg);
/*
	-webkit-perspective: 1100px;
		 -moz-perspective: 1100px;
			 -o-perspective: 1100px;
					perspective: 1100px;
*/
}

.reel {
	width: 100%;
	height: 100%;
	position: absolute;
	-webkit-transform-style: preserve-3d;
		 -moz-transform-style: preserve-3d;
			 -o-transform-style: preserve-3d;
					transform-style: preserve-3d;
}

@keyframes spinY {
		0% {transform:rotateY(360deg);}
		100% {transform:rotateY(0deg);}
}

.reel figure:nth-child(1) { -webkit-transform: rotateY(0deg) translateZ(50vw); }
.reel figure:nth-child(2) { -webkit-transform: rotateY(18deg) translateZ(50vw); }
.reel figure:nth-child(3) { -webkit-transform: rotateY(36deg) translateZ(50vw); }
.reel figure:nth-child(4) { -webkit-transform: rotateY(54deg) translateZ(50vw); }
.reel figure:nth-child(5) { -webkit-transform: rotateY(72deg) translateZ(50vw); }
.reel figure:nth-child(6) { -webkit-transform: rotateY(90deg) translateZ(50vw); }
.reel figure:nth-child(7) { -webkit-transform: rotateY(108deg) translateZ(50vw); }
.reel figure:nth-child(8) { -webkit-transform: rotateY(126deg) translateZ(50vw); }
.reel figure:nth-child(9) { -webkit-transform: rotateY(144deg) translateZ(50vw); }
.reel figure:nth-child(10) { -webkit-transform: rotateY(162deg) translateZ(50vw); }
.reel figure:nth-child(11) { -webkit-transform: rotateY(180deg) translateZ(50vw); }
.reel figure:nth-child(12) { -webkit-transform: rotateY(198deg) translateZ(50vw); }
.reel figure:nth-child(13) { -webkit-transform: rotateY(216deg) translateZ(50vw); }
.reel figure:nth-child(14) { -webkit-transform: rotateY(234deg) translateZ(50vw); }
.reel figure:nth-child(15) { -webkit-transform: rotateY(252deg) translateZ(50vw); }
.reel figure:nth-child(16) { -webkit-transform: rotateY(270deg) translateZ(50vw); }
.reel figure:nth-child(17) { -webkit-transform: rotateY(288deg) translateZ(50vw); }
.reel figure:nth-child(18) { -webkit-transform: rotateY(306deg) translateZ(50vw); }
.reel figure:nth-child(19) { -webkit-transform: rotateY(324deg) translateZ(50vw); }
.reel figure:nth-child(20) { -webkit-transform: rotateY(342deg) translateZ(50vw); }
</style>