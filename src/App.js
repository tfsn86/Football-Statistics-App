import { useEffect, useState } from 'react';

const API_KEY = process.env.REACT_APP_FOOTBALL_API_KEY;

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        'https://api-football-v1.p.rapidapi.com/v3/standings?season=2021&league=39',
        {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
            'x-rapidapi-key': API_KEY,
          },
        }
      );
      const responseJSON = await response.json();

      setLoading(false);
      setData(responseJSON.response[0].league.standings[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <h1>{loading}</h1>;
  }

  return (
    <main>
      {data.map((item) => {
        const {
          rank,
          team: { name: team },
          points,
        } = item;

        return (
          <h1 key={rank}>
            {rank} {team} {points}
          </h1>
        );
      })}
    </main>
  );
}

export default App;
