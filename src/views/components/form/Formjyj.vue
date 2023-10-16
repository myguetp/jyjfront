<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import TheButtonjyj from '../../../components/TheButtonjyj.vue'
import { useQueryOferData } from './useQueryOferData'
import {
  Select as FLowSelect,
  Input as FlowInput,
  Textarea as FlowTexarea,
  FileInput
} from 'flowbite-vue'
import { useQueryStratumData } from './useQueryStratumData'

export default defineComponent({
  components: { TheButtonjyj, FileInput, FLowSelect, FlowInput, FlowTexarea },
  setup() {
    const { data: apiStratum } = useQueryStratumData()
    const { data: apiOffer } = useQueryOferData()

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

    onMounted(() => {})
    return {
      getOfferNames,
      getStratumNames,
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
        <div class="block w-[30%] mt-32">
          <FLowSelect class="h-[68px]" :options="getOfferNames()" placeholder="Tipo de oferta"></FLowSelect>
          <FLowSelect class="h-[68px]" :options="getStratumNames()" placeholder="Estrato"></FLowSelect>
          <FLowSelect class="h-[68px]" :options="getOfferNames()" placeholder="Tipo de oferta"></FLowSelect>
          <FLowSelect class="h-[68px]" :options="getStratumNames()" placeholder="Estrato"></FLowSelect>

        </div>
        <div class="block w-[30%] mt-16">
          <div class="mt-2">
            <FileInput
              :dropzone="true"
              class="border border-black-4 h-[290px] w-full rounded rounded-md cursor-pointer text-center flex items-center justify-center"
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
          <!-- <FlowTexarea  class=" w-full h-[220px] rounded rounded-md mt-4 resize-none" placeholder="Descripción del inmueble" /> -->
          <div class="mt-4">
            <FlowTexarea
              class="w-full h-[280px] rounded rounded-md resize-none"
              placeholder="Descripción del inmueble"
              label=""
            />
          </div>
        </div>
      </section>
      <section class="mt-4 flex justify-center gap-4">
        <FlowInput class="rounded-md h-[58px]" placeholder="Nombre de contacto" />
        <FlowInput class="rounded-md h-[58px]" placeholder="Whatsapp" />
        <FlowInput class="rounded-md h-[58px]" placeholder="Correo electrónico" />

        <TheButtonjyj texto="Publica" />
      </section>
    </div>
  </form>
</template>
