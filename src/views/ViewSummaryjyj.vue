<script lang="ts">
import { defineComponent } from "vue";
import MainLayout from "../layouts/MainLayout.vue";
import TheButtonjyjVue from "../components/TheButtonjyj.vue";
import { useSaleStore } from "./components/form/store/saleStore";
import ShowFirstPicture from "./components/inicio/ShowFirstPicture.vue";


export default defineComponent({
   components: { MainLayout, TheButtonjyjVue, ShowFirstPicture,  },
  setup() {
    const storeSale = useSaleStore()
    const pictures = [
      {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
        alt: "file 2",
        text: "hola",
      },
      {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
        alt: "file 3",
        text: "que",
      },
      {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
        alt: "file 4",
        text: "mas",
      },
      {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
        alt: "file 5",
        text: "chao",
      },
    ];

    return { storeSale, pictures };
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
      <div>

    <ShowFirstPicture :pictures="pictures" />
      </div>
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
          <TheButtonjyjVue class="text-white" texto="Contactame" />
          <div class="flex rounded border border- border-gray-500 w-72 mt-2 justify-between items-center">
          <span class="font-thin p-4">Valor inmueble</span>
          <p class="p-4 font-bold"> $ {{ storeSale.price }}</p>
        </div>
          <div class="flex rounded border border- border-gray-500 w-72 mt-2 justify-between items-center">
          <span class="font-thin p-4">Valor administración</span>
          <p class="p-4 font-bold"> $ {{ storeSale.administration }}</p>
        </div>
      
        </div>
          <TheButtonjyjVue class="text-white bg-yellow-600" :tamanio="'sm'" texto="Favorito" />
      </section>
   
    </div>
    </section>
    </div>

    
  </MainLayout>
</template>
