<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRouter } from "vue-router";
import MainLayout from "../layouts/MainLayout.vue";
import TheButtonjyjVue from "../components/TheButtonjyj.vue";
import { useHttpStore } from "../services/store/httpstore";
import ShowSales from "./components/sales/ShowSales.vue";
import { useQueryUser } from './components/user/useQueryUser';



export default defineComponent({
  components: { MainLayout, TheButtonjyjVue, ShowSales },
  setup() {
    const router = useRouter();
    const storehttp = useHttpStore();
    const idUser =  storehttp.idUser
    const { data: dataUser } = useQueryUser(idUser)

    const userPictures = computed(() => {
  if (dataUser.value.sales) {
    const files = dataUser.value.sales[0]?.files;

    return files?.map((file: any) => ({
      src: file.filename,
      alt: file.originalname ?? 'imagenn',
    })) ?? [];
  }

  return [];
});


    return {dataUser, storehttp, router, userPictures};
  },
});
</script>

<template>
  <MainLayout>
    <div class="flex w-full p-4 gap-2">

      <section class="block bg-blue-400 p-4 w-[300px]">
      <h3>Quiero publicar</h3>
      <p>Escoge la opción que desees si eres una empresa que ofrece productos o servicios relacionados con el hogar</p>
        <div>
          <TheButtonjyjVue class="text-white font-bold" texto="Anuncio" :tamanio="'sm'"  @click="router.push({ name: 'Commerce' })"/>
        </div>
        <div class="mt-2">
          <TheButtonjyjVue class="text-white font-bold" texto="Inmueble" :tamanio="'sm'" @click="router.push({ name: 'Register' })" />
        </div>
      

      </section>

      <div class="block mt-52 lg:mt-6 lg:flex w-full justify-center gap-20 bg-red-500">
          <ShowSales
            v-for="user in dataUser?.data?.sales?? []"
            :key="user._id ?? 0"
            :city="user.city ?? ''"
            :pictures="userPictures"
            :containerWidth="'350px'"
            :carouselItemsToShow="0.5"
            :price="user.price ?? 0"
            :neighborhood="user.neighborhood ?? ''"
            :details="`${user.area ?? 0}mt - ${user.room ?? 0}ha - ${user.restroom ?? 0}ba - ${
              user.parking ?? 0
            }pa`"
            :propertyType="`${
              user.property === '1'
                ? 'Apartamento'
                : '' || user.property === '2'
                ? 'Casa'
                : '' || user.property === '3'
                ? 'Finca'
                : '' || user.property === '4'
                ? 'Oficina'
                : '' || user.property === '5'
                ? 'Local'
                : '' || user.property === '6'
                ? 'Bodega'
                : '' || user.property === '7'
                ? 'Lote'
                : '' || user.property === '8'
                ? 'Habitación'
                : '' || user.property === '9'
                ? 'Consultorio'
                : '' || user.property === '10'
                ? 'Edificio'
                : ''
            } en ${user.ofert === '1' ? 'Venta' : 'Arriendo'}`"
          />
      </div> 
      
    </div>
  </MainLayout>
</template>
