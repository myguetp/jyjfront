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
  <section class="flex items-center justify-center text-center mt-4">  
  <header class="flex gap-8">
    <RouterLink to="/">
      <div>imagen</div>
    </RouterLink>
    <nav class="flex gap-8 items-cemter text-center justify-center mt-2">
      <RouterLink to="/Advertisements">Anuncios</RouterLink>
      <RouterLink to="/Us">Nosotros</RouterLink>
      <RouterLink to="/Contact">Contacto</RouterLink>
      <RouterLink to="/Leases">Arriendos</RouterLink>
      <RouterLink to="/Sales">Ventas</RouterLink>
    </nav>
    <div class="flex gap-4">
    <TheButtonjyjVue texto="Ingresar" />
    <TheButtonjyjVue texto="Publica gratis" />
    </div>
  </header>
</section>

  <RouterView />
</template>