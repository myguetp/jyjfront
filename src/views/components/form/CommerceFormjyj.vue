<script lang="ts">
import { defineComponent, ref } from 'vue'

import Multiselect from "@vueform/multiselect";
import { Input as FlowInput, Textarea as FlowTexarea } from "flowbite-vue";
import { useQuerySpecialityData } from '@/composable/leases/specialityComposable';
import TheButtonjyj from "../../../components/TheButtonjyj.vue";


interface Picture {
  originalname: string;
  filename:     string;
  mimetype:     string;
  size:         number;
}  


export default defineComponent({
  components: { Multiselect, FlowInput, FlowTexarea, TheButtonjyj },
  setup() {
    const selectedImgIndex = ref(0);
    const allimg = ref<Picture[]>([]);

    const addimg = (event: Event) => {
  const input = event.target as HTMLInputElement;
  const files = input.files;

  if (files && files.length > 0) {
    if (allimg.value.length + files.length > 10) {
      alert("No se pueden agregar más de 10 archivos.");
      return;
    }

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = (e) => {
        const fileInfo = {
          originalname: file.name,
          filename: file.name,
          mimetype: file.type,
          size: file.size,
          dataURL: e?.target?.result, // Add the dataURL property for the preview
        };

        allimg.value.push(fileInfo);
      };

      reader.readAsDataURL(file);
    }
  }

  selectedImgIndex.value = allimg.value.length - 1;
    };

    const getImgPreview = (fileInfo) => {
      return fileInfo.dataURL;
    };

    const removeImg = (index: any) => {
      allimg.value.splice(index, 1);
    };

    const selectImg = (index: any) => {
      selectedImgIndex.value = index;
    };

    const { data: specialityData, isLoading: specialityLoading } = useQuerySpecialityData();

    return {
      specialityData,
      specialityLoading,
      selectedImgIndex,
      addimg,
      allimg,
      getImgPreview,
      removeImg,
      selectImg
    }
  },
})
</script>
<template>
   <section class="flex justify-center">
    <form class="block w-[80%] h-[80%]">
      <div class="block gap-6 p-8 w-full">
        <p class="text-[30px] underline underline-offset-8 font-bold">
          Publica tu Anuncio
        </p>
        <section class="block lg:flex w-full">
          <div class="block w-full lg:w-[30%] mt-10 pt-4">
            <div class="mt-2">
              <div v-if="specialityLoading" class="loading-indicator">Cargando datos...</div>

                <Multiselect
                  id="speciality"
                  :options="
                  specialityData?.data.map((speciality) => ({
                      value: speciality.id,
                      label: speciality.name,
                    }))
                  "
                  class="h-[68px] rounded-md"
                  placeholder="Especialidad"
                />
            </div>
          <div class="mt-2">

          <FlowInput
            placeholder="Nombre del negocio"
            class="w-full h-[68px] mt-2 rounded-md"
          />
          </div>
          <div class="mt-2">

          <FlowInput
            placeholder="Nombre de contacto"
            class="w-full h-[68px] mt-2 rounded-md"
          />
          </div>
          <div class="mt-2">

          <FlowInput
            placeholder="Correo electronico"
            class="w-full h-[68px] mt-2 rounded-md"
          />
          </div>
          <div class="mt-2">

          <FlowInput
            placeholder="Whatsapp"
            class="w-full h-[68px] mt-2 rounded-md"
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
                          <div id="preview" class="flex w-full h-[100%] gap-2 border border-gray-400">
                            <div v-for="(file, index) in allimg" :key="file.originalname" class="relative">
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
            <div class="mt-4">
              <FlowTexarea
                class="w-full h-[280px] rounded-md resize-none"
                placeholder="Descripción del anuncio"
              />
            </div>
          </div>
        </section>
      </div>
      <div class="flex justify-center lg:justify-end pb-4">
            <TheButtonjyj class="text-white font-bold" texto="Guardar" />
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
