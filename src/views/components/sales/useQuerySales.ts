import { useQuery } from "vue-query";
import { KEY_QUERY_SALES } from "./constants";
import { Api } from "@/services/api";

const api = new Api();

export function useQuerySales(stratum?: string) {
  const queryKey = stratum ? [KEY_QUERY_SALES, { stratum }] : [KEY_QUERY_SALES];

  return useQuery({
    queryKey,
    queryFn: () => api.getSales(stratum),
  });
}