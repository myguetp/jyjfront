<template>
  <section class="shadow-inner" :style="{ width: containerWidth, padding: containerPadding }">
    <div class="w-full">
      <carousel :items-to-show="carouselItemsToShow">
        <slide class="w-full" v-for="(picture, index) in pictures" :key="index">
          <img :src="picture.src" :alt="picture.alt" :style="{ width: pictureWidth, height: pictureHeight }" />
        </slide>

        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>
    <div class="mt-2">
      <p class="font-bold">{{ price }}</p>
      <p>{{ details }}</p>
      <p class="font-bold">{{ propertyType }}</p>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default defineComponent({
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation
  },
  props: {
    pictures: {
      type: Array as PropType<{ src: string; alt: string }[]>,
      required: true
    },
    containerWidth: {
      type: String,
      default: '290px'
    },
    containerPadding: {
      type: String,
      default: '2px'
    },
    carouselItemsToShow: {
      type: Number,
      default: 0.7
    },
    pictureWidth: {
      type: String,
      default: 'max-content'
    },
    pictureHeight: {
      type: String,
      default: '290px'
    },
    price: {
      type: String,
      required: true
    },
    details: {
      type: String,
      required: true
    },
    propertyType: {
      type: String,
      required: true
    }
  }
})
</script>