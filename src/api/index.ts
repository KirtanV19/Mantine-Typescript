import client, { METHODS } from "./client";

export const api = {
  users: {
    getAll: ({ data, ...configs }: { data?: any; [key: string]: any }) =>
      client({ url: "/users", data, ...configs }),
    patch: ({
      id,
      data,
      ...configs
    }: {
      id?: number;
      data?: any;
      [key: string]: any;
    }) =>
      client({ method: METHODS.PATCH, url: `/users/${id}`, data, ...configs }),
  },
  tasks: {
    getAll: ({ data, ...configs }: { data?: any; [key: string]: any }) =>
      client({
        url: "/tasks",
        data,
        ...configs,
      }),
  },
};
