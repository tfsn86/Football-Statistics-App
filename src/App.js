import { useFetch } from './custom-hooks/useFetch';

const query = 'standings?season=2021&league=39';

function App() {
  const { loading, data } = useFetch(query);

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
