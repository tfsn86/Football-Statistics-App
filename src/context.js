import React, { useState, useContext } from 'react';
import { useFetch } from './custom-hooks/useFetch';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('standings?season=2021&league=39');

  const { loading, data } = useFetch(query);

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
