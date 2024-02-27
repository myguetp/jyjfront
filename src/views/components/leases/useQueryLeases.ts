import { useQuery } from "vue-query";
import { KEY_QUERY_LEASES } from "./constants";
import { Api } from "@/services/api";

const api = new Api

export function useQueryLeases() {
  const queryKey = [KEY_QUERY_LEASES];

  return useQuery({
    queryKey,
    queryFn: () => api.getCommerce(),
  });
}