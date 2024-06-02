<script lang="ts">
import { defineComponent, ref } from "vue";
import MainLayout from "../layouts/MainLayout.vue";
import TheButtonjyjVue from "../components/TheButtonjyj.vue";
import { useSaleStore } from "./components/form/store/saleStore";
import Modaljyj from "../components/Modaljyj.vue"
import ShowSummaryPicuture from "./components/sales/showSummaryPicuture.vue";




export default defineComponent({
   components: { MainLayout, TheButtonjyjVue, ShowSummaryPicuture, Modaljyj },
  setup() {
    const storeSale = useSaleStore()

    const modalContact = ref(false)


    const openContact = () => {
      modalContact.value = true
    }

    return { storeSale, modalContact, openContact };
  },
});
</script>

<template>
  <MainLayout>
    <section class="flex justify-center items-center">
      <div>
        <h4 class="text-[30px] underline underline-offset-8 font-bold">
          APARTAMENTO EN {{ storeSale.ofert === '1' ? 'VENTA' : 'ARRIENDO' }}
        </h4>
        <p class="flex justify-center font-semibold text-[20px]">{{ storeSale.city }}, {{ storeSale.neighborhood }}</p>
      </div>
    </section>
    <div class="flex mt-8 justify-center gap-8">
    
    <ShowSummaryPicuture :pictures="storeSale.files.map(file => ({ src: `http://localhost:3001/uploads/${file.filename}`, alt: file.originalname}))" />

    <section class="flex ">
    <div class="justify-center rounded-md drop-shadow-md border border- border-gray-500">
      <div class="border border-b-1 border-gray-500 p-6 w-[900px] h-40">
        <p class="p-4">{{ storeSale.description }}</p>
      </div>
      <section class=" flex justify-around mt-4">
        <div class="p-6">
        <div class="flex rounded border border- border-gray-500 w-44 mt-2 justify-between items-center">
          <span class="font-thin p-4">Habitaciones</span>
          <p class="p-4 font-bold"> {{ storeSale.room }}</p>
        </div>
        <div class="flex rounded border border- border-gray-500 w-44 mt-2 justify-between items-center">
          <span class="font-thin p-4">Baños</span>
          <p class="p-4 font-bold"> {{ storeSale.restroom }}</p>
        </div>
        <div class="flex rounded border border- border-gray-500 w-44 mt-2 justify-between items-center">
          <span class="font-thin p-4">Parqueaderos</span>
          <p class="p-4 font-bold"> {{ storeSale.parking }}</p>
        </div>
        <div class="flex rounded border border- border-gray-500 w-44 mt-2 justify-between items-center">
          <span class="font-thin p-4">Estrato</span>
          <p class="p-4 font-bold"> {{ storeSale.stratum }}</p>
        </div>
        <div class="flex rounded border border- border-gray-500 w-44 mt-2 justify-between items-center">
          <span class="font-thin p-4">Area</span>
          <p class="p-4 font-bold"> {{ storeSale.area }} <span class="font-thin">mt</span></p>
          
        </div>
        <div class="flex rounded border border- border-gray-500 w-44 mt-2 justify-between items-center">
          <span class="font-thin p-4">Antiguedad</span>
          <p class="p-4 font-bold"> {{ storeSale.age }} <span class="font-thin">A</span> </p>
        </div>       
        </div>
        <div class="p-6">
          <TheButtonjyjVue class="text-white" texto="Contactame" @click="openContact"  />
          <div class="flex rounded border border- border-gray-500 w-72 mt-2 justify-between items-center">
          <span class="font-thin p-4">Valor administración</span>
          <p class="p-4 font-bold"> $ {{ storeSale.administration }}</p>
        </div>
        <div class="flex rounded border border- border-gray-500 w-72 mt-2 justify-between items-center">
          <span class="font-thin p-4">Valor inmueble</span>
          <p class="p-4 font-bold"> $ {{ storeSale.price }}</p>
        </div>
        </div>
      </section>
   
    </div>
    </section>
    </div>
     <Modaljyj :isOpen="modalContact" @update:is-open="modalContact = $event" titulo="COMPLEXES">
      <div class="p-6">
        <p>Si te encuentras interesado en este inmueble y quieres que se pongan en contacto con tigo escribe tus datos</p>
      </div>
    </Modaljyj>
    
  </MainLayout>
</template>
