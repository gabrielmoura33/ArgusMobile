import React, { createContext, useState, useContext } from 'react';

interface LoaderContextData {
  isLoading: boolean;
  setLoading(isAtive: boolean): void;
}
const LoaderContext = createContext<LoaderContextData>({} as LoaderContextData);

const LoaderProvider: React.FC = ({ children }) => {
  const [data, setLoading] = useState<boolean>(false);

  return (
    <LoaderContext.Provider value={{ isLoading: data, setLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};
function useLoader(): LoaderContextData {
  const context = useContext(LoaderContext);

  if (!context) {
    throw new Error('useLoader must be used within an LoaderProvider');
  }

  return context;
}
export { LoaderProvider, useLoader };
