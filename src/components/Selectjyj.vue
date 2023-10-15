<script lang="ts">
import { ref } from 'vue'
export default {
  props: {
    placeholder: {
      type: String,
      required: true
    },
    options: Array
  },
  setup(props, { emit }) {
    const selected = ref(null);
    return { selected }
   }
}
</script>
<template>
  <select v-model="selected" class="border border-black-1 w-full h-[68px] rounded rounded-md mt-3">
    <option disabled value="">{{ placeholder }} </option>
    <Option v-for="option in options" :key="option" :value="option" :label="option"/>
  </select>
</template>
