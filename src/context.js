import React, { useContext } from 'react';
import { useFetch } from './custom-hooks/useFetch';

const AppContext = React.createContext();

let leagueStandingsQuery = 'standings?season=2021&league=39';
let topScorersQuery = 'players/topscorers?season=2021&league=39';

const AppProvider = ({ children }) => {
  const { loading: leagueStandingLoading, data: leagueStandingsData } =
    useFetch(leagueStandingsQuery);

  const { loading: topScorersLoading, data: topScorersData } =
    useFetch(topScorersQuery);

  return (
    <AppContext.Provider
      value={{
        leagueStandingLoading,
        leagueStandingsData,
        topScorersLoading,
        topScorersData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
