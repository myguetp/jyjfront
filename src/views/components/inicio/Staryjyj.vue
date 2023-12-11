<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

import TheButtonjyj from '../../../components/TheButtonjyj.vue'
import IconFacebook from '../../../components/icons/IconFacebook.vue'
import IconInstagram from '../../../components/icons/IconInstagram.vue'
import IconPinterest from '../../../components/icons/IconPinterest.vue'
import IconYoutube from '../../../components/icons/IconYouTube.vue'
import IconLinkedin from '../../../components/icons/IconLinkedin.vue'


export default defineComponent({
  components: { TheButtonjyj, IconFacebook, IconInstagram, IconPinterest, IconYoutube, IconLinkedin },
  setup() {

    const apiData = ref([])
   
    onMounted(() => {
      
    })

    return {apiData}
  },
})
</script>

<template>
  <section class="block">
    <div class="flex items-center gap-10 ">
      <div class="flex items-center w-[850px] p-2 lg:p-10 ml-2 lg:ml-6">
        <div class="block items-center ml-2 lg:ml-16">
          <h2 class="text-[32px] lg:text-[40px] font-bold">Creamos produtos </h2>
          <h2 class="text-[32px] lg:text-[40px] font-bold">digitales para tu conjunto </h2>
          <h2 class="text-[32px] lg:text-[40px] font-bold">y/o edificioresidencial</h2>
          <p>Diseñamos y desarrollamos las apps siempre pensando en los propietarios</p>
          <div class="mt-4 font-bold">
          <TheButtonjyj texto="Trabajemos juntos" />
          </div>
        </div>
      </div>
      <div class="hidden lg:block">
        <img src="@/assets/img/firstImage.jpg" alt="" class="w-[1000px] h-[650px] rounded-l-[200px]">
      </div>
    </div>
  <footer class="mt-10">
    <div class="flex justify-center items-center ">
    <p>Encuentranos en</p>
    </div>
    <div class="block lg:flex justify-center items-center mb-10 mt-2 w-full">
      <section class="flex gap-4 ml-4 lg:ml-0 lg:gap-20 ">
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
</template>