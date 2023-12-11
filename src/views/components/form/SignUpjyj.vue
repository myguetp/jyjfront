<template>
  <section class="block h-screen">
    <div class="flex w-full h-100% items-center justify-center gap-4">
      <div class="hidden lg:block">
        <img src="@/assets/img/firstImage.jpg" alt="" class="w-[900px] h-[850px]">
      </div>
      <div class="w-[500px]">
        <h2 class="font-wold text-[43px]">Crea tu cuenta</h2>
        
        <FlowInput class="w-full h-[68px] mt-2 rounded-md" placeholder="Nombres " />
        <FlowInput class="w-full h-[68px] mt-2 rounded-md" placeholder="Apellidos" />
        <FlowInput class="w-full h-[68px] mt-2 rounded-md" placeholder="Correo electrónico" />
        <FlowInput class="w-full h-[68px] mt-2 rounded-md" placeholder="Teléfono" />
        <FlowInput class="w-full h-[68px] mt-2 rounded-md" placeholder="Cuidad" />

        <div class="relative">
          <FlowInput
            v-if="!showPassword"
            class="w-full h-[68px] mt-2 rounded-md"
            type="password"
            v-model="passwordInput"
            placeholder="Contraseña"
          />
          <FlowInput
            v-else
            class="w-full h-[68px] mt-2 rounded-md"
            v-model="passwordInput"
            placeholder="Contraseña"
          />

          <button
            @click="showPassword = !showPassword"
            class="absolute top-1/2 right-4 transform -translate-y-1/2 focus:outline-none"
          >
            {{ showPassword ? 'Ocultar' : 'Ver' }}
          </button>
        </div>

        <div class="flex gap-4 mt-6 w-full items-center justify-center">
          <RouterView>
            <RouterLink to="/Select"><TheButtonjyjVue texto="Registrarse" /></RouterLink>
          </RouterView>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Input as FlowInput } from 'flowbite-vue'
import { RouterLink, RouterView } from 'vue-router'
import TheButtonjyjVue from '../../../components/TheButtonjyj.vue'

export default defineComponent({
  components: { FlowInput, TheButtonjyjVue, RouterLink, RouterView },
  setup() {
    const showPassword = ref(false);
    const passwordInput = ref('');

    return { showPassword, passwordInput };
  },
});
</script>