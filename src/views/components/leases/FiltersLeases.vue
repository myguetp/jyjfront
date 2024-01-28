<script lang="ts">
import { defineComponent, ref } from "vue";

import { ButtonGroup as IButton, Input as FlowInput } from "flowbite-vue";
import TheButtonjyj from "../../../components/TheButtonjyj.vue";
import { useQueryRoomData } from "../../../composable/leases/roomComposable";
import { useQueryRestroomData } from "../../../composable/leases/restroomComposable";
import { useQueryStratumData } from "../../../composable/leases/stratumComposable";
import { useQueryPropertyData } from "../../../composable/leases/propertyComposable";
import { useQueryAntiquityData } from "../../../composable/leases/antiquityComposable";
import { useQueryParkingData } from "../../../composable/leases/parkingComposable";

export default defineComponent({
  components: { FlowInput, TheButtonjyj },
  setup() {
    const price = ref(false);
    const stratum = ref(false);
    const antiquity = ref(false);
    const area = ref(false);
    const space = ref(false);
    const property = ref(false);
    const parking = ref(false);
    const showFilter = ref(false);

    const onOpen = () => {
      showFilter.value = !showFilter.value;
    };

    const onClickPrice = () => {
      price.value = !price.value;
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

    const onClickProperty = () => {
      property.value = !property.value;
    };

    const onClickParking = () => {
      parking.value = !parking.value;
    };

    const { data: roomData, isLoading: roomLoading } = useQueryRoomData();
    const { data: restromData, isLoading: restroomLoading } = useQueryRestroomData();
    const { data: stratumData, isLoading: stratumLoading } = useQueryStratumData();
    const { data: propertyData, isLoading: propertyLoading } = useQueryPropertyData();
    const { data: antiquiyData, isLoading: antiquityLoading } = useQueryAntiquityData();
    const { data: parkingData, isLoading: parkingLoading } = useQueryParkingData();

    return {
      IButton,
      onClickPrice,
      onClickStratum,
      onClickAntiquity,
      onClickArea,
      onClickSpace,
      onClickProperty,
      onClickParking,
      onOpen,
      parking,
      price,
      stratum,
      antiquity,
      area,
      space,
      property,
      roomData,
      restromData,
      roomLoading,
      restroomLoading,
      propertyLoading,
      stratumData,
      stratumLoading,
      propertyData,
      antiquiyData,
      antiquityLoading,
      parkingData,
      parkingLoading,
      showFilter,
    };
  },
});
</script>

<template>
  <div class="p-4 fixed z-50 block md:hidden lg:hidden">
    <TheButtonjyj class="text-white" texto="filtro" :tamanio="'sm'" @click="onOpen" />
    <section v-if="showFilter" class="z-50 mt-10">
      <section
        class="block items-center justify-center rounded-md shadow snap-y overflow-auto fixed w-auto h-[350px] bg-gray-200"
      >
        <div class="p-8 m-8 bg-gray-500 border-8 border-white-500 box-shadow">
          <section>
            <input
              class="bg-gray-300 rounded-md p-4 w-full"
              placeholder="Ubicación del inmueble"
            />
          </section>
          <div
            class="w-full bg-gray-300 p-2 cursor-pointer rounded-md mt-4"
            @click="onClickProperty"
          >
            <h3 class="font-bold">Propiedad</h3>
          </div>
          <section v-if="property" class="block gap-10 p-2">
            <div v-if="propertyLoading" class="loading-indicator">Cargando datos...</div>
            <TheButtonjyj
              v-for="propiedad in propertyData.data"
              :key="propiedad.id"
              class="bg-gray-300 ml-2 mt-2"
              :texto="propiedad.name"
              :tamanio="'sm'"
            />
          </section>

          <div
            class="w-full bg-gray-300 p-2 cursor-pointer rounded-md mt-4"
            @click="onClickPrice"
          >
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
            <div v-if="stratumLoading" class="loading-indicator">Cargando datos...</div>
            <div class="block gap-4 mt-2">
              <TheButtonjyj
                v-for="estrato in stratumData.data"
                :key="estrato.id"
                class="bg-gray-300 ml-2 mt-2 hover:bg-gray-600 hover:text-white"
                :texto="estrato.name"
                :tamanio="'sm'"
              />
            </div>
          </section>

          <div
            class="w-full bg-gray-300 p-2 cursor-pointer mt-4 rounded-md"
            @click="onClickParking"
          >
            <h3 class="font-bold">Parqueadero</h3>
          </div>
          <section v-if="parking" class="mt-4">
            <div v-if="parkingLoading" class="loading-indicator">Cargando datos...</div>
            <div class="block gap-4 mt-2">
              <TheButtonjyj
                v-for="parqueadero in parkingData.data"
                :key="parqueadero.id"
                class="bg-gray-300 ml-2 mt-2 hover:bg-gray-600 hover:text-white"
                :texto="parqueadero.name"
                :tamanio="'sm'"
              />
            </div>
          </section>

          <div
            class="w-full bg-gray-300 p-2 cursor-pointer mt-4 rounded-md"
            @click="onClickAntiquity"
          >
            <h3 class="font-bold">Antiguedad del inmueble</h3>
          </div>
          <section v-if="antiquity" class="mt-4">
            <div v-if="antiquityLoading" class="loading-indicator">Cargando datos...</div>

            <div class="gap-4 block items-center mt-2">
              <p>Años</p>
              <TheButtonjyj
                v-for="antiguedad in antiquiyData.data"
                :key="antiguedad.id"
                class="bg-gray-300 ml-2 mt-2"
                :texto="antiguedad.name"
                :tamanio="'sm'"
              />
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
            <div v-if="roomLoading" class="loading-indicator">Cargando datos...</div>
            <div class="gap-4 block items-center mt-2">
              <p>Habitaciones</p>
              <TheButtonjyj
                v-for="habitacion in roomData.data"
                :key="habitacion.id"
                class="bg-gray-300 ml-2 mt-2"
                :texto="habitacion.name"
                :tamanio="'sm'"
              />
            </div>
            <div v-if="restroomLoading" class="loading-indicator">Cargando datos...</div>
            <div class="gap-4 block items-center mt-2">
              <p>Baños</p>
              <TheButtonjyj
                v-for="baños in restromData.data"
                :key="baños.id"
                class="bg-gray-300 ml-2 mt-2"
                :texto="baños.name"
                :tamanio="'sm'"
              />
            </div>
          </section>

          <TheButtonjyj class="m-4 text-white" texto="Filtrar" :tamanio="'md'" />
        </div>
      </section>
    </section>
  </div>
  <section
    class="hidden md:block lg:block items-center justify-center rounded-md shadow snap-y overflow-auto fixed w-[340px] h-[550px]"
  >
    <div class="p-4">
      <section>
        <input
          class="bg-gray-300 rounded-md p-4 w-full"
          placeholder="Ubicación del inmueble"
        />
      </section>
      <div
        class="w-full bg-gray-300 p-2 cursor-pointer rounded-md mt-4"
        @click="onClickProperty"
      >
        <h3 class="font-bold">Propiedad</h3>
      </div>
      <section v-if="property" class="block gap-10 p-2">
        <div v-if="propertyLoading" class="loading-indicator">Cargando datos...</div>
        <TheButtonjyj
          v-for="propiedad in propertyData.data"
          :key="propiedad.id"
          class="bg-gray-300 ml-2 mt-2"
          :texto="propiedad.name"
          :tamanio="'sm'"
        />
      </section>

      <div
        class="w-full bg-gray-300 p-2 cursor-pointer rounded-md mt-4"
        @click="onClickPrice"
      >
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
        <div v-if="stratumLoading" class="loading-indicator">Cargando datos...</div>
        <div class="block gap-4 mt-2">
          <TheButtonjyj
            v-for="estrato in stratumData.data"
            :key="estrato.id"
            class="bg-gray-300 ml-2 mt-2 hover:bg-gray-600 hover:text-white"
            :texto="estrato.name"
            :tamanio="'sm'"
          />
        </div>
      </section>

      <div
        class="w-full bg-gray-300 p-2 cursor-pointer mt-4 rounded-md"
        @click="onClickParking"
      >
        <h3 class="font-bold">Parqueadero</h3>
      </div>
      <section v-if="parking" class="mt-4">
        <div v-if="parkingLoading" class="loading-indicator">Cargando datos...</div>
        <div class="block gap-4 mt-2">
          <TheButtonjyj
            v-for="parqueadero in parkingData.data"
            :key="parqueadero.id"
            class="bg-gray-300 ml-2 mt-2 hover:bg-gray-600 hover:text-white"
            :texto="parqueadero.name"
            :tamanio="'sm'"
          />
        </div>
      </section>

      <div
        class="w-full bg-gray-300 p-2 cursor-pointer mt-4 rounded-md"
        @click="onClickAntiquity"
      >
        <h3 class="font-bold">Antiguedad del inmueble</h3>
      </div>
      <section v-if="antiquity" class="mt-4">
        <div v-if="antiquityLoading" class="loading-indicator">Cargando datos...</div>

        <div class="gap-4 block items-center mt-2">
          <p>Años</p>
          <TheButtonjyj
            v-for="antiguedad in antiquiyData.data"
            :key="antiguedad.id"
            class="bg-gray-300 ml-2 mt-2"
            :texto="antiguedad.name"
            :tamanio="'sm'"
          />
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
        <div v-if="roomLoading" class="loading-indicator">Cargando datos...</div>
        <div class="gap-4 block items-center mt-2">
          <p>Habitaciones</p>
          <TheButtonjyj
            v-for="habitacion in roomData.data"
            :key="habitacion.id"
            class="bg-gray-300 ml-2 mt-2"
            :texto="habitacion.name"
            :tamanio="'sm'"
          />
        </div>
        <div v-if="restroomLoading" class="loading-indicator">Cargando datos...</div>
        <div class="gap-4 block items-center mt-2">
          <p>Baños</p>
          <TheButtonjyj
            v-for="baños in restromData.data"
            :key="baños.id"
            class="bg-gray-300 ml-2 mt-2"
            :texto="baños.name"
            :tamanio="'sm'"
          />
        </div>
      </section>

      <TheButtonjyj class="m-4 text-white" texto="Filtrar" :tamanio="'md'" />
    </div>
  </section>
</template>
<style scoped>
.overflow-auto::-webkit-scrollbar {
  width: 1px;
}

.overflow-auto::-webkit-scrollbar-thumb {
  background-color: #888;
}

.overflow-auto::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}

/* Puedes agregar estilos adicionales según tus preferencias */
</style>
