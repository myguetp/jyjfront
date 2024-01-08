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
    <FilterAdvertisents />
    <div class="flex gap-6 m-10">
      <ShowAdvertisements
        v-for="leases in [
          /* ... */
        ]"
        :key="leases.id"
        :pictures="pictures"
        :containerWidth="'350px'"
        :carouselItemsToShow="0.5"
        :price="'$2,000,000'"
        :details="'120m - 5 bedrooms - 2 bathrooms'"
        :propertyType="'Arriendo'"
        @click="openModal(leases)"
      />
      <ShowAdvertisements
        :pictures="pictures"
        :containerWidth="'350px'"
        :carouselItemsToShow="0.5"
        :price="'$2,000,000'"
        :details="'120m - 5 bedrooms - 2 bathrooms'"
        :propertyType="'Arriendo'"
      />
      <ShowAdvertisements
        :pictures="pictures"
        :containerWidth="'350px'"
        :carouselItemsToShow="0.5"
        :price="'$2,000,000'"
        :details="'120m - 5 bedrooms - 2 bathrooms'"
        :propertyType="'Arriendo'"
      />
    </div>
  </MainLayout>
</template>
