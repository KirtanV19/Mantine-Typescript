import axios from "axios";

export const METHODS = {
  POST: "post",
  GET: "get",
  DELETE: "delete",
  PUT: "put",
  PATCH: "patch",
  HEAD: "head",
  OPTIONS: "options",
};

const axiosConfig = {
  baseURL: "http://localhost:3000",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
};

const axiosInstance = axios.create(axiosConfig);

axiosInstance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

const client = ({
  method = METHODS.GET,
  url = "",
  data = undefined as any,
  ...rest
}: {
  method?: string;
  url?: string;
  data?: any;
  [key: string]: any;
}) => {
  return axiosInstance({ method, url, data, withCredentials: true, ...rest });
};

export default client;
