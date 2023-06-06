<template>
  <q-page>
    <div>
    <!-- t360 < 5 is too accurate and leads to bad alignment; also must manually set animation-duration at ReelComponent-->
    <StageComponent :t360="5"/>
    <ControlsComponent :t360="5" :numpane="20"/>
    </div>
  </q-page>
</template>
<script>
import { defineComponent } from 'vue'
import StageComponent from 'components/StageComponent.vue'
import ControlsComponent from 'components/ControlsComponent.vue'
/**
  The IndexPage holds the Stage and Controls
*/
export default defineComponent({
  name: 'IndexPage',
  components: {StageComponent, ControlsComponent},
  setup () {
    return {
      turn: null
    }
  }
})
</script>
