<script lang="ts">
import { defineComponent, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import TheButtonjyjVue from '../components/TheButtonjyj.vue'
import Modaljyj from './Modaljyj.vue'
import AuthService from '../../src/services/AuthService'
import IconBurguerVue from './icons/IconBurguer.vue'

export default defineComponent({
  setup() {
    const modalOpen = ref(false)
    const modalUs = ref(false)
    const showMenu = ref(false)
    const openModal = () => {
      modalOpen.value = true
    }
    const openUs = () => {
      modalUs.value = true
    }

    const openMenu = () => {
      showMenu.value = !showMenu.value;
    }

    let email = ref('')
    let password = ref('')



    const authUser = async () => {
      const auth = new  AuthService()
      const success = await auth.login(email.value, password.value)
      if (success) {
        alert('Exito')
      } else {
        alert('incorrect')
      }
    }

    return { modalOpen, modalUs, openModal, openUs, email, password, authUser, showMenu, openMenu }
  },
  components: { TheButtonjyjVue, RouterLink, RouterView, Modaljyj, IconBurguerVue }
})
</script>

<template>
  <section class="hidden items-center justify-center text-center mt-0 lg:block">
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
            <p>Nosotros</p>
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
  <div class="flex lg:hidden p-4 justify-between cursor-pointer" @click="openMenu()">
    <RouterLink to="/">
        <div>
          <img
            src="@/assets/img/empresa.jpeg"
            alt=""
            class="w-[100px] h-[100px] rounded-l-[200px]"
          />
        </div>
      </RouterLink>
      <div class="mt-8">
      <IconBurguerVue />     
      </div>
  </div>
  <div v-if="showMenu">
    <nav class="block gap-y-14 pl-6 shadow-lg">
          <RouterLink to="/Advertisements">Anuncios</RouterLink>
          <div class="cursor-pointer" @click="openUs">
            <p>Nosotros</p>
          </div>
          <div>

          <RouterLink to="/Contact">Contacto</RouterLink>
          </div>
          <div>
            
          <RouterLink to="/Leases">Arriendos</RouterLink>
          </div>
          <div>
            
          <RouterLink to="/Sales">Ventas</RouterLink>
          </div>
          <div class="cursor-pointer" @click="openModal">
            <p>Ingresar</p>
          </div>
    </nav>
  </div>
  <Modaljyj :isOpen="modalOpen" @update:is-open="modalOpen = $event" titulo="J&J CONJUNTOS">
    <div class="flex gap-2 h-auto mt-4">
      <div class="bg-blue-100 w-[40%] hidden lg:block">
        <img src="@/assets/img/empresa.jpeg" alt="" class="w-full h-full" />
      </div>
      <div class="flex w-[50%] justify-center items-center text-center">
        <div class="block gap-y-4 w-full lg:w-[100%] ">
          <p class="text-xl">Iniciar Sesión</p>
          <input
            type="text"
            placeholder="Ingrese su correo "
            class="border border-black-1 rounded-md mt-2 h-[62px] w-[300px] placeholder-center"
            v-model="email"
          />
          <input
            type="password"
            placeholder="Ingrese su contraseña"
            class="border border-black-1 rounded-md mt-4 h-[62px] w-[300px] placeholder-center"
            v-model="password"
          />
          <div class="flex justify-end">
            <a class="font-bold text-sm cursor-pointer">¿Olvidó su contraseña?</a>
          </div>
          <div class="flex justify-center mt-4">
            <TheButtonjyjVue texto="Ingresar"  @click="authUser"/>
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
