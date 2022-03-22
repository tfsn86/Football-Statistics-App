import LeagueStandings from './components/LeagueStandings';
import TopScorers from './components/TopScorers';
import TopAssists from './components/TopAssists';

function App() {
  return (
    <>
      <div className='p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
        <LeagueStandings />
        <TopScorers />
        <TopAssists />
      </div>
    </>
  );
}

export default App;
