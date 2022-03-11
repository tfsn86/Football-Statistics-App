import { useEffect, useState } from 'react';

const API_KEY = process.env.REACT_APP_FOOTBALL_API_KEY;

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        'https://v3.football.api-sports.io/standings?season=2021&league=39',
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
    <div className='p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
      {/* Card 1 */}
      <div className='w-full lg:max-w-full lg:flex justify-center'>
        <table>
          <thead className='bg-gray-50 border-b-2 border-gray-200'>
            <tr>
              <th className='p-3 text-sm font-semibold tracking-wide text-center'></th>
              <th className='p-3 text-sm font-semibold tracking-wide text-center'></th>
              <th className='p-3 text-sm font-semibold tracking-wide text-center'>
                K
              </th>
              <th className='p-3 text-sm font-semibold tracking-wide text-center'>
                V
              </th>
              <th className='p-3 text-sm font-semibold tracking-wide text-center'>
                U
              </th>
              <th className='p-3 text-sm font-semibold tracking-wide text-center'>
                T
              </th>
              <th className='p-3 text-sm font-semibold tracking-wide text-center'>
                Mål
              </th>
              <th className='p-3 text-sm font-semibold tracking-wide text-center'>
                Point
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-100'>
            {data.map((item) => {
              const {
                rank,
                team,
                points,
                all: { played, win, draw, lose, goals },
              } = item;

              return (
                <tr key={rank}>
                  <td className='p- text-sm text-gray-700 text-center whitespace-nowrap'>
                    {rank}
                  </td>
                  <td className='p-1 text-sm text-gray-700 text-left whitespace-nowrap'>
                    {team.name}
                  </td>
                  <td className='p-1 text-sm text-gray-700 text-center whitespace-nowrap'>
                    {played}
                  </td>
                  <td className='p-1 text-sm text-gray-700 text-center whitespace-nowrap'>
                    {win}
                  </td>
                  <td className='p-1 text-sm text-gray-700 text-center whitespace-nowrap'>
                    {draw}
                  </td>
                  <td className='p-1 text-sm text-gray-700 text-center whitespace-nowrap'>
                    {lose}
                  </td>
                  <td className='p-1 text-sm text-gray-700 text-center whitespace-nowrap'>
                    {goals.for}-{goals.against}
                  </td>
                  <td className='p-1 text-sm text-gray-700 text-center whitespace-nowrap'>
                    {points}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* Card 2 */}
      <div className='w-full lg:max-w-full lg:flex justify-center'>
        <table>
          <thead className='bg-gray-50 border-b-2 border-gray-200'>
            <tr>
              <th className='p-3 text-sm font-semibold tracking-wide text-center'></th>
              <th className='p-3 text-sm font-semibold tracking-wide text-center'></th>
              <th className='p-3 text-sm font-semibold tracking-wide text-center'>
                K
              </th>
              <th className='p-3 text-sm font-semibold tracking-wide text-center'>
                V
              </th>
              <th className='p-3 text-sm font-semibold tracking-wide text-center'>
                U
              </th>
              <th className='p-3 text-sm font-semibold tracking-wide text-center'>
                T
              </th>
              <th className='p-3 text-sm font-semibold tracking-wide text-center'>
                Mål
              </th>
              <th className='p-3 text-sm font-semibold tracking-wide text-center'>
                Point
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-100'>
            {data.map((item) => {
              const {
                rank,
                team,
                points,
                all: { played, win, draw, lose, goals },
              } = item;

              return (
                <tr key={rank}>
                  <td className='p- text-sm text-gray-700 text-center whitespace-nowrap'>
                    {rank}
                  </td>
                  <td className='p-1 text-sm text-gray-700 text-left whitespace-nowrap'>
                    {team.name}
                  </td>
                  <td className='p-1 text-sm text-gray-700 text-center whitespace-nowrap'>
                    {played}
                  </td>
                  <td className='p-1 text-sm text-gray-700 text-center whitespace-nowrap'>
                    {win}
                  </td>
                  <td className='p-1 text-sm text-gray-700 text-center whitespace-nowrap'>
                    {draw}
                  </td>
                  <td className='p-1 text-sm text-gray-700 text-center whitespace-nowrap'>
                    {lose}
                  </td>
                  <td className='p-1 text-sm text-gray-700 text-center whitespace-nowrap'>
                    {goals.for}-{goals.against}
                  </td>
                  <td className='p-1 text-sm text-gray-700 text-center whitespace-nowrap'>
                    {points}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* Card 3 */}
      <div className='w-full lg:max-w-full lg:flex justify-center'>
        <table>
          <thead className='bg-gray-50 border-b-2 border-gray-200'>
            <tr>
              <th className='p-3 text-sm font-semibold tracking-wide text-center'></th>
              <th className='p-3 text-sm font-semibold tracking-wide text-center'></th>
              <th className='p-3 text-sm font-semibold tracking-wide text-center'>
                K
              </th>
              <th className='p-3 text-sm font-semibold tracking-wide text-center'>
                V
              </th>
              <th className='p-3 text-sm font-semibold tracking-wide text-center'>
                U
              </th>
              <th className='p-3 text-sm font-semibold tracking-wide text-center'>
                T
              </th>
              <th className='p-3 text-sm font-semibold tracking-wide text-center'>
                Mål
              </th>
              <th className='p-3 text-sm font-semibold tracking-wide text-center'>
                Point
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-100'>
            {data.map((item) => {
              const {
                rank,
                team,
                points,
                all: { played, win, draw, lose, goals },
              } = item;

              return (
                <tr key={rank}>
                  <td className='p- text-sm text-gray-700 text-center whitespace-nowrap'>
                    {rank}
                  </td>
                  <td className='p-1 text-sm text-gray-700 text-left whitespace-nowrap'>
                    {team.name}
                  </td>
                  <td className='p-1 text-sm text-gray-700 text-center whitespace-nowrap'>
                    {played}
                  </td>
                  <td className='p-1 text-sm text-gray-700 text-center whitespace-nowrap'>
                    {win}
                  </td>
                  <td className='p-1 text-sm text-gray-700 text-center whitespace-nowrap'>
                    {draw}
                  </td>
                  <td className='p-1 text-sm text-gray-700 text-center whitespace-nowrap'>
                    {lose}
                  </td>
                  <td className='p-1 text-sm text-gray-700 text-center whitespace-nowrap'>
                    {goals.for}-{goals.against}
                  </td>
                  <td className='p-1 text-sm text-gray-700 text-center whitespace-nowrap'>
                    {points}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
