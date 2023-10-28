<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { getSales } from '../../../services/api/SalesSerive'

import TheButtonjyj from '@/components/TheButtonjyj.vue'
import IconFacebook from '@/components/icons/IconFacebook.vue'
import IconInstagram from '@/components/icons/IconInstagram.vue'
import IconPinterest from '@/components/icons/IconPinterest.vue'
import IconYoutube from '@/components/icons/IconYouTube.vue'
import IconLinkedin from '@/components/icons/IconLinkedin.vue'


export default defineComponent({
  components: { TheButtonjyj, IconFacebook, IconInstagram, IconPinterest, IconYoutube, IconLinkedin },
  setup() {

    const apiData = ref([])
    const fetchData = async () => {
      const res = await getSales();
      const data = await res
      console.log(data)
    } 
    onMounted(() => {
      fetchData()
    })

    return {fetchData, apiData}
  },
})
</script>

<template>
  <section class="block">
    <div class="flex  items-center gap-10 ">
      <div class="flex items-center w-[850px] p-10">
        <div class="block items-center ml-16">
          <h2 class="text-[40px] font-bold">Creamos produtos </h2>
          <h2 class="text-[40px] font-bold">digitales para tu conjunto </h2>
          <h2 class="text-[40px] font-bold">y/o edificioresidencial</h2>
          <p>Diseñamos y desarrollamos las apps siempre pensando en los propietarios</p>
          <div class="mt-4 font-bold">
          <TheButtonjyj texto="Trabajemos juntos" />
          </div>
        </div>
      </div>
      <div>
        <img src="@/assets/img/firstImage.jpg" alt="" class="w-[900px] h-[650px] rounded-l-[200px]">
      </div>
    </div>
  <footer class="mt-10">
    <div class="flex justify-center items-center ">
    <p>Encuentranos en</p>
    </div>
    <div class="flex justify-center items-center mb-10 mt-2">
      <section class="flex gap-20">
        <a class="cursor-pointer" href="#"> <IconFacebook /> </a>
        <a class="cursor-pointer" href="#">  <IconInstagram /> </a>
        <a class="cursor-pointer" href="#"> <IconPinterest /> </a>
        <a class="cursor-pointer" href="#"> <IconYoutube /> </a>
        <a class="cursor-pointer" href="#"> <IconLinkedin /> </a>
      </section>
    </div>
  </footer>
  <Siningtj />
  </section>
</template>../../../services/api/SalesSerive