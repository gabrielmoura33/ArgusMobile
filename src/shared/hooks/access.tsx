import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';

type AppStateOptions = 'provider' | 'user' | 'default';
interface AccessContextData {
  isFirstLaunch: boolean;
  appState?: AppStateOptions;
  handleSetFirstLaunch(): Promise<void>;
  handleChooseAppState(state: AppStateOptions): Promise<void>;
}

const AccessContext = createContext<AccessContextData>({} as AccessContextData);

const AccessProvider: React.FC = ({ children }) => {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean>(true);
  const [appState, setAppState] = useState<AppStateOptions>('default');

  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      const firstAccessToken = await AsyncStorage.getItem(
        `@ArgusMobileApp:FirstAccessToken`,
      );
      const stateAccess = await AsyncStorage.getItem(
        `@ArgusMobileApp:AppState`,
      );

      if (firstAccessToken) setIsFirstLaunch(false);

      if (stateAccess) setAppState(stateAccess as AppStateOptions);
    }
    loadStoragedData();
  }, []);

  const handleSetFirstLaunch = useCallback(async () => {
    try {
      setIsFirstLaunch(false);
      await AsyncStorage.setItem(
        '@ArgusMobileApp:FirstAccessToken',
        String(false),
      );
    } catch (error) {
      throw new Error(error);
    }
  }, []);

  const handleChooseAppState = useCallback(async (state: AppStateOptions) => {
    try {
      await AsyncStorage.setItem('@ArgusMobileApp:AppState', state);
      setAppState('default');
    } catch (error) {
      throw new Error(error);
    }
  }, []);

  return (
    <AccessContext.Provider
      value={{
        isFirstLaunch,
        handleChooseAppState,
        appState,
        handleSetFirstLaunch,
      }}
    >
      {children}
    </AccessContext.Provider>
  );
};

function useAccess(): AccessContextData {
  const context = useContext(AccessContext);

  if (!context) {
    throw new Error('useAccess must be used within an AccessProvider');
  }

  return context;
}

export { AccessProvider, useAccess };
