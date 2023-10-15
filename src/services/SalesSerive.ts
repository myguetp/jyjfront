import http from "./http";

function getSales() {
  const route = 'http://localhost:3001/sales'
  return http.get(route)
}

function getOfert() {
  const route = 'http://localhost:3001/ofert'
  return http.get(route)
}

export {
  getSales,
  getOfert
}