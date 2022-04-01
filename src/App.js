import LeagueStandings from './components/LeagueStandings';
import TopScorers from './components/TopScorers';
import TopAssists from './components/TopAssists';
import ShotsOnGoal from './components/ShotsOnGoal';

function App() {
  return (
    <>
      <div className='container my-12 mx-auto px-4 md:px-12'>
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
