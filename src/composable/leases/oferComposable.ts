import { useQuery } from "vue-query";
import { KEY_QUERY_OFERT } from "./constants";
import { Api } from "@/services/api";

const api = new Api

export function useQueryOferData() {
  return useQuery({
    queryKey: [KEY_QUERY_OFERT],
    queryFn: () => api.getOfert()
  })
}