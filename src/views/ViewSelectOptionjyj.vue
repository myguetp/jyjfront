<script lang="ts">
import { defineComponent } from "vue";
import { RouterView, RouterLink } from "vue-router";
import MainLayout from "../layouts/MainLayout.vue";
import TheButtonjyjVue from "../components/TheButtonjyj.vue";

export default defineComponent({
  components: { MainLayout, RouterView, RouterLink, TheButtonjyjVue },
  setup() {
    return {};
  },
});
</script>

<template>
  <MainLayout>
    <div class="flex lg:block">
      <section class="block lg:flex ml-2 lg:ml-0">
        <div class="flex gap-4 mt-6 w-full items-center justify-center">
          <RouterView>
            <RouterLink to="/Register"
              ><TheButtonjyjVue class="text-white font-bold" texto="Anuncio"
            /></RouterLink>
          </RouterView>
        </div>
        <div class="flex gap-4 mt-6 w-full items-center justify-center">
          <RouterView>
            <RouterLink to="/Register"
              ><TheButtonjyjVue class="text-white font-bold" texto="Arrriendo"
            /></RouterLink>
          </RouterView>
        </div>
        <div class="flex gap-4 mt-6 w-full items-center justify-center">
          <RouterView>
            <RouterLink to="/Register"
              ><TheButtonjyjVue class="text-white font-bold" texto="Venta"
            /></RouterLink>
          </RouterView>
        </div>
      </section>

      <section
        class="block lg:flex items-center justify-center ml-2 lg:ml-0 lg:mt-8 gap-40 h-20"
      >
        <div
          class="flex gap-4 w-60 items-center justify-center h-full border border-gray-600 rounded-md"
        >
          <p>Tus Publicaciones antiguas</p>
        </div>
        <div
          class="flex gap-4 w-60 items-center justify-center h-full border border-gray-600 rounded-md"
        >
          <p>Tus publicaciones activas</p>
        </div>
        <div
          class="flex gap-4 w-60 items-center justify-center h-full border border-gray-600 rounded-md"
        >
          <p>Tus publicaciones por vencer</p>
        </div>
      </section>
    </div>
  </MainLayout>
</template>
