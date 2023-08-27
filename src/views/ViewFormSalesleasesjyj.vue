<script lang="ts">
import { defineComponent } from 'vue'
import MainLayout from '../layouts/MainLayout.vue'
import Formjyj from './components/form/Formjyj.vue'

export default defineComponent({
  components: {MainLayout, Formjyj},
  setup() {
    return {}
  },
})
</script>
<template>
  <MainLayout>
    <Formjyj />
  </MainLayout>
  
</template>