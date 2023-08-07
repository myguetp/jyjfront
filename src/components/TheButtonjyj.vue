<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props:{
    texto:{
      type: String,
      required: true
    }
  },
  emits: ['click'],
  setup(Props, { emit }) {
    const OnClick = () => emit('click')
    return { OnClick }
  },
})
</script>

<template>
  <button type="button" class="bg-blue-600 text-white w-[200px] h-[50px] rounded-md" @click="OnClick"> {{ texto }} </button>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
