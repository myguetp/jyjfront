<template>
  <section
    class="shadow-inner box-shadow border hover:border-[#445c64] rounded-md ml-4 mt-4"
    :style="{ width: containerWidth, padding: containerPadding, maxWidth: '100%' }"
  >
    <div class="w-full">
      <carousel :items-to-show="carouselItemsToShow">
        <slide class="w-full" v-for="(picture, index) in pictures" :key="index">
          <img
            :src="picture.src"
            :alt="picture.alt"
            :style="{ width: pictureWidth, height: pictureHeight, }"
          />
        </slide>

        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>
    <div class="flex justify-between gap-5 m-2">
      <p class="font-bold">{{ names }}</p>
      <TheButtonjyj
        class="bg-gray-300 font-bold"
        texto="Ver mas"
        :tamanio="'sm'"
        @click="OnClick()"
      />
    </div>
    <div class="mt-2 ml-4">
      <p class="font-bold">{{ contact }}</p>
      <p class="font-bold">{{ mail }}</p>
      <p>{{ phoneNum }}</p>
      <p class="font-bold">{{ typeService }}</p>
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
      default: "250px",
    },
    pictureHeight: {
      type: String,
      default: "290px",
    },
    contact: {
      type: String,
      required: true,
    },
    names: {
      type: String,
      required: true,
    },
    mail: {
      type: String,
      required: false,
    },
  
    phoneNum: {
      type: String,
      required: true,
    },
    typeService: {
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
