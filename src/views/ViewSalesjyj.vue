<script lang="ts">
import { useRouter } from 'vue-router'
import { defineComponent, ref } from 'vue'
import MainLayout from '../layouts/MainLayout.vue'
import FilterSales from './components/sales/FiltersSales.vue'
import ShowSales from './components/sales/ShowSales.vue'
import { useQuerySales } from './components/sales/useQuerySales'
import TheButtonjyj from '../components/TheButtonjyj.vue'
import Modaljyj from '../components/Modaljyj.vue'
import { useSaleStore } from './components/form/store/saleStore'

export default defineComponent({
  components: {
    MainLayout,
    FilterSales,
    ShowSales,
    TheButtonjyj,
    Modaljyj
  },
  setup() {
    const { data: allsales } = useQuerySales()

    const pictures = [
      {
        src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
        alt: 'file 2'
      },
      {
        src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
        alt: 'file 3'
      },
      {
        src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
        alt: 'file 4'
      },
      {
        src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
        alt: 'file 5'
      }
    ]

    const router = useRouter()

    const modalMap = ref(false)

    const storeSale = useSaleStore()

    const summaryInfo = (
      ofert: string,
      neighborhood: string,
      city: string,
      country: string,
      property: string,
      stratum: string,
      price: number,
      room: string,
      restroom: string,
      age: string,
      administration: string,
      area: number,
      description: string,
      parking: string
    ) => {
      storeSale.$patch({ ofert: ofert })
      storeSale.$patch({ neighborhood: neighborhood })
      storeSale.$patch({ city: city })
      storeSale.$patch({ country: country })
      storeSale.$patch({ property: property })
      storeSale.$patch({ stratum: stratum })
      storeSale.$patch({ price: price })
      storeSale.$patch({ room: room })
      storeSale.$patch({ restroom: restroom })
      storeSale.$patch({ age: age })
      storeSale.$patch({ administration: administration })
      storeSale.$patch({ area: area })
      storeSale.$patch({ description: description })
      storeSale.$patch({ parking: parking })
      router.push({ name: 'InfoSummary' })
    }

    const openMap = () => {
      modalMap.value = true
    }

    return {
      pictures,
      allsales,
      router,
      openMap,
      modalMap,
      summaryInfo,
      storeSale
    }
  }
})
</script>
<template>
  <MainLayout>
    <section class="block md:flex lg:flex p-1 gap-4 w-full lg:ml-24">
      <div class="box-shadow p-2 w-[20%] h-auto">
        <TheButtonjyj class="bg-gray-300" texto="mapa" :tamanio="'sm'" @click="openMap" />
        <FilterSales />
      </div>
      <div class="w-[90%] h-auto rounded-md shadow snap-y overflow-auto flex flex-col ml-4 lg:ml-0">
        <div class="block md:flex lg:flex gap-6 md:m-5 lg:m-5 flex-wrap">
          <ShowSales
            v-for="sales in allsales?.data ?? []"
            :key="sales._id ?? 0"
            :city="sales.city ?? ''"
            :pictures="pictures"
            :containerWidth="'350px'"
            :carouselItemsToShow="0.5"
            :price="sales.price ?? 0"
            :neighborhood="sales.neighborhood ?? ''"
            :details="`${sales.area ?? 0}mt - ${sales.room ?? 0}ha - ${sales.restroom ?? 0}ba - ${
              sales.parking ?? 0
            }pa`"
            :propertyType="`${
              sales.property === '1'
                ? 'Apartamento'
                : '' || sales.property === '2'
                ? 'Casa'
                : '' || sales.property === '3'
                ? 'Finca'
                : '' || sales.property === '4'
                ? 'Oficina'
                : '' || sales.property === '5'
                ? 'Local'
                : '' || sales.property === '6'
                ? 'Bodega'
                : '' || sales.property === '7'
                ? 'Lote'
                : '' || sales.property === '8'
                ? 'Habitación'
                : '' || sales.property === '9'
                ? 'Consultorio'
                : '' || sales.property === '10'
                ? 'Edificio'
                : ''
            } en ${sales.ofert === '1' ? 'Venta' : 'Arriendo'}`"
            @click="summaryInfo(
              sales.ofert,
              sales.neighborhood,
              sales.city,
              sales.country,
              sales.property,
              sales.stratum,
              sales.price,
              sales.room,
              sales.restroom,
              sales.age,
              sales.administration,
              sales.area,
              sales.description,
              sales.parking,
              )"
          />
        </div>
      </div>
    </section>
    <Modaljyj :isOpen="modalMap" @update:is-open="modalMap = $event" titulo="COMPLEXES">
      <div>
        <p>hola ita</p>
      </div>
    </Modaljyj>
  </MainLayout>
</template>
