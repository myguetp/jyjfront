<script lang="ts">
import IconExit from'@/components/icons/IconExit.vue'
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
    <div class="absolute bg-black opacity-50">
    </div>
    <div class="bg-white p-6 rounded shadow-md w-[650px] h-[400px] drop-shadow-xl">
      <div class="flex justify-end">
      <button @click="closeModal" ><IconExit /> </button>
      </div>
      <div class="flex justify-center ">
      <h2 class="text-2xl">{{titulo}}</h2>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

