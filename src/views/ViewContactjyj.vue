<script lang="ts">
import { defineComponent } from "vue";
import { MapboxMap } from "vue-mapbox-ts";
import MainLayout from "../layouts/MainLayout.vue";

export default defineComponent({
  components: { MainLayout, MapboxMap },
  setup() {
    const myAccessToken = "";
    return { myAccessToken };
  },
});
</script>
<template>
  <MainLayout>
    <mapbox-map :accessToken="myAccessToken" mapStyle="light-v10" />
  </MainLayout>
</template>
