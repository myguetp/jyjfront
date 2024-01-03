<script lang="ts">
import { defineComponent, ref } from "vue";

import { ButtonGroup as IButton, Input as FlowInput } from "flowbite-vue";
import Modaljyj from "../../../components/Modaljyj.vue";
import TheButtonjyj from "../../../components/TheButtonjyj.vue";

export default defineComponent({
  components: { Modaljyj, FlowInput, TheButtonjyj },
  setup() {
    const modalOpen = ref(false);
    const openModal = () => {
      modalOpen.value = true;
    };
    return { IButton, openModal, modalOpen };
  },
});
</script>

<template>
  <section class="flex items-center justify-center bg-red-600">
    <div class="p-4">
      <section>
        <input class="bg-gray-300 p-4 w-full" placeholder="Ubicación del inmueble" />
      </section>
      <TheButtonjyj class="mt-4" texto="Filtro" :tamanio="'sm'" @click="openModal" />
      <section class="block gap-10 p-4">
        <TheButtonjyj class="bg-gray-300" texto="Apartamento" :tamanio="'sm'" />
        <TheButtonjyj class="bg-gray-300" texto="Casa" :tamanio="'sm'" />
        <TheButtonjyj class="bg-gray-300" texto="Finca" :tamanio="'sm'" />
        <TheButtonjyj class="bg-gray-300" texto="Local" :tamanio="'sm'" />
        <TheButtonjyj class="bg-gray-300" texto="Oficina" :tamanio="'sm'" />
        <TheButtonjyj class="bg-gray-300" texto="Bodega" :tamanio="'sm'" />
        <TheButtonjyj class="bg-gray-300" texto="Lote" :tamanio="'sm'" />
        <TheButtonjyj class="bg-gray-300" texto="Habitación" :tamanio="'sm'" />
        <TheButtonjyj class="bg-gray-300" texto="Apartaestudio" :tamanio="'sm'" />
        <TheButtonjyj class="bg-gray-300" texto="Edificio" :tamanio="'sm'" />
      </section>
    </div>
    <Modaljyj :isOpen="modalOpen" @update:is-open="modalOpen = $event" titulo="Filtros">
      <hr />
      <section class="mt-4">
        <h3 class="font-bold">Precio</h3>
        <div class="flex gap-6 justify-center">
          <FlowInput
            id="price"
            class="w-full h-[68px] mt-2 rounded-md"
            placeholder="Desde"
          />
          <FlowInput
            id="price"
            class="w-full h-[68px] mt-2 rounded-md"
            placeholder="Hasta"
          />
        </div>
      </section>
      <section class="mt-4">
        <h3 class="font-bold">Estrato</h3>
        <div class="flex gap-4 mt-2">
          <TheButtonjyj class="bg-gray-300" texto="Todos" :tamanio="'sm'" />
          <TheButtonjyj class="bg-gray-300" texto="1" :tamanio="'sm'" />
          <TheButtonjyj class="bg-gray-300" texto="2" :tamanio="'sm'" />
          <TheButtonjyj class="bg-gray-300" texto="3" :tamanio="'sm'" />
          <TheButtonjyj class="bg-gray-300" texto="4" :tamanio="'sm'" />
          <TheButtonjyj class="bg-gray-300" texto="5" :tamanio="'sm'" />
          <TheButtonjyj class="bg-gray-300" texto="6" :tamanio="'sm'" />
        </div>
      </section>
      <section class="mt-4">
        <h3 class="font-bold">Antiguedad del inmueble</h3>
        <div class="gap-4 flex items-center mt-2">
          <p>Años</p>
          <TheButtonjyj class="bg-gray-300" texto="- de 1" :tamanio="'sm'" />
          <TheButtonjyj class="bg-gray-300" texto="1 a 5" :tamanio="'sm'" />
          <TheButtonjyj class="bg-gray-300" texto="6 a 10" :tamanio="'sm'" />
          <TheButtonjyj class="bg-gray-300" texto="11 a 17" :tamanio="'sm'" />
          <TheButtonjyj class="bg-gray-300" texto="18 a 25" :tamanio="'sm'" />
          <TheButtonjyj class="bg-gray-300" texto="+ de 25" :tamanio="'sm'" />
        </div>
      </section>
      <section class="mt-4">
        <h3 class="font-bold">Area</h3>
        <div class="flex gap-6 justify-center">
          <FlowInput
            id="price"
            class="w-full h-[68px] mt-2 rounded-md"
            placeholder="Desde"
          />
          <FlowInput
            id="price"
            class="w-full h-[68px] mt-2 rounded-md"
            placeholder="Hasta"
          />
        </div>
      </section>
      <section class="mt-4">
        <h3 class="font-bold">Espacios</h3>
        <div class="gap-4 flex items-center mt-2">
          <p>Habitaciones</p>
          <TheButtonjyj class="bg-gray-300" texto="Todos" :tamanio="'sm'" />
          <TheButtonjyj class="bg-gray-300" texto="1" :tamanio="'sm'" />
          <TheButtonjyj class="bg-gray-300" texto="2" :tamanio="'sm'" />
          <TheButtonjyj class="bg-gray-300" texto="3" :tamanio="'sm'" />
          <TheButtonjyj class="bg-gray-300" texto="4" :tamanio="'sm'" />
          <TheButtonjyj class="bg-gray-300" texto="5" :tamanio="'sm'" />
        </div>
        <div class="gap-4 flex items-center mt-2">
          <p>Baños</p>
          <TheButtonjyj class="bg-gray-300" texto="Todos" :tamanio="'sm'" />
          <TheButtonjyj class="bg-gray-300" texto="1" :tamanio="'sm'" />
          <TheButtonjyj class="bg-gray-300" texto="2" :tamanio="'sm'" />
          <TheButtonjyj class="bg-gray-300" texto="3" :tamanio="'sm'" />
          <TheButtonjyj class="bg-gray-300" texto="4" :tamanio="'sm'" />
          <TheButtonjyj class="bg-gray-300" texto="5" :tamanio="'sm'" />
        </div>
      </section>
      <TheButtonjyj
        class="bg-gray-300 mt-4"
        texto="Apllicar filtros"
        :tamanio="'md'"
        @click="openModal"
      />
    </Modaljyj>
  </section>
</template>
