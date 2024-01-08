import { useQuery } from "vue-query";
import { KEY_QUERY_ROOM } from "./constants";
import { Api } from "@/services/api";

const api = new Api

export function useQueryRoomData() {
  return useQuery({
    queryKey: [KEY_QUERY_ROOM],
    queryFn: () => api.getRoom()
  })
}