<script lang="ts">
import { defineComponent } from "vue";
import MainLayout from "../layouts/MainLayout.vue";

export default defineComponent({
  components: { MainLayout },
  setup() {
    const myAccessToken = "";
    return { myAccessToken };
  },
});
</script>
<template>
  <MainLayout>
    <p>Envianos un mensaje si quieres contactar con nosotros</p>
  </MainLayout>
</template>
