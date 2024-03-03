<script lang="ts">
import { defineComponent } from 'vue'
import MainLayout from '../layouts/MainLayout.vue'
import CommerceFormjyj from './components/form/CommerceFormjyj.vue'

export default defineComponent({
  components: {MainLayout, CommerceFormjyj},
  setup() {
    return {}
  },
})
</script>
<template>
  <MainLayout>
    <CommerceFormjyj />
  </MainLayout>
  
</template>