<script lang="ts">
import { defineComponent } from 'vue'
import MainLayout from '../layouts/MainLayout.vue'
import Staryjyj from './components/inicio/Staryjyj.vue'

export default defineComponent({
  components: {MainLayout, Staryjyj},
  setup() {
    return {}
  },
})
</script>
<template>
  <MainLayout>
    <Staryjyj />
  </MainLayout>
</template>
