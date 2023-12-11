import { useQuery } from "vue-query";
import { KEY_QUERY_SALES } from "./constants";
import { Api } from "@/services/api";

const api = new Api

export function useQuerySales() {
  return useQuery({
    queryKey: [KEY_QUERY_SALES],
    queryFn: () => api.getSales()
  })
}