<script lang="ts">
import { defineComponent } from 'vue'
import MainLayout from '../layouts/MainLayout.vue'
import FilterSales from './components/sales/FiltersSales.vue'
import ShowSales from './components/sales/ShowSales.vue'
import { useQuerySales } from './components/sales/useQuerySales';

export default defineComponent({
  components: {MainLayout, FilterSales, ShowSales},
  setup() {
    const { data } = useQuerySales()
    

    return { data}
  },
})
</script>
<template>
  <MainLayout>
    <FilterSales />
    <div v-for="item in data.data" :key="item.id" class="flex gap-6 m-10">
    <ShowSales 
      :pictures="item.picture"
      :containerWidth="'350px'"
      :carouselItemsToShow="0.5"
      :price= item.price
      :details="`${item.description} - ${item.neigborhood}`"
      :otherInfo="`${item.price} - ${item.room}rm - ${item.restroom}rs`"
      :propertyType="item.ofert === '2' ? 'Venta' : 'Arriendo'"
    />
    </div>
  </MainLayout>
</template>