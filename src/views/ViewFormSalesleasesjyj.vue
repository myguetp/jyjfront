<script lang="ts">
import { defineComponent } from 'vue'
import MainLayout from '../layouts/MainLayout.vue'
import SignUpjyj from './components/form/SignUpjyj.vue'

export default defineComponent({
  components: {MainLayout, SignUpjyj},
  setup() {
    return {}
  },
})
</script>
<template>
  <MainLayout>
    <SignUpjyj />
  </MainLayout>
  
</template>