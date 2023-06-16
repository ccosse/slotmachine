<script setup>
import { nextTick, ref } from 'vue'
import ConfettiExplosion from 'vue-confetti-explosion'

const visible = ref(false)

const explode = async () => {
  visible.value = false
  await nextTick()
  visible.value = true
}
</script>
<template>
  <q-page id="confetti" class="flex flex-center" style="overflow:hidden;width:100%;">
  <div class="text-center">
    <ConfettiExplosion v-if="visible" :stageHeight="800" style="position:relative;top:-100px;left:45px;"/>
    <q-btn @click="explode" class="z-top bg-primary">CONFETTI
    </q-btn>
  </div>
  </q-page>
</template>
