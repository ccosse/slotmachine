/**
  Author          :Charlie Cosse
  Website         :www.asymptopia.com
  Email           :ccosse@gmail.com
  Copyright       :(C) 2023 Asymptopia Software
  License         :ALL RIGHTS RESERVED
*/
<template>
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
  name: 'MainLayout',

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
