import { useQuery } from "vue-query";
import { KEY_QUERY_PROPERTY } from "./constants";
import { Api } from "@/services/api";

const api = new Api

export function useQueryPropertyData() {
  return useQuery({
    queryKey: [KEY_QUERY_PROPERTY],
    queryFn: () => api.getPropertyType()
  })
}