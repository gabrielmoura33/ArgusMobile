import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';
import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';

import { GOOGLE_AUTH_CONFIGS } from '../configs/GoogleAuth';
import api from '../services/api';

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  avatar_url: string;
  isProvider: boolean;
  address: Address;
  signed?: boolean;
  birth_date?: Date;
  isGoogleSign?: boolean;
  isFacebookSign?: boolean;
}
interface Address {
  city: string;
}
interface AuthState {
  token: string;
  user: User;
}
interface SignInCredentials {
  email: string;
  password: string;
}
interface AuthContextData {
  user: User;
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  signInWithGoogle(): Promise<void>;
  signInWithFacebook(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({
    user: {},
    token: '',
  } as AuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        '@ArgusMobileApp:token',
        '@ArgusMobileApp:user',
      ]);

      if (token[1] && user[1]) {
        api.defaults.headers.Authorization = `Bearer ${token[1]}`;
        setData({
          token: token[1],
          user: { ...JSON.parse(user[1]), signed: true },
        });
      }

      setLoading(false);
    }
    loadStoragedData();
  }, []);
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('api/v1/sessions', {
      email,
      password,
    });

    const { user } = response.data;
    const { accesstoken: token } = response.headers;

    await AsyncStorage.multiSet([
      ['@ArgusMobileApp:token', token],
      ['@ArgusMobileApp:user', JSON.stringify(user)],
    ]);
    api.defaults.headers.Authorization = `Bearer ${token}`;
    setData({ token, user: { ...user, signed: true } });
  }, []);

  const signOut = useCallback(async () => {
    try {
      if (data.user.isGoogleSign) {
        const accessToken = await AsyncStorage.getItem(
          '@ArgusMobileApp:GoogleAccessToken',
        );

        if (accessToken) {
          await Google.logOutAsync({
            accessToken,
            ...GOOGLE_AUTH_CONFIGS,
          });
        }
      }

      await AsyncStorage.multiRemove([
        '@ArgusMobileApp:user',
        '@ArgusMobileApp:token',
        '@ArgusMobileApp:GoogleAccessToken',
      ]);

      setData({
        user: {},
        token: '',
      } as AuthState);
    } catch (error) {
      throw new Error(error);
    }
  }, [data.user.isGoogleSign]);

  async function signInWithGoogle() {
    try {
      const result = await Google.logInAsync(GOOGLE_AUTH_CONFIGS);

      if (result.type === 'success') {
        const google_access_token = result.accessToken;
        const response = await api.post(
          'api/v1/sessions/social-auth/google',
          {},
          {
            headers: {
              Authorization: google_access_token,
            },
          },
        );

        const { user } = response.data;
        const { accesstoken: token } = response.headers;
        await AsyncStorage.multiSet([
          ['@ArgusMobileApp:token', token],
          ['@ArgusMobileApp:user', JSON.stringify(user)],
          ['@ArgusMobileApp:GoogleAccessToken', google_access_token],
        ]);

        api.defaults.headers.Authorization = `Bearer ${token}`;
        setData({ token, user: { ...user, isGoogleSign: true, signed: true } });
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async function signInWithFacebook() {
    try {
      await Facebook.initializeAsync({
        appId: '181620527263681',
        appName: 'Argus',
      });
      const result = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile', 'email'],
      });
      if (result.type === 'success') {
        const facebook_access_token = result.token;
        const response = await api.post(
          'api/v1/sessions/social-auth/facebook',
          {},
          {
            headers: {
              Authorization: facebook_access_token,
            },
          },
        );

        const { user } = response.data;
        const { accesstoken: token } = response.headers;
        await AsyncStorage.multiSet([
          ['@ArgusMobileApp:token', token],
          ['@ArgusMobileApp:user', JSON.stringify(user)],
          ['@ArgusMobileApp:FacebookAccessToken', facebook_access_token],
        ]);

        api.defaults.headers.Authorization = `Bearer ${token}`;
        setData({
          token,
          user: { ...user, isFacebookSign: true, signed: true },
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        loading,
        signIn,
        signOut,
        signInWithGoogle,
        signInWithFacebook,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
export { AuthProvider, useAuth };
