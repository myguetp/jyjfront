<script lang="ts">
import { defineComponent } from 'vue'
import MainLayout from '../layouts/MainLayout.vue'
import FilterSales from './components/sales/FiltersSales.vue'
import ShowSales from './components/sales/ShowSales.vue'
import { useQuerySales } from './components/sales/useQuerySales';

export default defineComponent({
  components: {
    MainLayout, FilterSales, ShowSales
  },
  setup() {
    const { data, isLoading, isError } = useQuerySales()
    

    return {data, isLoading, isError}
  },
})
</script>
<template>
  <MainLayout>
    <div v-if="isLoading">Cargando...</div>
    <div v-else-if="isError">Error al cargar los datos</div>
    <div>
      <FilterSales />
      <div v-for="item in data.data" :key="item.id" class="flex gap-6 m-10">
        {{ item }}
        <ShowSales 
          :pictures="item.picture"
          :containerWidth="'350px'"
          :carouselItemsToShow="0.5"
          :price="item.price"
          :details="`${item.description} - ${item.neigborhood}`"
          :otherInfo="`${item.price} - ${item.room}rm - ${item.restroom}rs`"
          :propertyType="item.ofert === '2' ? 'Venta' : 'Arriendo'"
        />
        <!-- Accede al nombre de la primera imagen en item.picture -->
        <div>Nombre de la imagen: {{ item.picture[0].name }}</div>
      </div>
    </div>
  </MainLayout>
</template>