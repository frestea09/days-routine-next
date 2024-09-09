"use client";
import useSWR from "swr";
import { fetcher } from "./fetcher";

export const useFetch = (url: string) => {
  const { data, error, isLoading, mutate } = useSWR(url, fetcher);
  return { data, error, isLoading, mutate };
};
