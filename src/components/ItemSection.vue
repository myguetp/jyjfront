<template>
  <section class="flex items-center text-center justify-center">
    <slot name="icon"></slot>
    <p>{{ itemName }}</p>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  props: {
    itemName: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    // No necesitas return en setup si no necesitas datos reactivos aquí.
    return {
      itemName: props.itemName,
    }
  },
});
</script>