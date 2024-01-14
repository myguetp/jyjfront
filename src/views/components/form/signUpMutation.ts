import type { RegisterRequest } from "@/services/request";
import { KEY_MUTATION_REGISTER } from "./constants";
import { Api } from "@/services/api";
import { useMutation } from "vue-query";

const api = new Api();

export function useMutationSignup() {
  return useMutation({
    mutationKey: [KEY_MUTATION_REGISTER],
    mutationFn: (request: RegisterRequest) => {
      return api.sendRegister({
        ...request
      });
    },
    onSuccess: (data) => {
      if (data.status >= 200 && data.status < 300) {
        alert('envío de forma exitosa');
      }
    }
  })
}