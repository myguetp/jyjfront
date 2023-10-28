<script lang="ts">
import { defineComponent, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import TheButtonjyjVue from '../components/TheButtonjyj.vue'
import Modaljyj from './Modaljyj.vue'

export default defineComponent({
  setup() {
    const modalOpen = ref(false)
    const modalUs = ref(false)
    const openModal = () => {
      modalOpen.value = true
    }
    const openUs = () => {
      modalUs.value = true
    }
    return { modalOpen, modalUs, openModal, openUs }
  },
  components: { TheButtonjyjVue, RouterLink, RouterView, Modaljyj }
})
</script>

<template>
  <section class="flex items-center justify-center text-center mt-0">
    <header class="flex items-center justify-between w-full pl-6 shadow-md">
      <RouterLink to="/">
        <div>
          <img
            src="@/assets/img/empresa.jpeg"
            alt=""
            class="w-[100px] h-[100px] rounded-l-[200px]"
          />
        </div>
      </RouterLink>

      <div class="flex gap-32">
        <nav class="flex gap-32 items-center text-center justify-center mt-6">
          <RouterLink to="/Advertisements">Anuncios</RouterLink>
          <div class="cursor-pointer" @click="openUs">
            <p>nosotros</p>
          </div>
          <RouterLink to="/Contact">Contacto</RouterLink>
          <RouterLink to="/Leases">Arriendos</RouterLink>
          <RouterLink to="/Sales">Ventas</RouterLink>
          <div class="cursor-pointer" @click="openModal">
            <p>Ingresar</p>
          </div>
        </nav>
      </div>

      <div class="flex gap-4 mt-2 pr-8">
        <RouterLink to="/SalesLeases"><TheButtonjyjVue texto="Publica gratis" /></RouterLink>
      </div>
    </header>
  </section>
  <Modaljyj :isOpen="modalOpen" @update:is-open="modalOpen = $event" titulo="J&J CONJUNTOS">
    <div class="flex gap-2 h-auto mt-4">
      <div class="bg-blue-100 w-[40%]">
        <img src="@/assets/img/empresa.jpeg" alt="" class="w-full h-full" />
      </div>
      <div class="flex w-[50%] justify-center items-center text-center">
        <div class="block gap-y-4 w-[100%]">
          <p class="text-xl">Iniciar Sesión</p>
          <input
            type="text"
            placeholder="Ingrese su usuario "
            class="border border-black-1 rounded-md mt-2 h-[62px] w-[300px] placeholder-center"
          />
          <input
            type="password"
            placeholder="Ingrese su contraseña"
            class="border border-black-1 rounded-md mt-4 h-[62px] w-[300px] placeholder-center"
          />
          <div class="flex justify-end">
            <a class="font-bold text-sm cursor-pointer">¿Olvidó su contraseña?</a>
          </div>
          <div class="flex justify-center mt-4">
            <TheButtonjyjVue texto="Ingresar" />
          </div>
        </div>
      </div>
    </div>
  </Modaljyj>

  <Modaljyj :isOpen="modalUs" @update:is-open="modalUs = $event" titulo="J&J CONJUNTOS">
    <div class="flex gap-2 h-auto mt-4">
      <div class="bg-blue-100 w-[40%]">
        <img src="@/assets/img/empresa.jpeg" alt="" class="w-full h-full" />
      </div>
      <div class="flex w-[50%] justify-center items-center text-center">
        <div class="block gap-y-4 w-[100%]">
          <p class="text-xl">que ofrecemos</p>
          
          <p>mision</p>
          <p>vision</p>
        </div>
      </div>
    </div>
  </Modaljyj>

  <RouterView />
</template>
