<script lang="ts">
import { defineComponent } from "vue";
import MenuNavBatjyj from "../components/MenuNavBatjyj.vue";

export default defineComponent({
  components: {
    MenuNavBatjyj,
  },
  setup() {
    return {};
  },
});
</script>
<template>
  <section>
    <MenuNavBatjyj />
  </section>
  <div class="mt-6">
    <slot></slot>
  </div>
</template>
