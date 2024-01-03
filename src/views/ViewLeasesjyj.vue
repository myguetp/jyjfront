<script lang="ts">
import { defineComponent, ref } from "vue";
import MainLayout from "../layouts/MainLayout.vue";
import FilterLeases from "./components/leases/FiltersLeases.vue";
import ShowLeases from "./components/leases/ShowLeases.vue";

export default defineComponent({
  components: { MainLayout, FilterLeases, ShowLeases },
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

    const selectedLeases = ref(null);
    const isModalOpen = ref(false);

    const openModal = (leases) => {
      selectedLeases.value = leases;
      isModalOpen.value = true;
    };
    return { pictures, openModal };
  },
});
</script>
<template>
  <MainLayout>
    <section class="flex">
      <div class="bg-white box-shadow p-2">
        <FilterLeases />
      </div>
      <div>
        <div class="flex gap-6 m-5 w-full">
          <ShowLeases
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
          <ShowLeases
            :pictures="pictures"
            :containerWidth="'350px'"
            :carouselItemsToShow="0.5"
            :price="'$2,000,000'"
            :details="'120m - 5 bedrooms - 2 bathrooms'"
            :propertyType="'Arriendo'"
          />
          <ShowLeases
            :pictures="pictures"
            :containerWidth="'350px'"
            :carouselItemsToShow="0.5"
            :price="'$2,000,000'"
            :details="'120m - 5 bedrooms - 2 bathrooms'"
            :propertyType="'Arriendo'"
          />
          <ShowLeases
            :pictures="pictures"
            :containerWidth="'350px'"
            :carouselItemsToShow="0.5"
            :price="'$2,000,000'"
            :details="'120m - 5 bedrooms - 2 bathrooms'"
            :propertyType="'Arriendo'"
          />
          <ShowLeases
            :pictures="pictures"
            :containerWidth="'350px'"
            :carouselItemsToShow="0.5"
            :price="'$2,000,000'"
            :details="'120m - 5 bedrooms - 2 bathrooms'"
            :propertyType="'Arriendo'"
          />
        </div>
        <div class="flex gap-6 m-5 w-full bg-">
          <ShowLeases
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
          <ShowLeases
            :pictures="pictures"
            :containerWidth="'350px'"
            :carouselItemsToShow="0.5"
            :price="'$2,000,000'"
            :details="'120m - 5 bedrooms - 2 bathrooms'"
            :propertyType="'Arriendo'"
          />
          <ShowLeases
            :pictures="pictures"
            :containerWidth="'350px'"
            :carouselItemsToShow="0.5"
            :price="'$2,000,000'"
            :details="'120m - 5 bedrooms - 2 bathrooms'"
            :propertyType="'Arriendo'"
          />
          <ShowLeases
            :pictures="pictures"
            :containerWidth="'350px'"
            :carouselItemsToShow="0.5"
            :price="'$2,000,000'"
            :details="'120m - 5 bedrooms - 2 bathrooms'"
            :propertyType="'Arriendo'"
          />
          <ShowLeases
            :pictures="pictures"
            :containerWidth="'350px'"
            :carouselItemsToShow="0.5"
            :price="'$2,000,000'"
            :details="'120m - 5 bedrooms - 2 bathrooms'"
            :propertyType="'Arriendo'"
          />
        </div>
        <div class="flex gap-6 m-5 w-full">
          <ShowLeases
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
          <ShowLeases
            :pictures="pictures"
            :containerWidth="'350px'"
            :carouselItemsToShow="0.5"
            :price="'$2,000,000'"
            :details="'120m - 5 bedrooms - 2 bathrooms'"
            :propertyType="'Arriendo'"
          />
          <ShowLeases
            :pictures="pictures"
            :containerWidth="'350px'"
            :carouselItemsToShow="0.5"
            :price="'$2,000,000'"
            :details="'120m - 5 bedrooms - 2 bathrooms'"
            :propertyType="'Arriendo'"
          />
          <ShowLeases
            :pictures="pictures"
            :containerWidth="'350px'"
            :carouselItemsToShow="0.5"
            :price="'$2,000,000'"
            :details="'120m - 5 bedrooms - 2 bathrooms'"
            :propertyType="'Arriendo'"
          />
          <ShowLeases
            :pictures="pictures"
            :containerWidth="'350px'"
            :carouselItemsToShow="0.5"
            :price="'$2,000,000'"
            :details="'120m - 5 bedrooms - 2 bathrooms'"
            :propertyType="'Arriendo'"
          />
        </div>
      </div>
    </section>
  </MainLayout>
</template>
