<script lang="ts">
import { defineComponent, ref } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import TheButtonjyjVue from '../components/TheButtonjyj.vue'
import Modaljyj from './Modaljyj.vue'
import AuthService from '../../src/services/AuthService'
import IconBurguerVue from './icons/IconBurguer.vue'
import { useHttpStore } from '../services/store/httpstore'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css';


export default defineComponent({
  components: { TheButtonjyjVue, RouterView, Modaljyj, IconBurguerVue },
  setup() {
    const router = useRouter()
    const storehttp = useHttpStore()

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
      showMenu.value = !showMenu.value
    }

    const cerrarSesion = () => {
      sessionStorage.removeItem('token');
      storehttp.$patch((state) => {
        state.tokenAuth = ''; 
      });
      router.push({ name: 'Inicio' });
    };

    let email = ref('')
    let password = ref('')

    const authUser = async () => {
      const auth = new AuthService()
      const success = await auth.login(email.value, password.value)
      if (success) {
        router.push({ name: 'Select' })

        toast('Ingreso exitoso', {
          delay: 50000,
          rtl: true,
        });
      } else {
        toast('Intente nuevamente', {
          delay: 50000,
          rtl: true,
        });
      }
    }

    return {
      router,
      modalOpen,
      modalUs,
      openModal,
      openUs,
      email,
      password,
      authUser,
      showMenu,
      openMenu,
      storehttp,
      cerrarSesion
    }
  }

})
</script>

<template>
  <section class="hidden items-center justify-center text-center mt-0 lg:block">
    <header class="flex items-center justify-between w-full pl-24 shadow-md">
      <div class="cursor-pointer" @click="router.push({ name: 'Inicio' })">
        <div>
          <img
            src="@/assets/img/complexs.png"
            alt=""
            class="w-[150px] h-[120px] rounded-l-[200px]"
          />
        </div>
      </div>

      <div class="flex gap-32">
        <nav class="flex gap-32 items-center text-center justify-center mt-6">
          <div class="cursor-pointer font-bold text-lg" @click="openUs">
            <p>Nosotros</p>
          </div>
          <div
            @click="router.push({ name: 'Contact' })"
            class="font-bold text-lg cursor-pointer"
            activeClass="rounded-md bg-gray-200 p-5"
            exact
          >
            Contacto
          </div>
          <div
            @click="router.push({ name: 'Advertisements' })"
            class="font-bold text-lg cursor-pointer"
            activeClass="rounded-md bg-gray-200 p-5"
            exact
          >
            Anuncios
          </div>
          <div
            @click="router.push({ name: 'Leases' })"
            class="font-bold text-lg cursor-pointer"
            activeClass="rounded-md bg-gray-200 p-5"
            exact
          >
            Arriendos
          </div>
          <div
            @click="router.push({ name: 'Sales' })"
            class="font-bold text-lg cursor-pointer"
            activeClass="rounded-md bg-gray-200 p-5"
            exact
          >
            Ventas
          </div>
          <div v-show="storehttp.tokenAuth === ''" class="cursor-pointer" @click="openModal">
            <p v-show="storehttp.tokenAuth === ''" class="font-bold text-lg">Ingresar</p>
          </div>
        </nav>
      </div>

      <div v-show="storehttp.tokenAuth === ''" class="flex gap-4 mt-2 pr-8">
        <div class="cursor-pointer" @click="router.push({ name: 'SalesLeases' })">
          <TheButtonjyjVue class="text-white" texto="Publica gratis" />
        </div>
      </div>
      <div v-show="storehttp.tokenAuth !== ''" class="flex gap-4 mt-2 pr-8">
        <div>
          <p class="font-bold"> Usuario: {{ storehttp.useName }} </p>
        <div class="flex gap-2">
          <TheButtonjyjVue
            :tamanio="'sm'"
            class="text-white"
            texto="Mi perfil"
            @click="router.push({ name: 'Select' })"
          />
          <TheButtonjyjVue :tamanio="'sm'" class="text-white bg-red-400" texto="Cerrar Sesion" @click="cerrarSesion" /> 
          
        </div>
        </div>
      </div>
    </header>
  </section>
  <div class="flex lg:hidden p-4 justify-between cursor-pointer" @click="openMenu()">
    <div class="cursor-pointer" @click="router.push({ name: 'Inicio' })">
      <div>
        <img src="@/assets/img/complexs.png" alt="" class="w-[100px] h-[100px] rounded-l-[200px]" />
      </div>
    </div>
    <div class="mt-8">
      <IconBurguerVue />
    </div>
  </div>
  <div v-if="showMenu">
    <nav class="block gap-y-14 pl-6 shadow-lg">
      <div v-show="storehttp.tokenAuth !== ''" class="flex gap-4 mt-2 p4">
        <div class="p-2">
          <p class="font-bold"> Usuario: {{ storehttp.useName }} </p>
        <div class="flex gap-2">
          <TheButtonjyjVue
            :tamanio="'sm'"
            class="text-white"
            texto="Mi perfil"
            @click="router.push({ name: 'Select' })"
          />
          <TheButtonjyjVue :tamanio="'sm'" class="text-white bg-red-400" texto="Cerrar Sesion" @click="cerrarSesion" /> 
          
        </div>
        </div>
      </div>
      <div class="cursor-pointer" @click="openUs">
        <p class="font-bold text-lg">Nosotros</p>
      </div>
      <div>
        <div @click="router.push({ name: 'Contact' })" class="font-bold text-lg cursor-pointer">
          Contacto
        </div>
      </div>
      <div>
        <div @click="router.push({ name: 'Contact' })" class="font-bold text-lg cursor-pointer">
          Anuncios
        </div>
      </div>
      <div>
        <div @click="router.push({ name: 'Contact' })" class="font-bold text-lg cursor-pointer">
          Arriendos
        </div>
      </div>
      <div>
        <div @click="router.push({ name: 'Contact' })" class="font-bold text-lg cursor-pointer">
          Ventas
        </div>
      </div>
      <div v-show="storehttp.tokenAuth === ''" class="cursor-pointer" @click="openModal">
        <p class="font-bold text-lg">Ingresar</p>
      </div>
      <div v-show="storehttp.tokenAuth === ''" class="cursor-pointer" @click="router.push({ name: 'SalesLeases' })">
        <TheButtonjyjVue class="text-white" texto="Publica gratis" :tamanio="'sm'" />
      </div>
     
    </nav>
  </div>
  <Modaljyj :isOpen="modalOpen" @update:is-open="modalOpen = $event" titulo="COMPLEXES">
    <div class="flex gap-2 h-auto mt-4">
      <div class="bg-blue-100 w-[40%] hidden lg:block">
        <img src="@/assets/img/complexs.png" alt="" class="w-full h-full" />
      </div>
      <div class="flex sm:w-full lg:w-[50%] justify-center items-center text-center">
        <div class="block gap-y-4 w-full lg:w-[100%]">
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
          <div class="flex justify-center lg:justify-end">
            <a class="font-bold text-sm cursor-pointer">¿Olvidó su contraseña?</a>
          </div>
          <div class="flex justify-center mt-4">
            <TheButtonjyjVue texto="Ingresar" class="text-white" @click="authUser" />
          </div>
        </div>
      </div>
    </div>
  </Modaljyj>

  <Modaljyj :isOpen="modalUs" @update:is-open="modalUs = $event" titulo="COMPLEXES">
    <div class="flex gap-2 h-auto mt-4">
      <div class="bg-blue-100 w-[40%]">
        <img src="@/assets/img/complexs.png" alt="" class="w-full h-full" />
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
