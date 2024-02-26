<script lang="ts">
import { defineComponent, ref } from "vue";
import MainLayout from "../layouts/MainLayout.vue";
import FilterAdvertisents from "./components/advertisements/FilterAdvertisents.vue";
import ShowAdvertisements from "./components/advertisements/ShowAdvertisements.vue";

export default defineComponent({
  components: { MainLayout, FilterAdvertisents, ShowAdvertisements },
  setup() {
    const pictures = [
      {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
        alt: "file 2",
      },
      {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
        alt: "file 3",
      },
      {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
        alt: "file 4",
      },
      {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
        alt: "file 5",
      },
    ];

    const selectedAdvertisement = ref(null);
    const isModalOpen = ref(false);

    const openModal = (advertisement) => {
      selectedAdvertisement.value = advertisement;
      isModalOpen.value = true;
    };
    return { pictures, openModal };
  },
});
</script>
<template>
  <MainLayout>
    <section class="flex p-1 gap-4 w-full">
      <div class="box-shadow p-2 w-[20%] h-auto">
        <FilterAdvertisents />
      </div>
      <div class="w-[90%] h-auto rounded-md shadow snap-y overflow-auto flex flex-wrap">
        <div class="flex gap-6 m-5">
          <ShowAdvertisements
            v-for="sales in [
              /* ... */
            ]"
            :key="sales.id"
            :pictures="pictures"
            :containerWidth="'350px'"
            :carouselItemsToShow="0.5"
            :price="'$2,000,000'"
            :details="'120m - 5 bedrooms - 2 bathrooms'"
            :propertyType="'empresa'"
            @click="openModal(sales)"
          />
          <ShowAdvertisements
            :pictures="pictures"
            :containerWidth="'350px'"
            :carouselItemsToShow="0.5"
            :price="'$2,000,000'"
            :details="'120m - 5 bedrooms - 2 bathrooms'"
            :propertyType="'empresa'"
          />
          <ShowAdvertisements
            :pictures="pictures"
            :containerWidth="'350px'"
            :carouselItemsToShow="0.5"
            :price="'$2,000,000'"
            :details="'120m - 5 bedrooms - 2 bathrooms'"
            :propertyType="'empresa'"
          />
          <ShowAdvertisements
            :pictures="pictures"
            :containerWidth="'350px'"
            :carouselItemsToShow="0.5"
            :price="'$2,000,000'"
            :details="'120m - 5 bedrooms - 2 bathrooms'"
            :propertyType="'empresa'"
          />
          <ShowAdvertisements
            :pictures="pictures"
            :containerWidth="'350px'"
            :carouselItemsToShow="0.5"
            :price="'$2,000,000'"
            :details="'120m - 5 bedrooms - 2 bathrooms'"
            :propertyType="'empresa'"
          />
        </div>
        <div class="flex gap-6 m-5">
          <ShowAdvertisements
            v-for="sales in [
              /* ... */
            ]"
            :key="sales.id"
            :pictures="pictures"
            :containerWidth="'350px'"
            :carouselItemsToShow="0.5"
            :price="'$2,000,000'"
            :details="'120m - 5 bedrooms - 2 bathrooms'"
            :propertyType="'empresa'"
            @click="openModal(sales)"
          />
          <ShowAdvertisements
            :pictures="pictures"
            :containerWidth="'350px'"
            :carouselItemsToShow="0.5"
            :price="'$2,000,000'"
            :details="'120m - 5 bedrooms - 2 bathrooms'"
            :propertyType="'empresa'"
          />
          <ShowAdvertisements
            :pictures="pictures"
            :containerWidth="'350px'"
            :carouselItemsToShow="0.5"
            :price="'$2,000,000'"
            :details="'120m - 5 bedrooms - 2 bathrooms'"
            :propertyType="'empresa'"
          />
          <ShowAdvertisements
            :pictures="pictures"
            :containerWidth="'350px'"
            :carouselItemsToShow="0.5"
            :price="'$2,000,000'"
            :details="'120m - 5 bedrooms - 2 bathrooms'"
            :propertyType="'empresa'"
          />
          <ShowAdvertisements
            :pictures="pictures"
            :containerWidth="'350px'"
            :carouselItemsToShow="0.5"
            :price="'$2,000,000'"
            :details="'120m - 5 bedrooms - 2 bathrooms'"
            :propertyType="'empresa'"
          />
        </div>
        <div class="flex gap-6 m-5">
          <ShowAdvertisements
            v-for="sales in [
              /* ... */
            ]"
            :key="sales.id"
            :pictures="pictures"
            :containerWidth="'350px'"
            :carouselItemsToShow="0.5"
            :price="'$2,000,000'"
            :details="'120m - 5 bedrooms - 2 bathrooms'"
            :propertyType="'empresa'"
            @click="openModal(sales)"
          />
          <ShowAdvertisements
            :pictures="pictures"
            :containerWidth="'350px'"
            :carouselItemsToShow="0.5"
            :price="'$2,000,000'"
            :details="'120m - 5 bedrooms - 2 bathrooms'"
            :propertyType="'empresa'"
          />
          <ShowAdvertisements
            :pictures="pictures"
            :containerWidth="'350px'"
            :carouselItemsToShow="0.5"
            :price="'$2,000,000'"
            :details="'120m - 5 bedrooms - 2 bathrooms'"
            :propertyType="'empresa'"
          />
          <ShowAdvertisements
            :pictures="pictures"
            :containerWidth="'350px'"
            :carouselItemsToShow="0.5"
            :price="'$2,000,000'"
            :details="'120m - 5 bedrooms - 2 bathrooms'"
            :propertyType="'empresa'"
          />
          <ShowAdvertisements
            :pictures="pictures"
            :containerWidth="'350px'"
            :carouselItemsToShow="0.5"
            :price="'$2,000,000'"
            :details="'120m - 5 bedrooms - 2 bathrooms'"
            :propertyType="'empresa'"
          />
        </div>
      </div>
    </section>
  </MainLayout>
</template>
