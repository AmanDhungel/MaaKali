import axios, { AxiosRequestConfig } from "axios";

interface ApiProps {
  url: string;
  params?: string;
}

export const GET = async <T,>(url: string): Promise<T> => {
  try {
    const response = await axios.get<T>(`/api/${url}`);
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
  const response = await axios.post<T>(`/api/${url}`, data, config);
  return response.data;
};

export const PATCH = async <T, R>(
  url: string,
  data: R,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await axios.patch<T>(`/api/${url}`, data, config);
  return response.data;
};

export const PUT = async <T, R>(
  url: string,
  data: R,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await axios.put<T>(`/api/${url}`, data, config);
  return response.data;
};

export const DELETE = async <T,>(url: string): Promise<T> => {
  const response = await axios.delete<T>(`/api/${url}`);
  return response.data;
};
