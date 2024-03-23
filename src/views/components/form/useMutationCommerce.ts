import type { CommerceRequest } from "@/services/request";
import { Api } from "@/services/api";
import { KEY_MUTATION_COMMERCE } from "./constants";
import { useMutation } from "vue-query";

const api = new Api();

export function useMutationComerce() {
  return useMutation({
    mutationKey: [KEY_MUTATION_COMMERCE],
    mutationFn: (request: CommerceRequest) => {
      return api.sendCommerce({
        ...request
      });
    },
    onSuccess: (data) => {
      if (data.status >= 200 && data.status < 300) {
        alert('envío de forma exitosa');
      }
    }
  });
}