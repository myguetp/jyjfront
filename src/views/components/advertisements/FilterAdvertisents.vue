<script lang="ts">
import { defineComponent, ref } from "vue";

import { ButtonGroup as IButton, Input as FlowInput } from "flowbite-vue";
import Modaljyj from "../../../components/Modaljyj.vue";
import TheButtonjyj from "../../../components/TheButtonjyj.vue";
export default defineComponent({
  components: { IButton, Modaljyj, FlowInput, TheButtonjyj },
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
  <section class="flex items-center justify-center w-full">
    <div>
      <section class="flex gap-10">
        <input class="bg-gray-300 w-96 p-4" placeholder="Ubicación del inmueble" />
        <TheButtonjyj texto="Filtro" :tamanio="'md'" @click="openModal" />
      </section>
      <section class="flex gap-10 mt-4">
        <TheButtonjyj class="bg-gray-300" texto="Fontanero" :tamanio="'sm'" />
        <TheButtonjyj class="bg-gray-300" texto="Electricista" :tamanio="'sm'" />
        <TheButtonjyj class="bg-gray-300" texto="Carpintero" :tamanio="'sm'" />
        <TheButtonjyj class="bg-gray-300" texto="Pintor" :tamanio="'sm'" />
        <TheButtonjyj class="bg-gray-300" texto="Albañil" :tamanio="'sm'" />
        <TheButtonjyj class="bg-gray-300" texto="Ventilación" :tamanio="'sm'" />
        <TheButtonjyj class="bg-gray-300" texto="Jardines" :tamanio="'sm'" />
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
          <IButton class="bg-gray-300 w-16 items-center justify-center flex p-2"
            >Todos</IButton
          >
          <IButton class="bg-gray-300 w-6 items-center justify-center flex p-2"
            >1</IButton
          >
          <IButton class="bg-gray-300 w-6 items-center justify-center flex p-2"
            >2</IButton
          >
          <IButton class="bg-gray-300 w-6 items-center justify-center flex p-2"
            >3</IButton
          >
          <IButton class="bg-gray-300 w-6 items-center justify-center flex p-2"
            >4</IButton
          >
          <IButton class="bg-gray-300 w-6 items-center justify-center flex p-2"
            >5</IButton
          >
          <IButton class="bg-gray-300 w-6 items-center justify-center flex p-2"
            >6</IButton
          >
        </div>
      </section>
      <section class="mt-4">
        <h3 class="font-bold">Antiguedad del inmueble</h3>
        <div class="gap-4 flex items-center mt-2">
          <p>Años</p>
          <IButton class="bg-gray-300 w-36 h-10 items-center justify-center flex p-2"
            >- de 1
          </IButton>
          <IButton class="bg-gray-300 w-36 h-10 items-center justify-center flex p-2"
            >1 a 5
          </IButton>
          <IButton class="bg-gray-300 w-36 h-10 items-center justify-center flex p-2"
            >6 a 10
          </IButton>
          <IButton class="bg-gray-300 w-36 h-10 items-center justify-center flex p-2"
            >11 a 17
          </IButton>
          <IButton class="bg-gray-300 w-36 h-10 items-center justify-center flex p-2"
            >18 a 25
          </IButton>
          <IButton class="bg-gray-300 w-36 h-10 items-center justify-center flex p-2"
            >+ de 25
          </IButton>
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
          <IButton class="bg-gray-300 w-36 h-10 items-center justify-center flex p-2"
            >Todos
          </IButton>
          <IButton class="bg-gray-300 w-36 h-10 items-center justify-center flex p-2"
            >1
          </IButton>
          <IButton class="bg-gray-300 w-36 h-10 items-center justify-center flex p-2"
            >2
          </IButton>
          <IButton class="bg-gray-300 w-36 h-10 items-center justify-center flex p-2"
            >3
          </IButton>
          <IButton class="bg-gray-300 w-36 h-10 items-center justify-center flex p-2"
            >4
          </IButton>
          <IButton class="bg-gray-300 w-36 h-10 items-center justify-center flex p-2"
            >5
          </IButton>
        </div>
        <div class="gap-4 flex items-center mt-2">
          <p>Baños</p>
          <IButton class="bg-gray-300 w-36 h-10 items-center justify-center flex p-2"
            >Todos
          </IButton>
          <IButton class="bg-gray-300 w-36 h-10 items-center justify-center flex p-2"
            >1
          </IButton>
          <IButton class="bg-gray-300 w-36 h-10 items-center justify-center flex p-2"
            >2
          </IButton>
          <IButton class="bg-gray-300 w-36 h-10 items-center justify-center flex p-2"
            >3
          </IButton>
          <IButton class="bg-gray-300 w-36 h-10 items-center justify-center flex p-2"
            >4
          </IButton>
          <IButton class="bg-gray-300 w-36 h-10 items-center justify-center flex p-2"
            >5
          </IButton>
        </div>
      </section>
      <IButton class="bg-gray-300 w-36 mt-6 flex items-center justify-center"
        >Apllicar filtros</IButton
      >
    </Modaljyj>
  </section>
</template>
