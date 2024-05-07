import React from 'react';
import axios, { AxiosRequestConfig } from 'axios';

import { env } from '@/config/env';

export default function useFetch<T>(
  method: 'get' | 'post' | 'put' | 'delete' | 'patch' = 'get',
  url: string,
  options?: AxiosRequestConfig<any>,
) {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | Array<any> | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await axios[method]<T>(
          env.api.baseUrl + url,
          options?.data,
          options,
        );
        setData(response.data);
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          if (error.response.status === 422) {
            setError(error.response.errors);
          } else {
            setError(error.message);
          }
        } else {
          setError(String(error));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}
