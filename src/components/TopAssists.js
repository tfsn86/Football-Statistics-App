import { useGlobalContext } from '../context';
import Loading from './Loading';

const TopAssists = () => {
  const { loading, data } = useGlobalContext();

  return (
    <>
      <div className='my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2 xl:w-1/2'>
        <div className='overflow-hidden rounded-lg shadow-xl'>
          {loading && <Loading />}

          {data[2] && (
            <div>
              <table className='w-full'>
                <thead className='bg-[#38003c] text-white border-b-2 border-gray-200'>
                  <tr>
                    <th className='p-1 pl-3 text-sm font-semibold tracking-wide text-left'>
                      Top Assisters
                    </th>

                    <th className='p-1 text-sm font-semibold tracking-wide text-center'>
                      Assists
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200 bg-white'>
                  {data[2].response.map((item) => {
                    const { id, name } = item.player;

                    const {
                      goals: { assists },
                    } = item.statistics[0];

                    return (
                      <tr key={id}>
                        <td className='p-1 pl-3 text-sm text-gray-700 text-left whitespace-nowrap'>
                          <img
                            className='object-contain h-5 inline-flex'
                            src={item.statistics[0].team.logo}
                            alt='logo'
                          />
                          <span className='pl-2'>{name} </span>
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
      </div>
    </>
  );
};

export default TopAssists;
