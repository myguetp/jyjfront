import { useQuery } from "vue-query";
import { KEY_QUERY_LEASES } from "./constants";
import { Api } from "@/services/api";

const api = new Api

export function useQueryLeases() {
  return useQuery({
    queryKey: [KEY_QUERY_LEASES],
    queryFn: () => api.getLeases()
  })
}