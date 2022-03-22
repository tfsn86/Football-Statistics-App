import { useGlobalContext } from '../context';
import Loading from './Loading';

const TopAssists = () => {
  const { topAssistsLoading, topAssistsData } = useGlobalContext();

  return (
    <>
      <div className='w-full lg:max-w-full lg:flex justify-center'>
        {topAssistsLoading && <Loading />}

        {topAssistsData && (
          <div>
            <table>
              <thead className='bg-gray-50 border-b-2 border-gray-200'>
                <tr>
                  <th className='p-1 text-sm font-semibold tracking-wide text-left'></th>
                  <th className='p-1 text-sm font-semibold tracking-wide text-left'>
                    Assists
                  </th>
                  <th className='p-1 text-sm font-semibold tracking-wide text-center'></th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-100'>
                {topAssistsData.response.map((item) => {
                  const { id, name } = item.player;

                  const {
                    goals: { assists },
                  } = item.statistics[0];

                  return (
                    <tr key={id}>
                      <td className='p-1 text-sm text-gray-700 text-left whitespace-nowrap'>
                        <img
                          className='object-cover h-5 w-full'
                          src={item.statistics[0].team.logo}
                          alt='logo'
                        />
                      </td>
                      <td className='p-1 text-sm text-gray-700 text-left whitespace-nowrap'>
                        {name}{' '}
                        <span className='text-xs'>
                          ({item.statistics[0].team.name})
                        </span>
                      </td>
                      <td className='p-1 text-sm text-gray-700 text-center whitespace-nowrap'>
                        {assists}
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

export default TopAssists;
