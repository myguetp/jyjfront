<template>
  <select v-model="selected" class="border border-black-1 w-full h-[68px] rounded rounded-md mt-3">
    <option :value="null" disabled hidden>{{ placeholder }}</option>
    <option v-for="option in options" :key="String(option)" :value="option">{{ option }}</option>
  </select>
</template>

<script lang="ts">
import { ref, toRefs } from 'vue'

export default {
  props: {
    placeholder: {
      type: String,
      required: true
    },
    options: Array
  },
  setup(props, { emit }) {
    const { placeholder } = toRefs(props);
    const selected = ref(placeholder.value);

    return { selected }
  }
}
</script>