<script lang="ts">
import { defineComponent, ref } from "vue";

import { ButtonGroup as IButton, Input as FlowInput } from "flowbite-vue";
import TheButtonjyj from "../../../components/TheButtonjyj.vue";

export default defineComponent({
  components: { FlowInput, TheButtonjyj },
  setup() {
    const price = ref(false);
    const stratum = ref(false);
    const antiquity = ref(false);
    const area = ref(false);
    const space = ref(false);

    const onClickPrice = () => {
      price.value = !price.value;
      stratum.value = !stratum.value;
    };

    const onClickStratum = () => {
      stratum.value = !stratum.value;
    };

    const onClickAntiquity = () => {
      antiquity.value = !antiquity.value;
    };

    const onClickArea = () => {
      area.value = !area.value;
    };

    const onClickSpace = () => {
      space.value = !space.value;
    };

    return {
      IButton,
      onClickPrice,
      onClickStratum,
      onClickAntiquity,
      onClickArea,
      onClickSpace,
      price,
      stratum,
      antiquity,
      area,
      space,
    };
  },
});
</script>

<template>
  <section
    class="block items-center justify-center rounded-md shadow snap-y overflow-auto fixed w-[320px]"
  >
    <div class="p-4">
      <section>
        <input class="bg-gray-300 p-4 w-full" placeholder="Ubicación del inmueble" />
      </section>
      <TheButtonjyj class="mt-4" texto="Filtro" :tamanio="'sm'" />
      <section class="block gap-10 p-4">
        <TheButtonjyj class="bg-gray-300 ml-2 mt-2" texto="Apartamento" :tamanio="'sm'" />
        <TheButtonjyj class="bg-gray-300 ml-2 mt-2" texto="Casa" :tamanio="'sm'" />
        <TheButtonjyj class="bg-gray-300 ml-2 mt-2" texto="Finca" :tamanio="'sm'" />
        <TheButtonjyj class="bg-gray-300 ml-2 mt-2" texto="Local" :tamanio="'sm'" />
        <TheButtonjyj class="bg-gray-300 ml-2 mt-2" texto="Oficina" :tamanio="'sm'" />
        <TheButtonjyj class="bg-gray-300 ml-2 mt-2" texto="Bodega" :tamanio="'sm'" />
        <TheButtonjyj class="bg-gray-300 ml-2 mt-2" texto="Lote" :tamanio="'sm'" />
        <TheButtonjyj class="bg-gray-300 ml-2 mt-2" texto="Habitación" :tamanio="'sm'" />
        <TheButtonjyj
          class="bg-gray-300 ml-2 mt-2"
          texto="Apartaestudio"
          :tamanio="'sm'"
        />
        <TheButtonjyj class="bg-gray-300 ml-2 mt-2" texto="Edificio" :tamanio="'sm'" />
      </section>
      <div class="w-full bg-gray-300 p-2 cursor-pointer rounded-md" @click="onClickPrice">
        <h3 class="font-bold">Precio</h3>
      </div>

      <section v-if="price" class="mt-4">
        <div class="block gap-6 justify-center">
          <FlowInput
            id="price"
            class="w-full h-[40px] mt-2 rounded-md"
            placeholder="Desde"
          />
          <FlowInput
            id="price"
            class="w-full h-[40px] mt-2 rounded-md"
            placeholder="Hasta"
          />
        </div>
      </section>

      <div
        class="w-full bg-gray-300 p-2 cursor-pointer mt-4 rounded-md"
        @click="onClickStratum"
      >
        <h3 class="font-bold">Estrato</h3>
      </div>

      <section v-if="stratum" class="mt-4">
        <div class="block gap-4 mt-2">
          <TheButtonjyj class="bg-gray-300 ml-2 mt-2" texto="Todos" :tamanio="'sm'" />
          <TheButtonjyj class="bg-gray-300 ml-2 mt-2" texto="1" :tamanio="'sm'" />
          <TheButtonjyj class="bg-gray-300 ml-2 mt-2" texto="2" :tamanio="'sm'" />
          <TheButtonjyj class="bg-gray-300 ml-2 mt-2" texto="3" :tamanio="'sm'" />
          <TheButtonjyj class="bg-gray-300 ml-2 mt-2" texto="4" :tamanio="'sm'" />
          <TheButtonjyj class="bg-gray-300 ml-2 mt-2" texto="5" :tamanio="'sm'" />
          <TheButtonjyj class="bg-gray-300 ml-2 mt-2" texto="6" :tamanio="'sm'" />
        </div>
      </section>

      <div
        class="w-full bg-gray-300 p-2 cursor-pointer mt-4 rounded-md"
        @click="onClickAntiquity"
      >
        <h3 class="font-bold">Antiguedad del inmueble</h3>
      </div>

      <section v-if="antiquity" class="mt-4">
        <div class="gap-4 block items-center mt-2">
          <p>Años</p>
          <TheButtonjyj class="bg-gray-300 ml-2 mt-2" texto="- de 1" :tamanio="'sm'" />
          <TheButtonjyj class="bg-gray-300 ml-2 mt-2" texto="1 a 5" :tamanio="'sm'" />
          <TheButtonjyj class="bg-gray-300 ml-2 mt-2" texto="6 a 10" :tamanio="'sm'" />
          <TheButtonjyj class="bg-gray-300 ml-2 mt-2" texto="11 a 17" :tamanio="'sm'" />
          <TheButtonjyj class="bg-gray-300 ml-2 mt-2" texto="18 a 25" :tamanio="'sm'" />
          <TheButtonjyj class="bg-gray-300 ml-2 mt-2" texto="+ de 25" :tamanio="'sm'" />
        </div>
      </section>

      <div
        class="w-full bg-gray-300 p-2 cursor-pointer mt-4 rounded-md"
        @click="onClickArea"
      >
        <h3 class="font-bold">Area</h3>
      </div>

      <section v-if="area" class="mt-4">
        <div class="block gap-6 justify-center">
          <FlowInput
            id="price"
            class="w-full h-[40px] mt-2 rounded-md"
            placeholder="Desde"
          />
          <FlowInput
            id="price"
            class="w-full h-[40px] mt-2 rounded-md"
            placeholder="Hasta"
          />
        </div>
      </section>

      <div
        class="w-full bg-gray-300 p-2 cursor-pointer mt-4 rounded-md"
        @click="onClickSpace"
      >
        <h3 class="font-bold">Espacios</h3>
      </div>

      <section v-if="space" class="mt-4">
        <div class="gap-4 block items-center mt-2">
          <p>Habitaciones</p>
          <TheButtonjyj class="bg-gray-300 ml-2 mt-2" texto="Todos" :tamanio="'sm'" />
          <TheButtonjyj class="bg-gray-300 ml-2 mt-2" texto="1" :tamanio="'sm'" />
          <TheButtonjyj class="bg-gray-300 ml-2 mt-2" texto="2" :tamanio="'sm'" />
          <TheButtonjyj class="bg-gray-300 ml-2 mt-2" texto="3" :tamanio="'sm'" />
          <TheButtonjyj class="bg-gray-300 ml-2 mt-2" texto="4" :tamanio="'sm'" />
          <TheButtonjyj class="bg-gray-300 ml-2 mt-2" texto="5" :tamanio="'sm'" />
        </div>
        <div class="gap-4 block items-center mt-2">
          <p>Baños</p>
          <TheButtonjyj class="bg-gray-300 ml-2 mt-2" texto="Todos" :tamanio="'sm'" />
          <TheButtonjyj class="bg-gray-300 ml-2 mt-2" texto="1" :tamanio="'sm'" />
          <TheButtonjyj class="bg-gray-300 ml-2 mt-2" texto="2" :tamanio="'sm'" />
          <TheButtonjyj class="bg-gray-300 ml-2 mt-2" texto="3" :tamanio="'sm'" />
          <TheButtonjyj class="bg-gray-300 ml-2 mt-2" texto="4" :tamanio="'sm'" />
          <TheButtonjyj class="bg-gray-300 ml-2 mt-2" texto="5" :tamanio="'sm'" />
        </div>
      </section>
    </div>
    <TheButtonjyj class="m-4" texto="Filtrar" :tamanio="'md'" />
  </section>
</template>
