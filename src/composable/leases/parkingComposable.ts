import { useQuery } from "vue-query";
import { KEY_QUERY_PARKING } from "./constants";
import { Api } from "@/services/api";

const api = new Api

export function useQueryParkingData() {
  return useQuery({
    queryKey: [KEY_QUERY_PARKING],
    queryFn: () => api.getParking()
  })
}