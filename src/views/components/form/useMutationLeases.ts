import type { LeasesRequest } from "@/services/request";
import { KEY_MUTATION_LEASES } from "./constants";
import { Api } from "@/services/api";
import { useMutation } from "vue-query";

const api = new Api();

export function useMutationLeases() {
  return useMutation({
    mutationKey: [KEY_MUTATION_LEASES],
    mutationFn: (request: LeasesRequest) => {
      return api.sendLeases({
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