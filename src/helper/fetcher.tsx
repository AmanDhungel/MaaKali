import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = "http://localhost:3000/api/";

interface ApiProps {
  url: string;
  params?: string;
}

export const GET = async <T,>(url: string): Promise<T> => {
  try {
    const response = await axios.get<T>(`${BASE_URL}${url}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message, {
        cause: error.cause,
      });
    }
    throw new Error("An error occurred.");
  }
};

export const POST = async <T, R>(
  url: string,
  data: R,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await axios.post<T>(`${BASE_URL}${url}`, data, config);
  return response.data;
};

export const PATCH = async <T, R>(
  url: string,
  data: R,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await axios.patch<T>(`${BASE_URL}${url}`, data, config);
  return response.data;
};

export const PUT = async <T, R>(
  url: string,
  data: R,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await axios.put<T>(`${BASE_URL}${url}`, data, config);
  return response.data;
};

export const DELETE = async <T,>(url: string): Promise<T> => {
  const response = await axios.delete<T>(`${BASE_URL}${url}`);
  return response.data;
};
