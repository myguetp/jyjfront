<script lang="ts">
import { defineComponent } from 'vue'
import MainLayout from '../layouts/MainLayout.vue'
import FormCommercejyj from './components/form/FormCommerce.vue'

export default defineComponent({
  components: {MainLayout, FormCommercejyj},
  setup() {
    return {}
  },
})
</script>
<template>
  <MainLayout>
    <FormCommercejyj />
  </MainLayout>
  
</template>