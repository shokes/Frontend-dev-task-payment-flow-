import React, { useContext, useState, useEffect } from 'react';

const AppContext = React.createContext();

const AppProvider = function ({ children }) {
  const [id, setId] = useState(1);

  return (
    <AppContext.Provider value={{ setId, id }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = function () {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
