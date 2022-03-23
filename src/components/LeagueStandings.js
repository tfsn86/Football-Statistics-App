import { useGlobalContext } from '../context';
import Loading from './Loading';

const LeagueStandings = () => {
  const { loading, data } = useGlobalContext();

  return (
    <>
      <div className='my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2 xl:w-1/3'>
        <div className='overflow-hidden rounded-lg shadow-xl'>
          {loading && <Loading />}

          {data[0] && (
            <table className='w-full'>
              <thead className='bg-gray-50 border-b-2 border-gray-200'>
                <tr>
                  <th className='p-1 text-sm font-semibold tracking-wide text-center'></th>
                  <th className='p-1 text-sm font-semibold tracking-wide text-center'></th>
                  <th className='p-1 text-sm font-semibold tracking-wide text-center'>
                    K
                  </th>
                  <th className='p-1 text-sm font-semibold tracking-wide text-center'>
                    V
                  </th>
                  <th className='p-1 text-sm font-semibold tracking-wide text-center'>
                    U
                  </th>
                  <th className='p-1 text-sm font-semibold tracking-wide text-center'>
                    T
                  </th>
                  <th className='p-1 text-sm font-semibold tracking-wide text-center'>
                    Mål
                  </th>
                  <th className='p-1 text-sm font-semibold tracking-wide text-center'>
                    Point
                  </th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-100'>
                {data[0].response[0].league.standings[0].map((item) => {
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
          )}
        </div>
      </div>
    </>
  );
};

export default LeagueStandings;
