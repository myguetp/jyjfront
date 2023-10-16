import http from "../http";

function getSales() {
  const route = 'http://localhost:3001/sales'
  return http.get(route)
}

export {
  getSales
}