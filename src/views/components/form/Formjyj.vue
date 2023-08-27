<script lang="ts">
import { defineComponent } from 'vue'
import Selectjyj from '../../../components/Selectjyj.vue'
import TheButtonjyj from '../../../components/TheButtonjyj.vue'
import IconImages from '@/components/icons/IconImages.vue'

export default defineComponent({
  components: { TheButtonjyj, Selectjyj, IconImages },
  setup() {
    const options = ['A', 'B', 'C', 'D']
    const oferta = 'Tipo de oferta'
    const inmueble = 'Tipo de inmueble'
    const estrato = 'Estrato'
    const antiguedad = 'Ubicación del inmueble'
    const ubicacion = 'Antigüedad del inmueble'
    return {
      oferta,
      inmueble,
      estrato,
      antiguedad,
      ubicacion,
      options
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
          <Selectjyj :options="options" placeholder="oferta" />
          <Selectjyj :options="options" placeholder="inmueble" />
          <Selectjyj :options="options" placeholder="estrato" />
          <Selectjyj :options="options" placeholder="antiguedad" />
        </div>
        <div class="block w-[30%] mt-16">
          <Selectjyj :options="options" :placeholder="ubicacion" />
          <div class="mt-2">
            <label
              for="fileInput"
              class="border border-black-2 h-[290px] w-full rounded rounded-md cursor-pointer text-center flex items-center justify-center"
            >
              <span class="text-gray-500 flex-center">
                <div>
                  <IconImages />
                </div>
              </span>
              <input
                type="file"
                accept="image/*"
                multiple
                class="border border-black-2 h-[290px] w-full rounded rounded-md p-0 cursor-pointer opacity-0 bg-red-600"
              />
            </label>
          </div>
        </div>
        <div class="block w-[30%]">
          <input
            v-model="message"
            placeholder="Precio"
            class="border border-black-2 w-full h-[68px] rounded rounded-md"
          />
          <input
            v-model="message"
            placeholder="valor administración"
            class="border border-black-2 w-full h-[68px] rounded rounded-md mt-2"
          />
          <input
            v-model="message"
            placeholder="Área construída"
            class="border border-black-2 w-full h-[68px] rounded rounded-md mt-2"
          />
          <textarea
            v-model="message"
            placeholder="Descripción del inmueble"
            class="border border-black-2 w-full h-[220px] rounded rounded-md mt-2 resize-none"
          />
        </div>
      </section>
      <section class="mt-4 flex justify-center gap-4">
        <input
          v-model="message"
          class="border border-black-2 rounded rounded-md"
          placeholder="Nombre de contacto"
        />
        <input
          v-model="message"
          class="border border-black-2 rounded rounded-md"
          placeholder="Whatsapp"
        />
        <input
          v-model="message"
          class="border border-black-2 rounded rounded-md"
          placeholder="Correo electrónico"
        />
        <TheButtonjyj texto="Publica" />
      </section>
    </div>
  </form>
</template>
