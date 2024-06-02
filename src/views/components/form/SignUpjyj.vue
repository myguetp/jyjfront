<script lang="ts">
import { defineComponent, ref } from "vue";
import { Input as FlowInput } from "flowbite-vue";
import { RouterView } from "vue-router";

import TheButtonjyjVue from "../../../components/TheButtonjyj.vue";
import { useMutationSignup } from "./signUpMutation";

export default defineComponent({
  components: { FlowInput, TheButtonjyjVue, RouterView },
  setup() {
    const showPassword = ref(false);
  
    let name = ref("");
    let lastName = ref("");
    let city = ref("");
    let phone = ref("");
    let email = ref("");
    let password = ref("");
    let termsConditions = ref(false);

    const { mutate } = useMutationSignup();
    const handleRegistration = async () => {
      await mutate({
        name: name.value,
        lastName: lastName.value,
        city: city.value,
        phone: phone.value,
        email: email.value,
        termsConditions: termsConditions.value,
        password: password.value,
      });
    };

    return {
      showPassword,
      password,
      name,
      lastName,
      city,
      phone,
      email,
      handleRegistration,
      termsConditions
    };
  },
});
</script>

<template>
  <section class="block">
    <div class="flex w-full h-full items-center justify-center gap-4">
      <div class="hidden lg:block">
        <img src="@/assets/img/firstImage.jpg" alt="" class="w-[900px] h-[750px]" />
      </div>
      <form class="w-[500px]">
        <h2 class="font-bold text-[43px]">Crea tu cuenta</h2>

        <FlowInput
          class="w-full h-[68px] mt-2 rounded-md"
          placeholder="Nombres"
          v-model="name"
        />
        <FlowInput
          class="w-full h-[68px] mt-2 rounded-md"
          placeholder="Apellidos"
          v-model="lastName"
        />
        <FlowInput
          class="w-full h-[68px] mt-2 rounded-md"
          placeholder="Correo electrónico"
          v-model="email"
        />
        <FlowInput
          class="w-full h-[68px] mt-2 rounded-md"
          placeholder="Teléfono"
          v-model="phone"
        />
        <FlowInput
          class="w-full h-[68px] mt-2 rounded-md"
          placeholder="Cuidad"
          v-model="city"
        />

        <div class="relative">
          <FlowInput
            v-if="!showPassword"
            class="w-full h-[68px] mt-2 rounded-md"
            type="password"
            v-model="password"
            placeholder="Contraseña"
          />
          <FlowInput
            v-else
            class="w-full h-[68px] mt-2 rounded-md"
            v-model="password"
            placeholder="Contraseña"
          />

          <div class="flex items-center mt-4">
          <input type="checkbox" id="termsConditions" v-model="termsConditions" />
          <label for="termsConditions" class="ml-2">Acepto los términos y condiciones</label>
        </div>

          <button
            @click="showPassword = !showPassword"
            class="absolute top-1/2 right-4 transform -translate-y-1/2 focus:outline-none"
          >
            {{ showPassword ? "Ocultar" : "Ver" }}
          </button>
        </div>

        <div class="flex gap-4 mt-6 w-full items-center justify-center">
          <RouterView>
            <!-- <RouterLink to="/Select"> -->
              <TheButtonjyjVue
                class="text-white"
                texto="Registrarse"
                @click="handleRegistration"
              />
            <!-- </RouterLink> -->
          </RouterView>
        </div>
      </form>
    </div>
  </section>
</template>
