import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';

interface AccessState {
  isFirstLaunch: boolean;
  state?: 'provider' | 'user';
}
interface AccessContextData {
  isFirstLaunch: boolean;
  state?: 'provider' | 'user';
  setFirstLaunchToken(): Promise<void>;
  setChooseState(state: 'provider' | 'user'): Promise<void>;
  handleReset: any;
}

const AccessContext = createContext<AccessContextData>({} as AccessContextData);

const AccessProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AccessState>({} as AccessState);
  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      const firstAccessToken = await AsyncStorage.getItem(
        `@ArgusApp:FirstAccessToken`,
      );
      const stateAccess = await AsyncStorage.getItem(`@ArgusApp:AppState`);

      setData({
        isFirstLaunch: Boolean(firstAccessToken),
        state: (stateAccess as 'user' | 'provider') || undefined,
      });
      console.log('stateAccess', stateAccess);
      console.log('firstAccessToken', firstAccessToken);
      console.log(data);
    }
    loadStoragedData();
  }, []);

  const setFirstLaunchToken = useCallback(async () => {
    await AsyncStorage.setItem(
      '@ArgusApp:FirstAccessToken',
      String(data.isFirstLaunch),
    );
    setData({
      state: data.state,
      isFirstLaunch: false,
    });
  }, [data.isFirstLaunch, data.state]);

  const setChooseState = useCallback(
    async (state: 'provider' | 'user') => {
      setData({
        isFirstLaunch: data.isFirstLaunch,
        state,
      });
      await AsyncStorage.setItem('@ArgusApp:AppState', state);
    },
    [data.isFirstLaunch],
  );

  const handleReset = useCallback(async () => {
    setData({
      isFirstLaunch: false,
      state: undefined,
    });
  }, []);

  return (
    <AccessContext.Provider
      value={{
        isFirstLaunch: data.isFirstLaunch,
        setFirstLaunchToken,
        setChooseState,
        state: data.state,
        handleReset,
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
