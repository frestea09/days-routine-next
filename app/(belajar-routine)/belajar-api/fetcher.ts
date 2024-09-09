import { axiosInstance } from "./axiosInstance";

export const fetcher = async (url: string) =>
  await axiosInstance.get(url).then((res) => res.data);
