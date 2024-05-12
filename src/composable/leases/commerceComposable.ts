import { useQuery } from "vue-query";
import { Api } from "@/services/api";
import { KEY_QUERY_COMMERCES } from "./constants";

const api = new Api

export function useQueryCommercesData() {
  return useQuery({
    queryKey: [KEY_QUERY_COMMERCES],
    queryFn: () => api.getCommerces()
  })
}