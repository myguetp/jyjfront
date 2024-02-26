<template>
  <div class="w-auto lg:w-[700px] relative">
    <Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide">
      <Slide v-for="file in pictures" :key="file.alt">
        <div class="flex w-full">
          <img :src="file.src" :alt="file.alt" />
          <p class="absolute bottom-0 left-0 bg-black text-white p-2">
            {{ file.text }}
          </p>
        </div>
      </Slide>
    </Carousel>

    <Carousel
      id="thumbnails"
      :items-to-show="4"
      :wrap-around="true"
      v-model="currentSlide"
    >
      <Slide v-for="file in pictures" :key="file.alt">
        <div class="carousel__item" @click="slideTo(pictures.indexOf(file))">
          <img :src="file.src" :alt="file.alt" />
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import type { PropType } from "vue";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  components: {
    Carousel,
    Slide,
  },
  props: {
    pictures: {
      type: Array as PropType<{ src: string; alt: string; text: string }[]>, // Include 'text' property in the prop type
      required: true,
    },
  },

  setup() {
    const currentSlide = ref(0);

    const slideTo = (val: any) => {
      currentSlide.value = val;
    };

    return {
      currentSlide,
      slideTo,
    };
  },
});
</script>
