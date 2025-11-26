import axios from 'axios';

import { API_RESPONSE } from '@/types/api.types';
const BASE_URL = 'https://api.lunetwork.io';
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 50000,
});

api.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
interface RequestConfig<D> {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  data?: D;
  params?: any;
  headers?: Record<string, string>;
}

export const makeRequest = async <T, D = any>({
  url,
  method,
  data,
  params,
  headers,
}: RequestConfig<D>) => {
  try {
    const response = await api<API_RESPONSE<T>>({
      url,
      method,
      data,
      params,
      headers,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(`Error making request to ${url}:`, error);
      if (!error.response) {
        throw new Error(
          'No internet connection. Please check your network and try again.'
        );
      }
      if (error.response?.status === 404) {
        throw new Error('Resource not found. Please  try again.');
      }
      if (error.response?.status === 401) {
        localStorage.removeItem('token');
        // redirect to login page or handle unauthorized access  }
        throw error.response?.data || error.message;
      }
      throw error.response?.data || error.message;
    } else {
      let err = error as Error;
      // Handle non-Axios errors
      console.log('Unexpected error:', error);
      throw err.message || err.cause || 'An unexpected error occurred';
    }
  }
};
