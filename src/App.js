import LeagueStandings from './components/LeagueStandings';
import TopScorers from './components/TopScorers';
import TopAssists from './components/TopAssists';
import ShotsOnGoal from './components/ShotsOnGoal';

function App() {
  return (
    <>
      <div className='container my-12 mx-auto px-4 md:px-12 lg:px-40'>
        <div className='flex flex-col justify-center mb-12'>
          <img
            className='mx-auto'
            src='https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/540px-Premier_League_Logo.svg.png'
            alt='premier league logo'
          />

          <p className='text-center font-light mt-12 text-2xl md:text-5xl text-[#38003c]'>
            Statistics
            <br /> Season: <span className='font-semibold'>21/22</span>
          </p>
        </div>
        <div className='flex flex-wrap -mx-1 lg:-mx-4'>
          <LeagueStandings />
          <TopScorers />
          <TopAssists />
          <ShotsOnGoal />
        </div>
      </div>
    </>
  );
}

export default App;
