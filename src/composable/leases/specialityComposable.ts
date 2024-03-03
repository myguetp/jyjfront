import { useQuery } from "vue-query";
import { KEY_QUERY_SPECIALITY } from "./constants";
import { Api } from "@/services/api";

const api = new Api

export function useQuerySpecialityData() {
  return useQuery({
    queryKey: [KEY_QUERY_SPECIALITY],
    queryFn: () => api.getSpeciality()
  })
}