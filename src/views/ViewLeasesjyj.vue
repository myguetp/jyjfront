<script lang="ts">
import MainLayout from "../layouts/MainLayout.vue";
import FiltersLeases from "./components/leases/FiltersLeases.vue";
import ShowLeases from "./components/leases/ShowLeases.vue";
import { useQueryLeases } from "./components/leases/useQueryLeases";

export default {
  components: {
    MainLayout,
    FiltersLeases,
    ShowLeases,
  },
  setup() {
    const { data: allLeases } = useQueryLeases();

    return { allLeases };
  },
};
</script>
<template>
  <MainLayout>
    <section class="block md:flex lg:flex p-1 gap-4 w-full">
      <div class="box-shadow p-2 w-[20%] h-auto">
        <FiltersLeases />
      </div>
     <div
        class="w-[90%] h-auto rounded-md shadow snap-y overflow-auto flex flex-wrap ml-4 lg:ml-0"
      >
        <template v-if="allLeases?.data?.length">
          <ShowLeases
            v-for="commerce in allLeases.data"
            :names="commerce.names"
            :mail="commerce.mail"
            :contact="commerce.contact"
            :key="commerce._id ?? 0"
            :phoneNum="commerce.phoneNum"
            :typeService="commerce.typeService"
            :pictures="commerce.files.map(file => ({ src: `http://localhost:3001/uploads/${file.filename}`, alt: file.originalname}))"
          />
        </template>
      </div>
    </section>
  </MainLayout>
</template>