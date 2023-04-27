import { useEffect, useState } from 'react';
import { fetchDataFromApi } from '../api/api';

export const useFetch = (url: string) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    setLoading(true);

    try {
      fetchDataFromApi(url)
        .then((res) => {
          setData(res);
        });
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [url]);

  return { data, loading, error };
};
