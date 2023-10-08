/**
 * @todo post, put 요청 메소드의 데이터 타입 지정
 */

import axios, { Axios, AxiosRequestConfig } from "axios";
import { APIResponse } from "../store/type/commonResponse";

// axios 인스턴스 생성
export const client: Axios = axios.create({
  baseURL:
    import.meta.env.VITE_build == "dev"
      ? "http://localhost:3000"
      : "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Get 메소드
 * @param url url API 서버에 요청하는 경로
 * @param config config API 서버에 요청할 때 사용할 axios 설정
 * @returns get 요청 후 받아온 응답
 */
export const getData = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<APIResponse<T>> => {
  try {
    const response = await client.get<APIResponse<T>>(url, config);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error(String(error));
    }
  }
};

/**
 * Post 메소드
 * @param url url API 서버에 요청하는 경로
 * @param data data post 요청에 담아 보낼 데이터
 * @param config config API 서버에 요청할 때 사용할 axios 설정
 * @returns post 요청 후 받아온 응답
 */
export const postData = async <T>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig
): Promise<APIResponse<T>> => {
  try {
    const response = await client.post<APIResponse<T>>(url, data, config);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error(String(error));
    }
  }
};

/**
 * put 메소드
 *@param url url API 서버에 요청하는 경로
 * @param data data put 요청에 담아 보낼 데이터
 * @param config config API 서버에 요청할 때 사용할 axios 설정
 * @returns put 요청 후 받아온 응답
 */
export const putData = async <T>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig
): Promise<APIResponse<T>> => {
  try {
    const response = await client.put<APIResponse<T>>(url, data, config);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error(String(error));
    }
  }
};

/**
 *
 * @param url url API 서버에 요청하는 경로
 * @param config config API 서버에 요청할 때 사용할 axios 설정
 * @returns delete 요청 후 받아온 응답
 */
export const deleteData = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<APIResponse<T>> => {
  try {
    const response = await client.delete<APIResponse<T>>(url, config);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error(String(error));
    }
  }
};
