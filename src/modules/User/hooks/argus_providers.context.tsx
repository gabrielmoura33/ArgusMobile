import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';

import { IFilters } from '../../../shared/@types/IFilters';
import { Provider } from '../../../shared/entities/Provider';
import { useLoader } from '../../../shared/hooks/loading.context';
import { ArgusProviderService } from '../../../shared/services/ArgusProvider.service';

interface ArgusProviderContextContextData {
  argusProviders: Provider[];
  selectedArgusProvider: Provider;
  setSelectedArgusProvider: React.Dispatch<
    React.SetStateAction<Provider | undefined>
  >;
  fetchArgusProvidersApi: (filters: IFilters<Provider>) => Promise<void>;
}

const ArgusProviderContextContext =
  createContext<ArgusProviderContextContextData>(
    {} as ArgusProviderContextContextData,
  );

const ArgusProviderContextProvider: React.FC = ({ children }) => {
  const [argusProviders, setProviders] = useState<Provider[]>([]);
  const [selectedArgusProvider, setSelectedArgusProvider] =
    useState<Provider>();
  const [pages, setPages] = useState(1);
  const { setLoading } = useLoader();

  const fetchArgusProvidersApi = useCallback(
    async (filters: IFilters<Provider>) => {
      try {
        setLoading(true);

        const argusProvidersResp = await ArgusProviderService.fetchProviders(
          filters,
        );
        setProviders(argusProvidersResp.rows);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    },
    [setLoading],
  );

  return (
    <ArgusProviderContextContext.Provider
      value={{
        argusProviders,
        selectedArgusProvider: selectedArgusProvider || ({} as Provider),
        fetchArgusProvidersApi,
        setSelectedArgusProvider,
      }}
    >
      {children}
    </ArgusProviderContextContext.Provider>
  );
};
function useArgusProviderContext(): ArgusProviderContextContextData {
  const context = useContext(ArgusProviderContextContext);

  if (!context) {
    throw new Error(
      'useArgusProviderContext must be used within an ArgusProviderContextProvider',
    );
  }

  return context;
}
export { ArgusProviderContextProvider, useArgusProviderContext };
