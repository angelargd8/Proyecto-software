import { useState } from "react";

function useGraphqlApi() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (query, variables = {}) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(import.meta.env.VITE_APIPORT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query,
          variables,
        }),
      });

      const data = await response.json();
      if (data.errors) {
        setError(data.errors);
        console.error("Error en la consulta GraphQL:", data.errors);
      }
      return data.data;
    } catch (err) {
      setError(err);
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return { fetchData, loading, error };
}

export default useGraphqlApi;
