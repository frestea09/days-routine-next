import { axiosInstance } from "./axiosInstance";

export const createData = async (url: string, data: any) => {
  const response = await axiosInstance.post(url, data);
  console.log(response);
  return response.data;
};
