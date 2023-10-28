<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import TheButtonjyj from '../../../components/TheButtonjyj.vue'
import {
  Select as FLowSelect,
  Input as FlowInput,
  Textarea as FlowTexarea,
  FileInput
} from 'flowbite-vue'
import { useQueryOferData } from './useQueryOferData'
import { useQueryStratumData } from './useQueryStratumData'
import { useQueryAntiquityData } from './useQueryAntiquityData'
import { useQueryPropertyData } from './useQueryPropertyData'
import { useQueryRestroomData } from './useQuieryRestroomData'
import { useQueryRoomData } from './useQueryRoomData'

export default defineComponent({
  components: { TheButtonjyj, FileInput, FLowSelect, FlowInput, FlowTexarea },
  setup() {
    const { data: apiStratum } = useQueryStratumData()
    const { data: apiOffer } = useQueryOferData()
    const { data: apiAnitquity } = useQueryAntiquityData()
    const { data: apiProperty } = useQueryPropertyData()
    const { data: apiRestroom } = useQueryRestroomData()
    const { data: apiRoom } = useQueryRoomData()

    const getOfferNames = () => {
      if (apiOffer && apiOffer.value && apiOffer.value.data) {
        return apiOffer.value.data.map((item: any) => ({ id: item.id, name: item.name }))
      }
      return []
    }

    const getStratumNames = () => {
      if (apiStratum && apiStratum.value && apiStratum.value.data) {
        return apiStratum.value.data.map((item: any) => ({ id: item.id, name: item.name }))
      }
      return []
    }

    const getAntiquityNames = () => {
      if (apiAnitquity && apiAnitquity.value && apiAnitquity.value.data) {
        return apiAnitquity.value.data.map((item: any) => ({ id: item.id, name: item.name }))
      }
      return []
    }

    const getPropertyNames = () => {
      if (apiProperty && apiProperty.value && apiProperty.value.data) {
        return apiProperty.value.data.map((item: any) => ({ id: item.id, name: item.name }))
      }
      return []
    }

    const getRoomNames = () => {
      if (apiRoom && apiRoom.value && apiRoom.value.data) {
        return apiRoom.value.data.map((item: any) => ({ id: item.id, name: item.name }))
      }
      return []
    }

    const getRestroomNames = () => {
      if (apiRestroom && apiRestroom.value && apiRestroom.value.data) {
        return apiRestroom.value.data.map((item: any) => ({ id: item.id, name: item.name }))
      }
      return []
    }

    onMounted(() => {})
    return {
      getOfferNames,
      getStratumNames,
      getAntiquityNames,
      getPropertyNames,
      getRoomNames,
      getRestroomNames,
      apiOffer
    }
  }
})
</script>
<template>
  <form class="flex justify-center">
    <div class="block gap-6 p-8 w-[80%]">
      <p class="text-[30px] underline underline-offset-8 font-bold">Publica tu inmueble</p>
      <section class="flex gap-4">
        <div class="block w-[30%] mt-10">
          <FLowSelect class="h-[68px] rounded-md" :options="getOfferNames()" placeholder="Tipo de oferta"></FLowSelect>
          <FLowSelect class="h-[68px] rounded-md" :options="getPropertyNames()" placeholder="tipo de inmueble"></FLowSelect>
          <FLowSelect class="h-[68px] rounded-md" :options="getRoomNames()" placeholder="Número de habitaciones"></FLowSelect>
          <FLowSelect class="h-[68px] rounded-md" :options="getRestroomNames()" placeholder="Numero de baños"></FLowSelect>
          <FLowSelect class="h-[68px] rounded-md" :options="getStratumNames()" placeholder="Estrato"></FLowSelect>
          <FLowSelect class="h-[68px] rounded-md" :options="getAntiquityNames()" placeholder="Antiguedad del inmueble"></FLowSelect>

        </div>
        <div class="block w-[30%] mt-16">
          <div class="mt-2">
            <FileInput
              :dropzone="true"
              class="border border-black-4 h-[290px] w-full rounded-md cursor-pointer text-center flex items-center justify-center"
            >
              <p class="!mt-1 text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </FileInput>
          </div>
        </div>
        <div class="block w-[30%]">
          <FlowInput class="w-full h-[68px] mt-2 rounded-md" placeholder="Precio" />
          <FlowInput class="w-full h-[68px] mt-2 rounded-md" placeholder="valor administración" />
          <FlowInput class="w-full h-[68px] mt-2 rounded-md" placeholder="Área construída" />
          <div class="mt-4">
            <FlowTexarea
              class="w-full h-[280px] rounded-md resize-none"
              placeholder="Descripción del inmueble"
              label=""
            />
          </div>
        </div>
      </section>
      <section class="mt-2 flex justify-center gap-4 w-full p-2">
        <FlowInput class="rounded-md w-full h-[58px]" placeholder="Nombre de contacto" />
        <FlowInput class="rounded-md w-full h-[58px]" placeholder="Whatsapp" />
        <FlowInput class="rounded-md w-full h-[58px]" placeholder="Correo electrónico" />
        <div class="w-full flex justify-center items-center">
        <TheButtonjyj texto="Publica" />
        </div>

      </section>
    </div>
  </form>
</template>

function useQueryRestroomData(): { data: any } {
  throw new Error('Function not implemented.')
}
