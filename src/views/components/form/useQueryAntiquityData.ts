import { useQuery } from "vue-query";
import { KEY_QUERY_ANTIQUITY } from "./constants";
import { Api } from "@/services/api";

const api = new Api

export function useQueryAntiquityData() {
  return useQuery({
    queryKey: [KEY_QUERY_ANTIQUITY],
    queryFn: () => api.getAntiquity()
  })
}