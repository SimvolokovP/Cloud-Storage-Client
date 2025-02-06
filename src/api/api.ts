import axios from "axios";
import nookies from "nookies";

const host = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
});

const authHost = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
});

authHost.interceptors.request.use(function (config) {
  //   const token = localStorage.getItem("token");
  const cookies = nookies.get();
  const _token = cookies._token;
  config.headers.Authorization = _token ? `Bearer ${_token}` : "";
  return config;
});

export { host, authHost };
