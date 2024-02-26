<script lang="ts">
import { defineComponent } from "vue";
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

    return {dataUser, storehttp, router};
  },
});
</script>

<template>
  <MainLayout>
    <div class="flex w-full">

      <section class="block">
      <h3>Quiero publicar</h3>
      <p>Escoge la opción que desees si eres una empresa que ofrece productos o servicios relacionados con el hogar</p>
        <div>
          <TheButtonjyjVue class="text-white font-bold" texto="Anuncio"  @click="router.push({ name: 'Register' })"/>
        </div>
        <div>
          <TheButtonjyjVue class="text-white font-bold" texto="Inmueble" @click="router.push({ name: 'Register' })" />
        </div>
        <p>Mostrar mis opciones favoritas</p>
        <div>
          <TheButtonjyjVue class="text-white font-bold" texto="Inmuebles Favoritos" @click="router.push({ name: 'Register' })" />
        </div>
        <div>
          <TheButtonjyjVue class="text-white font-bold" texto="Anuncios favoritos"  @click="router.push({ name: 'Register' })"/>
        </div>
       <img v-if="dataUser && dataUser.data && dataUser.data.sales && dataUser.data.sales[0] && dataUser.data.sales[0].file && dataUser.data.sales[0].file[0]" :src="dataUser.data.sales[0].file[0].name" alt="Descripción de la imagen">
        <!-- <img src="blob:http://localhost:3000/3b0ac5f5-3a2e-4c5c-aa9d-f5def23b0dab" alt="Imagen">  -->

      </section>

      <div class="block mt-52 lg:mt-6 lg:flex w-full justify-center gap-20 bg-red-500">
          <ShowSales
            v-for="user in dataUser?.data?.sales?? []"
            :key="user._id ?? 0"
            :city="user.city ?? ''"
            :pictures="user.file"
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
