<script lang="ts">
import { defineComponent, ref } from 'vue'
import Modaljyj from '@/components/Modaljyj.vue'

export default defineComponent({
  components: { Modaljyj },
  setup() {
    const modalActive = ref(true)
    const toogleModal = () => {
      modalActive.value = !modalActive.value
    }
    return {modalActive, toogleModal}
  },
})
</script>

<template>
  <div>
    <Modaljyj :modalActive="modalActive">
      <div> hola </div>
    </Modaljyj>
  </div>
</template>
