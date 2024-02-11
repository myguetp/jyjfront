<script lang="ts">
import { defineComponent } from "vue";
import { RouterView, RouterLink, useRouter } from "vue-router";
import MainLayout from "../layouts/MainLayout.vue";
import TheButtonjyjVue from "../components/TheButtonjyj.vue";
import { useHttpStore } from "../services/store/httpstore";
import ShowSales from "./components/sales/ShowSales.vue";
import { useQueryUser } from './components/user/useQueryUser';



export default defineComponent({
  components: { MainLayout, RouterView, RouterLink, TheButtonjyjVue, ShowSales },
  setup() {
    const router = useRouter();
    const storehttp = useHttpStore();
    const idUser =  storehttp.idUser
    const { data: dataUser } = useQueryUser(idUser)

    const pictures = [
      {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
        alt: "Picture 2",
      },
      {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
        alt: "Picture 3",
      },
      {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
        alt: "Picture 4",
      },
      {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
        alt: "Picture 5",
      },
    ];

    return {dataUser, pictures, storehttp};
  },
});
</script>

<template>
  <MainLayout>
    <div class="flex lg:block">
      <section class="block lg:flex ml-2 lg:ml-0">
        <div class="flex gap-4 mt-6 w-full items-center justify-center">
          <RouterView>
            <RouterLink to="/Register"
              ><TheButtonjyjVue class="text-white font-bold" texto="Anuncio"
            /></RouterLink>
          </RouterView>
        </div>
        <div class="flex gap-4 mt-6 w-full items-center justify-center">
          <RouterView>
            <RouterLink to="/Register"
              ><TheButtonjyjVue class="text-white font-bold" texto="Inmueble"
            /></RouterLink>
          </RouterView>
        </div>
      </section>

      <section
        class="block lg:flex items-center justify-center ml-2 lg:ml-0 lg:mt-8 gap-40 h-20"
      >
        <div
          class="flex gap-4 w-60 items-center justify-center h-full border border-gray-600 rounded-md"
        >
          <p>Tus Publicaciones antiguas</p>
        </div>
        <div
          class="flex gap-4 w-60 items-center justify-center h-full border border-gray-600 rounded-md"
        >
          <p>Tus publicaciones activas</p>
        </div>
        <div
          class="flex gap-4 w-60 items-center justify-center h-full border border-gray-600 rounded-md"
        >
          <p>Tus publicaciones por vencer</p>
        </div>
      
      </section>
      <div class="mt-6 flex w-full justify-center gap-20">
          <ShowSales
            v-for="user in dataUser.data.sales?? []"
            :key="user._id ?? 0"
            :city="user.city ?? ''"
            :pictures="pictures"
            :containerWidth="'350px'"
            :carouselItemsToShow="0.5"
            :price="user.price ?? 0"
            :administration="user.administration ?? 0"
            :neighborhood="user.neighborhood ?? ''"
            :details="`${user.restroom ?? 0} - ${user.room ?? 0} - ${
              user.parking ?? 0
            } - ${user.area ?? 0}`"
            :propertyType="'Venta'"
          />
      </div>
    </div>
  </MainLayout>
</template>
