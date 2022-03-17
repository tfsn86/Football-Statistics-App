import { useState, useEffect, useCallback } from 'react';

const API_KEY = process.env.REACT_APP_FOOTBALL_API_KEY;

export const useFetch = (query) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  const getData = useCallback(async () => {
    setLoading(true);

    try {
      const response = await fetch(
        `https://v3.football.api-sports.io/${query}`,
        {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'v3.football.api-sports.io',
            'x-rapidapi-key': API_KEY,
          },
          redirect: 'follow',
        }
      );

      const responseJSON = await response.json();

      setLoading(false);
      setData(responseJSON);
    } catch (error) {
      console.error(error);
    }
  }, [query]);

  useEffect(() => {
    getData();
  }, [query, getData]);

  return { loading, data };
};
