<template>
  <section
    class="shadow-inner box-shadow cursor-pointer border hover:border-[#445c64] rounded-md"
    :style="{ width: containerWidth, padding: containerPadding, maxWidth: '100%' }"
  >
    <div class="w-full">
      <carousel :items-to-show="carouselItemsToShow">
        <slide class="w-full" v-for="(file, index) in pictures" :key="index">
          <img
            :src="file.src"
            :alt="file.alt"
            :style="{ width: pictureWidth, height: pictureHeight }"
          />
        </slide>

        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>
    <div class="mt-2 ml-4">
      <TheButtonjyj class="bg-gray-300" texto="Contancto" :tamanio="'sm'" />
      <p class="font-bold">{{ price }}</p>
      <p>{{ details }}</p>
      <p class="font-bold">{{ propertyType }}</p>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import "vue3-carousel/dist/carousel.css";
import TheButtonjyj from "../../../components/TheButtonjyj.vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default defineComponent({
  components: {
    Carousel,
    TheButtonjyj,
    Slide,
    Pagination,
    Navigation,
  },
  props: {
    pictures: {
      type: Array as PropType<{ src: string; alt: string }[]>,
      required: true,
    },
    containerWidth: {
      type: String,
      default: "290px",
    },
    containerPadding: {
      type: String,
      default: "2px",
    },
    carouselItemsToShow: {
      type: Number,
      default: 0.7,
    },
    pictureWidth: {
      type: String,
      default: "max-content",
    },
    pictureHeight: {
      type: String,
      default: "290px",
    },
    price: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    propertyType: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>
