<template>
  <section class="flex justify-center">
    <form @submit.prevent="submitForm" class="block w-[80%] h-[80%]">
      <div class="block gap-6 p-8 w-full">
        <p class="text-[30px] underline underline-offset-8 font-bold">Publica tu Inmueble</p>
        <section class="flex justify-between gap-5 w-full">
          <div class="block w-full">
            <div class="block w-full mt-10 pt-4">
              <FlowInput
                id="names"
                type="text"
                v-model="formData.names"
                class="w-full h-[68px] mt-2 rounded-md"
                placeholder="Nombres"
              />
            </div>
            <div class="block w-full mt-10 pt-4">
              <FlowInput
                id="contact"
                type="text"
                v-model="formData.contact"
                class="w-full h-[68px] mt-2 rounded-md"
                placeholder="Contacto"
              />
            </div>
            <div class="block w-full mt-10 pt-4">
              <FlowInput
                id="maill"
                type="email"
                v-model="formData.maill"
                class="w-full h-[68px] mt-2 rounded-md"
                placeholder="Email"
              />
            </div>
            <div class="block w-full mt-10 pt-4">
              <FlowInput
                id="phoneNum"
                type="tel"
                v-model="formData.phoneNum"
                class="w-full h-[68px] mt-2 rounded-md"
                placeholder="Número de Teléfono"
              />
            </div>
          </div>
          <div class="block w-full mt-10">
            <label for="fileUpload" class="custom-file-upload cursor-pointer">
              Subir Archivos 
            </label>
            <p class="mt-4">Maximo de 12 imagenes</p>
            <input id="fileUpload" type="file" multiple @change="handleFileUpload" style="display: none;" />
            <div id="imagePreview" class="mt-4 flex flex-wrap"></div>
            </div>
          <div class="block w-full">
            <label for="typeService">Tipo de Servicio:</label>
            <!-- <input id="typeService" type="text" v-model="formData.typeService" required /> -->
            <div class="mt-2">
              <div v-if="commercesLoading" class="loading-indicator">Cargando datos...</div>

              <Multiselect
                id="typeService"
                v-model="formData.typeService"
                :options="
                commercesData?.data.map((comerc) => ({
                    value: comerc.id,
                    label: comerc.name,
                  }))
                "
                class="h-[68px] rounded-md"
                placeholder="Tipo de servicio"
              />
            </div>
            <div class="mt-4">
              <FlowTexarea
                id="descripton"
                v-model="formData.descripton"
                class="w-full h-[280px] rounded-md resize-none"
                placeholder="Descripción del inmueble"
              />
            </div>
  
            
            
            <!-- <button type="submit">Guardar</button> -->
            <TheButtonjyj class="text-white font-bold" texto="Guardar" type="submit" />
          </div>
        </section>
      </div>
    </form>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Input as FlowInput, Textarea as FlowTexarea } from 'flowbite-vue';
import TheButtonjyj from "../../../components/TheButtonjyj.vue";
import { useQueryCommercesData } from "../../../composable/leases/commerceComposable";
import Multiselect from "@vueform/multiselect";

import axios from 'axios';

const MAX_FILES = 12;

const formData = ref({
  names: '',
  contact: '',
  maill: '',
  phoneNum: '',
  typeService: '',
  descripton: '',
  files: [] as File[],
});

const { data: commercesData, isLoading: commercesLoading } = useQueryCommercesData();


const submitForm = async () => {
  try {
    const data = new FormData();
    data.append('names', formData.value.names);
    data.append('contact', formData.value.contact);
    data.append('maill', formData.value.maill);
    data.append('phoneNum', formData.value.phoneNum);
    data.append('typeService', formData.value.typeService);
    data.append('descripton', formData.value.descripton);
    formData.value.files.forEach((file) => {
      data.append('files', file);
    });

    const apiUrl = 'http://localhost:3001/filesd/uploads';
    if (!apiUrl) {
      throw new Error('API URL not found in environment variables');
    }

    const response = await axios.post(apiUrl, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log(response.data);
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};

const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files) {
    const newFiles = Array.from(target.files);
    if (formData.value.files.length + newFiles.length > MAX_FILES) {
      // Handle error (exceeds file limit)
      console.error('Exceeded maximum file upload limit.');
      return;
    }
    formData.value.files.push(...newFiles.slice(0, MAX_FILES - formData.value.files.length));
    updateImagePreview();
  }
};

const removeImage = (index) => {
  formData.value.files.splice(index, 1);
  updateImagePreview();
};

const updateImagePreview = () => {
  const imagePreview = document.getElementById('imagePreview');
  if (imagePreview) {
    imagePreview.innerHTML = '';
    formData.value.files.forEach((file, index) => {
      const preview = document.createElement('img');
      preview.src = URL.createObjectURL(file);
      preview.style.maxWidth = '100px';
      preview.style.marginRight = '10px';
      preview.addEventListener('click', () => {
        removeImage(index);
      });
      imagePreview.appendChild(preview);
    });
  }
};
</script>

<style src="@vueform/multiselect/themes/default.css">
#imagePreview img {
  max-width: 100px;
  margin-right: 10px;
  transition: transform 0.3s ease;
}

#imagePreview img:hover {
  transform: scale(2.2);
}

input[type="file"] {
  display: none;
}

/* Estilo del label personalizado */
.custom-file-upload {
  cursor: pointer;
  padding: 10px 15px;
  background-color: #007bff;
  color: #fff;
  border-radius: 5px;
}

/* Estilo cuando se pasa el cursor sobre el label */
.custom-file-upload:hover {
  background-color: #0056b3;
}

.multiselect {
  border-radius: 20px !important;
}
</style>