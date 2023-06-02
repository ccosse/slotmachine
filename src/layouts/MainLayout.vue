<template>
  <!--Splash layout with no headers or sidebars-->
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import { Dark } from 'quasar'

export default defineComponent({
  name: 'SplashLayout',

  components: {},

  setup () {
    return {}
  },
  mounted () {
    if (!Dark.isActive) {
      Dark.toggle()
    }
  }
})
</script>
