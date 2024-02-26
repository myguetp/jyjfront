<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

import TheButtonjyj from "../../../components/TheButtonjyj.vue";
import IconFacebook from "../../../components/icons/IconFacebook.vue";
import IconInstagram from "../../../components/icons/IconInstagram.vue";
import IconPinterest from "../../../components/icons/IconPinterest.vue";
import IconYoutube from "../../../components/icons/IconYouTube.vue";
import IconLinkedin from "../../../components/icons/IconLinkedin.vue";
import IconThreads from "../../../components/icons/IconThreads.vue";
import IconTikTok from "../../../components/icons/IconTikTok.vue";
import ShowFirstPicture from "./ShowFirstPicture.vue";

export default defineComponent({
  components: {
    TheButtonjyj,
    IconFacebook,
    IconInstagram,
    IconPinterest,
    IconYoutube,
    IconLinkedin,
    ShowFirstPicture,
    IconThreads,
    IconTikTok
  },
  setup() {
    const apiData = ref([]);
    const pictures = [
      {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
        alt: "file 2",
        text: "hola",
      },
      {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
        alt: "file 3",
        text: "que",
      },
      {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
        alt: "file 4",
        text: "mas",
      },
      {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
        alt: "file 5",
        text: "chao",
      },
    ];

    onMounted(() => {});

    return { apiData, pictures };
  },
});
</script>

<template>
  <section class="block">
    <div class="block md:flex lg:flex items-center justify-center gap-10">
      <div class="block items-center w-auto lg:w-[850px] p-2 lg:p-10 ml-2 lg:ml-6">
        <div class="block items-center ml-2 lg:ml-16">
          <h2 class="text-[40px] lg:text-[50px] text-[#ad8a1f] font-bold">COMPLEXES</h2>
          <h2 class="text-[32px] lg:text-[40px] font-bold">Creamos produtos</h2>
          <h2 class="text-[32px] lg:text-[40px] font-bold">digitales para tu conjunto</h2>
          <h2 class="text-[32px] lg:text-[40px] font-bold">y/o edificioresidencial</h2>
          <p>Diseñamos y desarrollamos las apps siempre pensando en los propietarios</p>
          <div class="mt-4 font-bold">
            <TheButtonjyj texto="Trabajemos juntos" />
          </div>
        </div>
        <div class="hidden lg:block mt-60">
          <div class="flex justify-center items-center">
            <p>Encuentranos en</p>
          </div>
          <div class="block lg:flex justify-center items-center mb-10 mt-2 w-full">
            <section class="flex gap-4 ml-4 lg:ml-0 lg:gap-20">
              <a class="cursor-pointer" href="https://www.facebook.com/profile.php?id=61556012792571" target="_blank"> <IconFacebook /> </a>
              <a class="cursor-pointer" href="https://www.instagram.com/jjcomplexes/" target="_blank"> <IconInstagram /> </a>
              <a class="cursor-pointer" href="https://co.pinterest.com/jjcomplexes/" target="_blank"> <IconPinterest /> </a>
              <a class="cursor-pointer" href="https://www.youtube.com/channel/UC4atKKd6Sag35wN_eR9sz3w" target="_blank"> <IconYoutube /> </a>
              <a class="cursor-pointer" href="https://www.linkedin.com/in/jjcomplexes-undefined-0b8aab2b1/" target="_blank"> <IconLinkedin /> </a>
              <a class="cursor-pointer" href="https://www.threads.net/@jjcomplexes" target="_blank"> <IconThreads /> </a>
              <a class="cursor-pointer" href="https://www.tiktok.com/@jjcomplexes" target="_blank"> <IconTikTok /> </a>
            </section>
          </div>
        </div>
      </div>
      <div class="block w-full lg:w-[700px] border border-gray-300">
        <ShowFirstPicture :pictures="pictures" />
      </div>
    </div>
    <Siningtj />
  </section>
</template>
