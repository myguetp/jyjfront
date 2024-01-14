<script lang="ts">
import { defineComponent, ref } from "vue";
import MainLayout from "../layouts/MainLayout.vue";
import FilterSales from "./components/sales/FiltersSales.vue";
import ShowSales from "./components/sales/ShowSales.vue";
import { useQuerySales } from "./components/sales/useQuerySales";

export default defineComponent({
  components: {
    MainLayout,
    FilterSales,
    ShowSales,
  },
  setup() {
    const { data: allsales } = useQuerySales();

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

    const selectedSales = ref(null);
    const isModalOpen = ref(false);

    const openModal = (sales) => {
      selectedSales.value = sales;
      isModalOpen.value = true;
    };
    return { pictures, openModal, allsales };
  },
});
</script>
<template>
  <MainLayout>
    <section class="flex p-1 gap-4 w-full">
      <div class="box-shadow p-2 w-[20%] h-auto">
        <FilterSales />
      </div>
      <div class="w-[90%] h-auto rounded-md shadow snap-y overflow-auto flex flex-wrap">
        <div class="flex gap-6">
          {{ allsales }}
          <ShowSales
            v-for="sales in [
              /* ... */
            ]"
            :key="sales.id"
            :pictures="pictures"
            :containerWidth="'350px'"
            :carouselItemsToShow="0.5"
            :price="'$2,000,000'"
            :details="'120m - 5 bedrooms - 2 bathrooms'"
            :propertyType="'Venta'"
            @click="openModal(sales)"
          />
          <ShowSales
            :pictures="pictures"
            :containerWidth="'350px'"
            :carouselItemsToShow="0.5"
            :price="'$2,000,000'"
            :details="'120m - 5 bedrooms - 2 bathrooms'"
            :propertyType="'Venta'"
          />
          <ShowSales
            :pictures="pictures"
            :containerWidth="'350px'"
            :carouselItemsToShow="0.5"
            :price="'$2,000,000'"
            :details="'120m - 5 bedrooms - 2 bathrooms'"
            :propertyType="'Venta'"
          />
          <ShowSales
            :pictures="pictures"
            :containerWidth="'350px'"
            :carouselItemsToShow="0.5"
            :price="'$2,000,000'"
            :details="'120m - 5 bedrooms - 2 bathrooms'"
            :propertyType="'Venta'"
          />
          <ShowSales
            :pictures="pictures"
            :containerWidth="'350px'"
            :carouselItemsToShow="0.5"
            :price="'$2,000,000'"
            :details="'120m - 5 bedrooms - 2 bathrooms'"
            :propertyType="'Venta'"
          />
        </div>
        <div class="flex gap-6 m-5">
          <ShowSales
            v-for="sales in [
              /* ... */
            ]"
            :key="sales.id"
            :pictures="pictures"
            :containerWidth="'350px'"
            :carouselItemsToShow="0.5"
            :price="'$2,000,000'"
            :details="'120m - 5 bedrooms - 2 bathrooms'"
            :propertyType="'Venta'"
            @click="openModal(sales)"
          />
          <ShowSales
            :pictures="pictures"
            :containerWidth="'350px'"
            :carouselItemsToShow="0.5"
            :price="'$2,000,000'"
            :details="'120m - 5 bedrooms - 2 bathrooms'"
            :propertyType="'Venta'"
          />
          <ShowSales
            :pictures="pictures"
            :containerWidth="'350px'"
            :carouselItemsToShow="0.5"
            :price="'$2,000,000'"
            :details="'120m - 5 bedrooms - 2 bathrooms'"
            :propertyType="'Venta'"
          />
          <ShowSales
            :pictures="pictures"
            :containerWidth="'350px'"
            :carouselItemsToShow="0.5"
            :price="'$2,000,000'"
            :details="'120m - 5 bedrooms - 2 bathrooms'"
            :propertyType="'Venta'"
          />
          <ShowSales
            :pictures="pictures"
            :containerWidth="'350px'"
            :carouselItemsToShow="0.5"
            :price="'$2,000,000'"
            :details="'120m - 5 bedrooms - 2 bathrooms'"
            :propertyType="'Venta'"
          />
        </div>
        <div class="flex gap-6 m-5">
          <ShowSales
            v-for="sales in [
              /* ... */
            ]"
            :key="sales.id"
            :pictures="pictures"
            :containerWidth="'350px'"
            :carouselItemsToShow="0.5"
            :price="'$2,000,000'"
            :details="'120m - 5 bedrooms - 2 bathrooms'"
            :propertyType="'Venta'"
            @click="openModal(sales)"
          />
          <ShowSales
            :pictures="pictures"
            :containerWidth="'350px'"
            :carouselItemsToShow="0.5"
            :price="'$2,000,000'"
            :details="'120m - 5 bedrooms - 2 bathrooms'"
            :propertyType="'Venta'"
          />
          <ShowSales
            :pictures="pictures"
            :containerWidth="'350px'"
            :carouselItemsToShow="0.5"
            :price="'$2,000,000'"
            :details="'120m - 5 bedrooms - 2 bathrooms'"
            :propertyType="'Venta'"
          />
          <ShowSales
            :pictures="pictures"
            :containerWidth="'350px'"
            :carouselItemsToShow="0.5"
            :price="'$2,000,000'"
            :details="'120m - 5 bedrooms - 2 bathrooms'"
            :propertyType="'Venta'"
          />
          <ShowSales
            :pictures="pictures"
            :containerWidth="'350px'"
            :carouselItemsToShow="0.5"
            :price="'$2,000,000'"
            :details="'120m - 5 bedrooms - 2 bathrooms'"
            :propertyType="'Venta'"
          />
        </div>
      </div>
    </section>
  </MainLayout>
</template>
