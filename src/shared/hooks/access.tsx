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
  state: 'provider' | 'user';
}
interface AccessContextData {
  isFirstLaunch: boolean;
  state: 'provider' | 'user';
  setFirstLaunchToken(): Promise<void>;
}

const AccessContext = createContext<AccessContextData>({} as AccessContextData);

const AccessProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AccessState>({} as AccessState);
  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      const firstAccessToken = await AsyncStorage.getItem(
        '@Argus:FirstAccessToken',
      );

      setData({
        isFirstLaunch: !firstAccessToken,
        state: firstAccessToken ? JSON.parse(firstAccessToken).state : false,
      });
    }
    loadStoragedData();
  }, []);

  const setFirstLaunchToken = useCallback(async () => {
    await AsyncStorage.setItem('@Argus:FirstAccessToken', 'true');
    setData({ isFirstLaunch: false, state: data.state });
  }, []);

  return (
    <AccessContext.Provider
      value={{
        isFirstLaunch: data.isFirstLaunch,
        setFirstLaunchToken,
        state: data.state,
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
