import { useQuery } from "vue-query";
import { KEY_QUERY_STRATUM } from "./constants";
import { Api } from "@/services/api";

const api = new Api

export function useQueryStratumData() {
  return useQuery({
    queryKey: [KEY_QUERY_STRATUM],
    queryFn: () => api.getStratum()
  })
}