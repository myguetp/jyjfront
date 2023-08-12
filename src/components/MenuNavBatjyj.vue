<script lang="ts">
import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import TheButtonjyjVue from '../components/TheButtonjyj.vue'

export default defineComponent({
    setup() {
    },
    components: { TheButtonjyjVue, RouterLink, RouterView }
})
</script>

<template>
  <section class="flex items-center justify-center text-center mt-0">  
  <header class="flex gap-8">
    <RouterLink to="/">
      <div>
        <img src="@/assets/img/empresa.jpeg" alt="" class="w-[80px] h-[80px] rounded-l-[200px]">
      </div>
    </RouterLink>
    <nav class="flex gap-8 items-cemter text-center justify-center mt-6">
      <RouterLink to="/Advertisements">Anuncios</RouterLink>
      <RouterLink to="/Us">Nosotros</RouterLink>
      <RouterLink to="/Contact">Contacto</RouterLink>
      <RouterLink to="/Leases">Arriendos</RouterLink>
      <RouterLink to="/Sales">Ventas</RouterLink>
    </nav>
    <div class="mt-6">
    <p>Ingresar</p>
    </div>
    <div class="flex gap-4 mt-2">
    <TheButtonjyjVue texto="Publica gratis" />
    </div>
  </header>
</section>

  <RouterView />
</template>