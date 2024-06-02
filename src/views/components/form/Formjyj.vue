<template>
  <section class="flex justify-center">
    <form @submit.prevent="submitForm" class="block w-[80%] h-[80%]">
      <div class="block gap-6 p-8 w-full">
        <p class="text-[30px] underline underline-offset-8 font-bold">Publica tu Inmueble</p>
        <section class="block lg:flex w-full">
          <div class="block w-full lg:w-[30%] mt-10 pt-4">
            <div v-if="ofertLoading" class="loading-indicator">Cargando datos...</div>

            <Multiselect
              v-else
              id="ofert"
              v-model="formData.ofert"
              :options="
                ofertData?.data.map((ofert) => ({
                  value: ofert.id,
                  label: ofert.name
                }))"
              class="h-[68px] rounded-md"
              placeholder="Tipo de oferta"
            />
            <div class="mt-2">
              <div v-if="propertyLoading" class="loading-indicator">Cargando datos...</div>

              <Multiselect
                v-else
                id="property"
                v-model="formData.property"
                :options="
                  propertyData?.data.map((property) => ({
                    value: property.id,
                    label: property.name
                  }))"
                class="h-[68px] rounded-md"
                placeholder="Tipo de inmueble"
              />
            </div>
            <div class="mt-2">
              <div v-if="restroomLoading" class="loading-indicator">Cargando datos...</div>

              <Multiselect
                id="restroom"
                v-model="formData.restroom"
                :options="
                  restromData?.data.map((restroom) => ({
                    value: restroom.id,
                    label: restroom.name
                  }))"
                class="h-[68px] rounded-md"
                placeholder="Número de baños"
              />
            </div>
            <div class="mt-2">
              <div v-if="roomLoading" class="loading-indicator">Cargando datos...</div>

              <Multiselect
                id="room"
                v-model="formData.room"
                :options="
                  roomData?.data.map((room) => ({
                    value: room.id,
                    label: room.name
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
                v-model="formData.stratum"
                :options="
                  stratumData?.data.map((stratum) => ({
                    value: stratum.id,
                    label: stratum.name
                  }))
                "
                class="h-[68px] rounded-md"
                placeholder="Estrato"
              />
            </div>

            <div class="mt-2">
              <div v-if="parkingLoading" class="loading-indicator">Cargando datos...</div>

              <Multiselect
                id="parking"
                v-model="formData.parking"
                :options="
                  parkingData?.data.map((parking) => ({
                    value: parking.id,
                    label: parking.name
                  }))
                "
                class="h-[68px] rounded-md"
                placeholder="Parqueadero"
              />
            </div>

            <div class="mt-2">
              <div v-if="antiquityLoading" class="loading-indicator">Cargando datos...</div>

              <Multiselect
                id="age"
                v-model="formData.age"
                :options="
                  antiquiyData?.data.map((age) => ({
                    value: age.id,
                    label: age.name
                  }))
                "
                class="h-[68px] rounded-md"
                placeholder="Antiguedad del inmueble"
              />
            </div>
       
          </div>
          <div class="block w-full lg:w-[30%] lg:ml-4">
            <FlowInput
              id="price"
              v-model="formData.price"
              class="w-full h-[68px] mt-2 rounded-md"
              placeholder="Precio"
            />
            <FlowInput
              id="country"
              v-model="formData.country"
              class="w-full h-[68px] mt-2 rounded-md"
              placeholder="País"
              disabled
            />
            <div class="mt-4">
              <div v-if="cityLoading" class="loading-indicator">Cargando datos...</div>

              <Multiselect
                id="city"
                v-model="formData.city"
                :options="
                  cityData?.data[2]?.city.map((city) => ({
                    value: city.id,
                    label: city.name
                  }))"
                class="h-[28px] rounded-md mulitselectinfo"
                placeholder="Ciudad"
                :style="{ backgroundColor: 'transparent', border: '1px solid transparent' }"
                searchable    
              />
            </div>
            <FlowInput
              id="neighborhood"
              v-model="formData.neighborhood"
              class="w-full h-[68px] mt-2 rounded-md"
              placeholder="Barrio"
            />
            <FlowInput
              id="administration"
              v-model="formData.administration"
              class="w-full h-[68px] mt-2 rounded-md"
              placeholder="valor administración"
            />
            <FlowInput
              id="area"
              v-model="formData.area"
              class="w-full h-[68px] mt-2 rounded-md"
              placeholder="Área construída"
            />
            <FlowInput
              id="email"
              type="email"
              v-model="formData.email"
              class="w-full h-[68px] mt-2 rounded-md"
              placeholder="Correo electronico"
            />
            <FlowInput
              id="phone"
              v-model="formData.phone"
              class="w-full h-[68px] mt-2 rounded-md"
              placeholder="Celular"
            />
          </div>

          <div class="block w-full lg:w-[40%] ml-4">
          <div class="block w-full mt-10 border-dashed border-x-2 border-gray-500 p-4 relative">
            <label for="fileUpload" class="custom-file-upload cursor-pointer font-bold">
              Subir Archivos
            </label>
            <p class="mt-4">Máximo de 12 imágenes</p>
            <input
              id="fileUpload"
              type="file"
              multiple
              @change="handleFileUpload"
              style="display: none"
            />
            <div id="imagePreview" class="mt-4 flex flex-wrap h-40"></div>
          </div>

          <div class="mt-8">
              <FlowTexarea
                v-model="formData.description"
                class="w-full h-[280px] rounded-md resize-none"
                placeholder="Descripción del inmueble"
                label=""
              />
            </div>

          <div class="block justify-center lg:justify-end pb-4 mt-1">
            <TheButtonjyj class="text-white font-bold" texto="Guardar" type="submit" />
          </div>
        </div>
        
        </section>
      </div>
    </form>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Input as FlowInput, Textarea as FlowTexarea } from 'flowbite-vue'
import TheButtonjyj from '../../../components/TheButtonjyj.vue'
import Multiselect from '@vueform/multiselect'

import axios from 'axios'
import { useRouter } from 'vue-router'
import { useQueryRoomData } from '../../../composable/leases/roomComposable'
import { useQueryRestroomData } from '../../../composable/leases/restroomComposable'
import { useQueryStratumData } from '../../../composable/leases/stratumComposable'
import { useQueryPropertyData } from '../../../composable/leases/propertyComposable'
import { useQueryAntiquityData } from '../../../composable/leases/antiquityComposable'
import { useQueryParkingData } from '../../../composable/leases/parkingComposable'
import { useQueryOferData } from '../../../composable/leases/oferComposable'
import { useQueryCityData } from '@/composable/leases/cityComposable'

const MAX_FILES = 12

const formData = ref({
  ofert: '',
  email: '',
  phone: '',
  flower: '',
  neighborhood: '',
  city: '',
  country: 'Colombia',
  property: '',
  stratum: '',
  price: '',
  room: '',
  restroom: '',
  age: '',
  administration: '',
  area: '',
  description: '',
  parking: '',
  files: [] as File[]
})

const { data: roomData, isLoading: roomLoading } = useQueryRoomData()
const { data: restromData, isLoading: restroomLoading } = useQueryRestroomData()
const { data: stratumData, isLoading: stratumLoading } = useQueryStratumData()
const { data: propertyData, isLoading: propertyLoading } = useQueryPropertyData()
const { data: antiquiyData, isLoading: antiquityLoading } = useQueryAntiquityData()
const { data: parkingData, isLoading: parkingLoading } = useQueryParkingData()
const { data: ofertData, isLoading: ofertLoading } = useQueryOferData()
const { data: cityData, isLoading: cityLoading } = useQueryCityData()
const router = useRouter()



const submitForm = async () => {
  try {
    const price = parseFloat(formData.value.price)
    const area = parseFloat(formData.value.area)

    if (isNaN(price) || isNaN(area)) {
      console.error('El precio y el área deben ser números válidos.')
      return // Detener el envío del formulario y manejar el error apropiadamente
    }

    console.log('Price:', price);
    console.log('Area:', area);

    const data = new FormData()
    data.append('email', formData.value.email)
    data.append('ofert', formData.value.ofert)
    data.append('phone', formData.value.phone)
    data.append('flower', formData.value.flower)
    data.append('neighborhood', formData.value.neighborhood)
    data.append('city', formData.value.city)
    data.append('country', formData.value.country)
    data.append('property', formData.value.property)
    data.append('stratum', formData.value.stratum)
    data.append('price', price.toString()) // Enviar como número convertido a cadena
    data.append('room', formData.value.room)
    data.append('restroom', formData.value.restroom)
    data.append('age', formData.value.age)
    data.append('area', area.toString()) // Enviar como número convertido a cadena
    data.append('administration', formData.value.administration)
    data.append('description', formData.value.description)
    data.append('parking', formData.value.parking)

    formData.value.files.forEach((file) => {
      data.append('files', file)
    })

    const apiUrl = 'http://localhost:3001/sales/uploadcrate'
    const response = await axios.post(apiUrl, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })

    if (response.status === 201) {
      alert('¡Correcto! El recurso se creó exitosamente.')
      return router.push({ name: 'Sales' })
    } else {
      console.log('La solicitud no se completó correctamente.')
    }
  } catch (error) {
    console.error('Error submitting form:', error)
  }
}

const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files) {
    const newFiles = Array.from(target.files)
    if (formData.value.files.length + newFiles.length > MAX_FILES) {
      // Handle error (exceeds file limit)
      console.error('Exceeded maximum file upload limit.')
      return
    }
    formData.value.files.push(...newFiles.slice(0, MAX_FILES - formData.value.files.length))
    updateImagePreview()
  }
}

const removeImage = (index) => {
  formData.value.files.splice(index, 1)
  updateImagePreview()
}

const updateImagePreview = () => {
  const imagePreview = document.getElementById('imagePreview')
  if (imagePreview) {
    imagePreview.innerHTML = ''
    formData.value.files.forEach((file, index) => {
      const preview = document.createElement('img')
      preview.src = URL.createObjectURL(file)
      preview.style.maxWidth = '100px'
      preview.style.marginRight = '10px'
      preview.addEventListener('click', () => {
        removeImage(index)
      })
      imagePreview.appendChild(preview)
    })
  }
}
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

input[type='file'] {
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
