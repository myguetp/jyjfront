
<template>
  <div>Gracias por hacernos parte de tui historia </div>
  <div>
    <Multiselect
      id="city"
      class="h-[68px] rounded-md"
      placeholder="Ciudad"
    />
  </div>
  <div>
    <Multiselect
      id="conjunto"
      class="h-[68px] rounded-md"
      placeholder="Conjunto"
    />
  </div>
  <div>
    <TheButtonjyj class="text-white font-bold" texto="Enviar" type="submit" />
  </div>

</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Multiselect from '@vueform/multiselect'
import TheButtonjyj from '@/components/TheButtonjyj.vue'


export default defineComponent({
  components: {Multiselect, TheButtonjyj},
  setup() {
    return {}
  },
})
</script>

<style src="@vueform/multiselect/themes/default.css">
#imagePreview img {
  max-width: 100px;
  margin-right: 10px;
  transition: transform 0.3s ease;
}

#imagePreview img:hover {
  transform: scale(2.2);
}

input[type='file'] {
  display: none;
}

/* Estilo del label personalizado */
.custom-file-upload {
  cursor: pointer;
  padding: 10px 15px;
  background-color: #007bff;
  color: #fff;
  border-radius: 5px;
}

/* Estilo cuando se pasa el cursor sobre el label */
.custom-file-upload:hover {
  background-color: #0056b3;
}

.multiselect {
  border-radius: 20px !important;
}
</style>