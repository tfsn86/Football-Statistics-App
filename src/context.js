import React, { useContext } from 'react';
import { useFetch } from './custom-hooks/useFetch';

const AppContext = React.createContext();

let leagueStandingsQuery = 'standings?season=2021&league=39';

const AppProvider = ({ children }) => {
  const { loading, data } = useFetch(leagueStandingsQuery);

  console.log(data);

  return (
    <AppContext.Provider value={{ loading, data }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
