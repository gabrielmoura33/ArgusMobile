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
import { ProviderService } from '../../../shared/services/Provider.service';

interface ProviderContextContextData {
  providers: Provider[];
  selectedProvider: Provider;
  setSelectedProvider: React.Dispatch<
    React.SetStateAction<Provider | undefined>
  >;
  fetchProvidersApi: (filters: IFilters<Provider>) => Promise<void>;
}

const ProviderContextContext = createContext<ProviderContextContextData>(
  {} as ProviderContextContextData,
);

const ProviderContextProvider: React.FC = ({ children }) => {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [selectedProvider, setSelectedProvider] = useState<Provider>();
  // const [pages, setPages] = useState(1);
  const { setLoading } = useLoader();

  const fetchProvidersApi = useCallback(
    async (filters: IFilters<Provider>) => {
      try {
        setLoading(true);
        const providersResp = await ProviderService.fetchProviders(filters);
        setProviders(providersResp.rows);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    },
    [setLoading],
  );

  return (
    <ProviderContextContext.Provider
      value={{
        providers,
        selectedProvider: selectedProvider || ({} as Provider),
        fetchProvidersApi,
        setSelectedProvider,
      }}
    >
      {children}
    </ProviderContextContext.Provider>
  );
};
function useProviderContext(): ProviderContextContextData {
  const context = useContext(ProviderContextContext);

  if (!context) {
    throw new Error(
      'useProviderContext must be used within an ProviderContextProvider',
    );
  }

  return context;
}
export { ProviderContextProvider, useProviderContext };
