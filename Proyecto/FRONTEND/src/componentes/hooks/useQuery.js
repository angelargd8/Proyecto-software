// useQuery.js
import { useState, useEffect } from 'react';

const useQuery = (url, query, variables) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query,
            variables,
          }),
        });
        const result = await response.json();
        if (result.errors) {
          setError(result.errors);
        } else {
          setData(result.data);
        }
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, [url, query, variables]);

  return { data, error };
};

export default useQuery;