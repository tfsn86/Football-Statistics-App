import LeagueStandings from './components/LeagueStandings';

function App() {
  return (
    <>
      <div className='p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
        <LeagueStandings />
      </div>
    </>
  );
}

export default App;
