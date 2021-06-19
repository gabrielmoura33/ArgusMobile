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
  reset: any;
}

const AccessContext = createContext<AccessContextData>({} as AccessContextData);

const AccessProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AccessState>({} as AccessState);
  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      const firstAccessToken = await AsyncStorage.getItem(
        `@ArgusApp:FirstAccessToken`,
      );

      setData({
        isFirstLaunch: !firstAccessToken,
        state: firstAccessToken
          ? JSON.parse(firstAccessToken).state
          : undefined,
      });
    }
    loadStoragedData();
  }, []);

  const setFirstLaunchToken = useCallback(async () => {
    setData({ isFirstLaunch: false, state: data.state });
    await AsyncStorage.setItem(
      '@ArgusApp:FirstAccessToken',
      JSON.stringify(data),
    );
  }, [data]);

  const setChooseState = useCallback(
    async (state: 'provider' | 'user') => {
      setData({ isFirstLaunch: false, state });
      await AsyncStorage.setItem(
        '@ArgusApp:FirstAccessToken',
        JSON.stringify(data),
      );
    },
    [data],
  );

  const reset = useCallback(async () => {
    await AsyncStorage.clear();
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
        reset,
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
