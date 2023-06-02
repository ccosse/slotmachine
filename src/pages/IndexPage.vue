<template>
  <q-page class="flex flex-center">
    <div>
    <StageComponent />
    <ControlsComponent />
    </div>
  </q-page>
</template>
<script>
import { defineComponent } from 'vue'
import StageComponent from 'components/StageComponent.vue'
import ControlsComponent from 'components/ControlsComponent.vue'
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
