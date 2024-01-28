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
    <section class="block md:flex lg:flex p-1 gap-4 w-full">
      <div class="box-shadow p-2 w-[20%] h-auto">
        <FilterSales />
      </div>
      <div
        class="w-[90%] h-auto rounded-md shadow snap-y overflow-auto flex flex-col ml-4 lg:ml-0"
      >
        <div class="block md:flex lg:flex gap-6 md:m-5 lg:m-5 flex-wrap">
          <ShowSales
            v-for="sales in allsales.data"
            :key="sales.id"
            :pictures="pictures"
            :containerWidth="'350px'"
            :carouselItemsToShow="0.5"
            :price="sales.price ?? 0"
            :administration="sales.administration ?? 0"
            :neighborhood="sales.neigborhood ?? ''"
            :details="`${sales.restroom ?? 0} - ${sales.room ?? 0} - ${
              sales.parking ?? 0
            } - ${sales.area ?? 0} `"
            :propertyType="'Venta'"
            @click="openModal(sales)"
          />
        </div>
      </div>
    </section>
  </MainLayout>
</template>
