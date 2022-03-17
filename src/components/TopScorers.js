import { useGlobalContext } from '../context';
import Loading from './Loading';

const TopScorers = () => {
  const { topScorersLoading, topScorersData } = useGlobalContext();

  return (
    <>
      <div className='w-full lg:max-w-full lg:flex justify-center'>
        {topScorersLoading && <Loading />}

        {topScorersData && (
          <div>
            <table>
              <thead className='bg-gray-50 border-b-2 border-gray-200'>
                <tr>
                  <th className='p-3 text-sm font-semibold tracking-wide text-center'>
                    Spiller
                  </th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-100'>
                {topScorersData.response.map((item) => {
                  const { id, name } = item.player;

                  return (
                    <tr key={id}>
                      <td className='p- text-sm text-gray-700 text-center whitespace-nowrap'>
                        {name}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default TopScorers;
