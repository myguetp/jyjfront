import { useQuery } from "vue-query";
import { KEY_QUERY_RESTROOM } from "./constants";
import { Api } from "@/services/api";

const api = new Api

export function useQueryRestroomData() {
  return useQuery({
    queryKey: [KEY_QUERY_RESTROOM],
    queryFn: () => api.getRestroom()
  })
}