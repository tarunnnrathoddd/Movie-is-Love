import axios from "axios";

const isDev = import.meta.env.MODE === "development";

// export const apiServer = isDev ? "http://192.168.166.224:1000" : "https://Movie-is-Love-api.vercel.app"
export const apiServer = isDev
  ? "http://localhost:1000"
  : "https://Movie-is-Love-api.vercel.app";

export const api = axios.create({
  baseURL: apiServer,
});

export function getApi() {
  let token = localStorage.getItem("token");
  api.defaults.headers["authorization"] = token;
  return api;
}
