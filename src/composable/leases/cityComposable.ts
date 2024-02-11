import { useQuery } from "vue-query";
import { KEY_QUERY_CITY_COUNTRY } from "./constants";
import { Api } from "@/services/api";

const api = new Api

export function useQueryCityData() {
  return useQuery({
    queryKey: [KEY_QUERY_CITY_COUNTRY],
    queryFn: () => api.getCountryCity()
  })
}