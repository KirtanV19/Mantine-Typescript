import client, { METHODS } from "./client";

export const api = {
  users: {
    getAll: ({ data, ...configs }: { data?: any; [key: string]: any }) =>
      client({ url: "/users", data, ...configs }),
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
