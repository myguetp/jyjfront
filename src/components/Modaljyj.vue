<script lang="ts">
import IconExit from'../components/icons/IconExit.vue'
export default {
  props: {
    isOpen: Boolean,
    titulo:{
      type: String,
      required: true
    }
  },
  components: { IconExit },
  setup(props, { emit }) {
    const closeModal = () => {
      emit('update:isOpen', false);
    };

    return {
      closeModal,
    }
  }
}
</script>
<template>
  <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center z-50">
    <div class="absolute bg-black opacity-60 w-full h-full"></div>
    <div class="bg-white p-6 rounded shadow-md w-full lg:w-[650px] h-auto drop-shadow-xl flex flex-col">
      <div class="flex justify-end shadow-sm">
        <div class="flex justify-center flex-1">
          <h2 class="text-2xl text-[#ad8a1f] font-bold">{{ titulo }}</h2>
        </div>
        <button @click="closeModal"><IconExit /></button>
      </div>
      
      <slot></slot>
    
    </div>
  </div>
</template>

