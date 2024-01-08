<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import TheButtonjyj from "../../../components/TheButtonjyj.vue";
import { Input as FlowInput, Textarea as FlowTexarea } from "flowbite-vue";
import { useMutationSales } from "./useMutationSales";

import Multiselect from "@vueform/multiselect";
import { useSaleStore } from "./store/saleStore";
import { useQueryRoomData } from "../../../composable/roomComposable";
import { useQueryRestroomData } from "../../../composable/restroomComposable";
import { useQueryStratumData } from "../../../composable/stratumComposable";
import { useQueryPropertyData } from "../../../composable/propertyComposable";
import { useQueryAntiquityData } from "../../../composable/antiquityComposable";

export default defineComponent({
  components: { TheButtonjyj, FlowInput, FlowTexarea, Multiselect },
  setup() {
    const storeSale = useSaleStore();

    const { mutate } = useMutationSales();

    const register = ref("5456456456");
    const ofert = ref("");
    const neigborhood = ref("");
    const property = ref("");
    const stratum = ref("");
    const breed = ref("");
    const price = ref("");
    const room = ref("");
    const restroom = ref("");
    const age = ref("");
    const administration = ref("");
    const area = ref("");
    const description = ref("");
    const filename = ref([]);

    const handleSubmit = async () => {
      try {
        const formData = {
          register: register.value,
          ofert: ofert.value,
          neigborhood: neigborhood.value,
          property: property.value,
          stratum: stratum.value,
          breed: breed.value,
          price: price.value,
          room: room.value,
          restroom: restroom.value,
          age: age.value,
          administration: administration.value,
          area: area.value,
          description: description.value,
          filename: allimg.value,
        };

        console.log(formData);

        await mutate(formData);
      } catch (error) {
        console.error("Error al enviar el formulario", error);
      }
    };

    const selectedImgIndex = ref(0);

    const allimg = ref<File[]>([]);
    console.log("allimg", allimg.value);
    const addimg = (event: Event) => {
      const input = event.target as HTMLInputElement;
      const files = input.files;

      if (files && files.length > 0) {
        if (allimg.value.length + files.length > 10) {
          alert("No se pueden agregar más de 10 archivos.");
          return;
        }
        for (let i = 0; i < files.length; i++) {
          allimg.value.push(files[i]);
        }
      }
      selectedImgIndex.value = allimg.value.length - 1;
    };

    const getImgPreview = (file: File): string => {
      return URL.createObjectURL(file);
    };

    const removeImg = (index) => {
      allimg.value.splice(index, 1);
    };

    const selectImg = (index) => {
      selectedImgIndex.value = index;
    };

    const { data: roomData, isLoading: roomLoading } = useQueryRoomData();
    const { data: restromData, isLoading: restroomLoading } = useQueryRestroomData();
    const { data: stratumData, isLoading: stratumLoading } = useQueryStratumData();
    const { data: propertyData, isLoading: propertyLoading } = useQueryPropertyData();
    const { data: antiquiyData, isLoading: antiquityLoading } = useQueryAntiquityData();

    return {
      allimg,
      handleSubmit,
      addimg,
      getImgPreview,
      selectImg,
      removeImg,
      selectedImgIndex,
      register,
      ofert,
      neigborhood,
      property,
      stratum,
      breed,
      price,
      room,
      restroom,
      age,
      administration,
      area,
      description,
      filename,
      storeSale,
      roomData,
      roomLoading,
      restromData,
      restroomLoading,
      stratumData,
      stratumLoading,
      propertyLoading,
      propertyData,
      antiquiyData,
      antiquityLoading,
    };
  },
});
</script>
<template>
  <section class="flex justify-center">
    <form class="block w-[80%] h-[80%]" @submit.prevent="handleSubmit">
      <div class="block gap-6 p-8 w-full">
        <p class="text-[30px] underline underline-offset-8 font-bold">
          Publica tu Inmueble
        </p>
        <section class="block lg:flex w-full">
          <div class="block w-full lg:w-[30%] mt-10 pt-4">
            <Multiselect placeholder="Tipo de oferta" class="h-[68px] rounded-md" />
            <div class="mt-2">
              <div v-if="propertyLoading" class="loading-indicator">
                Cargando datos...
              </div>

              <Multiselect
                id="property"
                v-model="property"
                :options="
                  propertyData?.data.map((property) => ({
                    value: property.name,
                    label: property.id,
                  }))
                "
                class="h-[68px] rounded-md"
                placeholder="Tipo de inmueble"
              />
            </div>
            <div class="mt-2">
              <div v-if="roomLoading" class="loading-indicator">Cargando datos...</div>

              <Multiselect
                id="room"
                v-model="room"
                :options="
                  roomData?.data.map((room) => ({ value: room.name, label: room.id }))
                "
                class="h-[68px] rounded-md"
                placeholder="Número de baños"
              />
            </div>
            <div class="mt-2">
              <div v-if="restroomLoading" class="loading-indicator">
                Cargando datos...
              </div>

              <Multiselect
                id="restroom"
                v-model="restroom"
                :options="
                  restromData?.data.map((restroom) => ({
                    value: restroom.name,
                    label: restroom.id,
                  }))
                "
                class="h-[68px] rounded-md"
                placeholder="Número de habitaciones"
              />
            </div>
            <div class="mt-2">
              <div v-if="stratumLoading" class="loading-indicator">Cargando datos...</div>

              <Multiselect
                id="stratum"
                v-model="stratum"
                :options="
                  stratumData?.data.map((stratum) => ({
                    value: stratum.name,
                    label: stratum.id,
                  }))
                "
                class="h-[68px] rounded-md"
                placeholder="Estrato"
              />
            </div>
            <div class="mt-2">
              <div v-if="antiquityLoading" class="loading-indicator">
                Cargando datos...
              </div>

              <Multiselect
                id="age"
                v-model="age"
                :options="
                  antiquiyData?.data.map((age) => ({
                    value: age.name,
                    label: age.id,
                  }))
                "
                class="h-[68px] rounded-md"
                placeholder="Antiguedad del inmueble"
              />
            </div>
          </div>
          <div class="block w-full lg:w-[40%] mt-16 ml-4">
            <div class="mt-2 border-gray-600">
              <section class="block w-full mt-16">
                <div class="mt-2 border-gray-600 w-full">
                  <section class="block w-full mt-16">
                    <div class="mt-2 border-gray-600 w-full">
                      <section id="multi-selector-uniq" class="mb-4 w-full">
                        <input
                          id="files"
                          type="file"
                          multiple
                          @change="addimg"
                          class="mb-4"
                        />
                        <div
                          id="preview"
                          class="flex w-full h-[100%] gap-2 border border-gray-400"
                        >
                          <div
                            v-for="(file, index) in allimg"
                            :key="file.name"
                            class="relative"
                          >
                            <img
                              :src="getImgPreview(file)"
                              alt="Vista Previa de la Imagen"
                              :class="{ 'selected-img': index === selectedImgIndex }"
                              class="flex w-full h-60 object-cover rounded cursor-pointer"
                              @click="selectImg(index)"
                            />
                            <button
                              @click="removeImg(index)"
                              class="absolute top-0 right-0 text-black bg-white p-1 rounded-full cursor-pointer font-bold"
                            >
                              X
                            </button>
                          </div>
                        </div>
                      </section>
                    </div>
                  </section>
                </div>
              </section>
            </div>
          </div>
          <div class="block w-full lg:w-[30%] ml-4">
            <FlowInput
              id="price"
              v-model="price"
              class="w-full h-[68px] mt-2 rounded-md"
              placeholder="Precio"
            />
            <FlowInput
              id="administration"
              v-model="administration"
              class="w-full h-[68px] mt-2 rounded-md"
              placeholder="valor administración"
            />
            <FlowInput
              id="area"
              v-model="area"
              class="w-full h-[68px] mt-2 rounded-md"
              placeholder="Área construída"
            />
            <div class="mt-4">
              <FlowTexarea
                v-model="description"
                class="w-full h-[280px] rounded-md resize-none"
                placeholder="Descripción del inmueble"
                label=""
              />
            </div>
          </div>
        </section>
      </div>
      <div class="flex justify-center lg:justify-end">
        <TheButtonjyj texto="Publica" type="submit" />
      </div>
    </form>
  </section>
</template>

<style src="@vueform/multiselect/themes/default.css">
.multiselect {
  border-radius: 20px !important;
}

.selected-img {
  transform: scale(1.8); /* O el factor de escala que prefieras */
  border: 2px solid #00f; /* O el color de borde que prefieras */
}
</style>
