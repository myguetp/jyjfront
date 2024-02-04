<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import MainLayout from "../layouts/MainLayout.vue";
import FilterLeases from "./components/leases/FiltersLeases.vue";
import ShowLeases from "./components/leases/ShowLeases.vue";
import { useQueryLeases } from "./components/leases/useQueryLeases";

export default defineComponent({
  components: { MainLayout, FilterLeases, ShowLeases },
  setup() {
    const { data: allLeases } = useQueryLeases();
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
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
        alt: "Picture 5",
      },
    ];

    const router = useRouter();

    const openSummary = async (
      _id: string,
      city: string,
      neigborhood: string,
      stratum: string,
      price: string,
      room: string,
      restroom: string,
      age: string,
      administration: string,
      area: string,
      description: string,
      parking: string
    ) => {
      router.push({
        name: "InfoSummary",
        params: {
          _id,
          city,
          neigborhood,
          stratum,
          price,
          room,
          restroom,
          age,
          administration,
          area,
          description,
          parking,
        },
      });
    };
    return { pictures, openSummary, allLeases };
  },
});
</script>
<template>
  <MainLayout>
    <section class="block md:flex lg:flex p-1 gap-4 w-full">
      <div class="box-shadow p-2 w-[20%] h-auto">
        <FilterLeases />
      </div>
      <div
        class="w-[90%] h-auto rounded-md shadow snap-y overflow-auto flex flex-wrap ml-4 lg:ml-0"
      >
        <div class="block md:flex lg:flex gap-6 md:m-5 lg:m-5 flex-wrap">
          <ShowLeases
            v-for="leases in allLeases.data"
            :key="leases._id"
            :city="leases.city"
            :pictures="pictures"
            :containerWidth="'350px'"
            :carouselItemsToShow="0.5"
            :price="leases.price ?? 0"
            :administration="leases.administration ?? 0"
            :neighborhood="leases.neigborhood ?? ''"
            :details="`${leases.restroom ?? 0} - ${leases.room ?? 0} - ${
              leases.parking ?? 0
            } - ${leases.area ?? 0} `"
            :propertyType="'Arriendo'"
            @click="
              openSummary(
                leases._id,
                leases.city,
                leases.neigborhood,
                leases.stratum,
                leases.price,
                leases.room,
                leases.restroom,
                leases.age,
                leases.administration,
                leases.area,
                leases.description,
                leases.parking
              )
            "
          />
        </div>
      </div>
    </section>
  </MainLayout>
</template>
