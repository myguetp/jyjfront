<script lang="ts">
import { defineComponent } from 'vue'
import MainLayout from '../layouts/MainLayout.vue'

export default defineComponent({
  components: {MainLayout},
  setup() {
    return {}
  },
})
</script>
<template>
  <MainLayout>
    <p>hola contacto</p>
  </MainLayout>
</template>