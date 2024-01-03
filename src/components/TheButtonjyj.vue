<script lang="ts">
import { computed, defineComponent, h } from "vue";

export default defineComponent({
  props: {
    texto: {
      type: String,
      required: true,
    },
    clase: {
      type: String,
      default: "", // Valor predeterminado
    },
    tamanio: {
      type: String as () => "sm" | "md" | "lg", // Anotación de tipo
      default: "md", // Tamaño predeterminado
    },
    tipo: {
      type: String,
      default: "button", // Tipo predeterminado
    },
    icon: {
      // Cambiado a tipo Object para aceptar componentes Vue
      type: Object,
      default: null,
    },
  },
  emits: ["click"],
  setup(props, { emit }) {
    const OnClick = () => emit("click");

    const iconModal = computed(() => {
      // Cambiado a usar h para renderizar el componente de icono
      return props.icon ? h(props.icon) : null;
    });

    const tamanioClass = computed(() => {
      // Mapear el tamaño a clases de estilo
      const sizeMap = {
        sm: "w-[120px] h-[30px]",
        md: "w-[220px] h-[50px]",
        lg: "w-[320px] h-[70px]",
      };
      return sizeMap[props.tamanio] || "";
    });

    return { OnClick, tamanioClass, iconModal };
  },
});
</script>

<template>
  <button
    :type="'button'"
    :class="[clase, 'bg-[#445c64] text-white rounded-md font-bold', tamanioClass]"
    @click="OnClick"
  >
    {{ iconModal }}
    {{ texto }}
  </button>
</template>
