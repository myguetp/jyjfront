<template>
  <section
    class="shadow-inner box-shadow border hover:border-[#445c64] rounded-md"
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
    <div class="flex justify-between gap-5 m-2">
      <p class="font-bold">{{ city }} - {{ neighborhood }}</p>
      <TheButtonjyj
        class="bg-gray-300 font-bold"
        texto="Ver mas"
        :tamanio="'sm'"
        @click="OnClick()"
      />
    </div>
    <div class="mt-2 ml-4">
      <p class="font-bold">$ {{ price }}</p>
      <p class="font-bold">{{ administration }}</p>
      <p>{{ details }}</p>
      <p class="font-bold">{{ propertyType }}</p>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import TheButtonjyj from "../../../components/TheButtonjyj.vue";
import "vue3-carousel/dist/carousel.css";
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
      type: Number,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    administration: {
      type: String,
      required: false,
    },
    neighborhood: {
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
  emits: ["click"],
  setup(props, { emit }) {
    const OnClick = () => emit("click");

    return { OnClick, props };
  },
});
</script>
