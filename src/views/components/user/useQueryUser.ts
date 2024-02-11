import { useQuery } from "vue-query";
import { Api } from "@/services/api";
import { KEY_QUERY_USER } from "./constants";

const api = new Api

export function useQueryUser(idUser: string) {

  return useQuery({
    queryKey: [KEY_QUERY_USER],
    queryFn: () => api.getUser(idUser)
  })
}