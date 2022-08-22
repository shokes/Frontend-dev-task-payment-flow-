import React, { useContext, useState, useEffect } from 'react';

const AppContext = React.createContext();

const AppProvider = function ({ children }) {
  const storedValueAsNumber = Number(localStorage.getItem('id'));
  const [id, setId] = useState(
    Number.isInteger(storedValueAsNumber) ? storedValueAsNumber : 1
  );

  useEffect(() => {
    localStorage.setItem('id', String(id));
  }, [id]);

  return (
    <AppContext.Provider value={{ setId, id }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = function () {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
