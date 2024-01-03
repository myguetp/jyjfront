import type { SalesRequest } from "@/services/request";
import { KEY_MUTATION_SALES } from "./constants";
import { Api } from "@/services/api";
import { useMutation } from "vue-query";

const api = new Api();

export function useMutationSales() {
  return useMutation({
    mutationKey: [KEY_MUTATION_SALES],
    mutationFn: (request: SalesRequest) => {
      return api.sendSales({
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