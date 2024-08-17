// useMutation.js
import { useState } from 'react';

const useMutation = (url, query) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const mutate = async (variables) => {
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

  return { data, error, mutate };
};

export default useMutation;