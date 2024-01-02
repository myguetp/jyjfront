<template>
  <section class="flex items-center justify-center w-full">
    <div>
      <section class="flex gap-10">
        <input class="bg-gray-300 w-96 p-4" placeholder="Ubicación del inmueble" />
        <div>Filtros</div>
      </section>
      <section class="flex gap-10 mt-4">
        <IButton class="bg-gray-300 p-2" shadow>Apartamento</IButton>
        <IButton class="bg-gray-300 p-2" shadow>Casa</IButton>
        <IButton class="bg-gray-300 p-2" shadow>Finca</IButton>
        <IButton class="bg-gray-300 p-2" shadow>Local</IButton>
        <IButton class="bg-gray-300 p-2" shadow>Oficina</IButton>
        <IButton class="bg-gray-300 p-2" shadow>Bodega</IButton>
        <IButton class="bg-gray-300 p-2" shadow>Lote</IButton>
        <IButton class="bg-gray-300 p-2" shadow>Habitación</IButton>
        <IButton class="bg-gray-300 p-2" shadow>Apartaestudio</IButton>
        <IButton class="bg-gray-300 p-2" shadow>Edificio</IButton>
      </section>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { ButtonGroup as IButton } from "flowbite-vue";
export default defineComponent({
  components: { IButton },
  setup() {
    return { IButton };
  },
});
</script>
