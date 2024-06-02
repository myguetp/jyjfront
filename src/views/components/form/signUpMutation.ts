import type { RegisterRequest } from "@/services/request";
import { KEY_MUTATION_REGISTER } from "./constants";
import { Api } from "@/services/api";
import { useMutation } from "vue-query";
import { useRouter } from "vue-router";
import { toast } from "vue3-toastify";
import 'vue3-toastify/dist/index.css'; // Importar el CSS de toastify

const api = new Api();

export function useMutationSignup() {
  const router = useRouter();

  return useMutation({
    mutationKey: [KEY_MUTATION_REGISTER],
    mutationFn: (request: RegisterRequest) => {
      return api.sendRegister({
        ...request
      });
    },
    onSuccess: (data) => {
      if (data.status === 201) {
        toast('Registro exitoso', {
          delay: 1000,
          rtl: true,
        });
        router.push({ name: 'Select' });
      } else if (data.status === 400) {
        toast('Vuelva a intentarlo', {
          delay: 1000,
          rtl: true,
        });
      }
    },
    onError: (error: any) => {
      // Verificar si el error tiene la propiedad "response" y manejarlo en consecuencia
      if (error.response && error.response.data && error.response.data.message) {
        toast(error.response.data.message, {
          delay: 1000,
          rtl: true,
        });
      } else if (error.message) {
        // Si no hay un mensaje de error específico del backend, mostrar el mensaje genérico del error
        toast(error.message, {
          delay: 1000,
          rtl: true,
        });
      } else {
        // Manejar otros casos de error
        toast('Ocurrió un error desconocido', {
          delay: 1000,
          rtl: true,
        });
      }
    }
  });
}