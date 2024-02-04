<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { useQueryLeases } from "./components/leases/useQueryLeases";
import MainLayout from "../layouts/MainLayout.vue";
import TheButtonjyjVue from "../components/TheButtonjyj.vue";

export default defineComponent({
  props: {
    _id: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    neigborhood: {
      type: String,
      required: true,
    },
    parking: {
      type: String,
      required: true,
    },
    stratum: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    room: {
      type: String,
      required: true,
    },
    restroom: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    administration: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  components: { MainLayout, TheButtonjyjVue },
  setup(props) {
    const allLeases = useQueryLeases();
    const leaseDetails = ref({});

    watch(
      () => allLeases.data.value,
      (newData) => {
        const selectedLease = newData.find((lease) => lease._id === props._id);
        if (selectedLease) {
          leaseDetails.value = selectedLease;
        }
      }
    );

    return { leaseDetails, allLeases };
  },
});
</script>

<template>
  <MainLayout>
    <section class="flex justify-center items-center">
      <div>
        <p>APARTAMENTO EN ARRIENDO</p>
        <p>{{ city }}, {{ neigborhood }}</p>
      </div>
    </section>
    <div>imagen</div>
    <div>
      <TheButtonjyjVue texto="contactame" />
      <p>Numero de habitaciones {{ room }}</p>
      <p>Numero de baños {{ restroom }}</p>
      <p>Numerp de parqueaderos {{ parking }}</p>
      <p>Estrato {{ stratum }}</p>
      <p>Area construida {{ area }}</p>
      <p>Antiguedad del inmueble {{ age }}</p>
      <p>Valor administracion {{ administration }}</p>
      <p>Valor {{ price }}</p>
      <p>{{ description }}</p>
    </div>
  </MainLayout>
</template>
