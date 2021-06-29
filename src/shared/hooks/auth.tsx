import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Google from 'expo-google-app-auth';
import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';

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
  isSocialSign?: boolean;
  googleAccessToken?: string;
  isGoogleSign?: boolean;
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
    const response = await api.post('sessions', {
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
    if (data.user.isGoogleSign && data.user.googleAccessToken)
      await Google.logOutAsync({
        accessToken: data.user.googleAccessToken,
        iosClientId:
          '667162433343-bm972dcjeoonb5tmhdho0jhnlm0th75k.apps.googleusercontent.com',
        androidClientId:
          '667162433343-2lns20c78qkvls7c893vr78s0636g3o0.apps.googleusercontent.com',
      });

    await AsyncStorage.multiRemove([
      '@ArgusMobileApp:user',
      '@ArgusMobileApp:token',
    ]);

    setData({
      user: {},
      token: '',
    } as AuthState);
  }, [data.user.googleAccessToken, data.user.isGoogleSign]);

  async function signInWithGoogle() {
    try {
      const result = await Google.logInAsync({
        iosClientId:
          '667162433343-bm972dcjeoonb5tmhdho0jhnlm0th75k.apps.googleusercontent.com',
        androidClientId:
          '667162433343-bld0ra6qlelc4koho6v3dg0mon40bu5h.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
        const userLogged = {
          email: result.user.email!,
          name: result.user.name!,
          avatar_url: result.user.photoUrl!,
          password: String(result.user.id),
          birth_date: data.user.birth_date,
        };

        const response = await api.post(
          '/sessions/social-auth/google',
          userLogged,
          {
            params: {
              social_auth_token: '0614d7c58853a0ef79480b33fe698982',
            },
          },
        );

        const { user } = response.data;
        const { accesstoken: token } = response.headers;

        const googleUser = {
          id: user.id,
          name: userLogged.name,
          email: userLogged.email,
          birth_date: userLogged.birth_date,
          avatar_url: userLogged.avatar_url,
          old_password: userLogged.password,
          address: user.address,
          googleAccessToken: result.accessToken,
          isGoogleSign: true,
          isProvider: false,
          signed: true,
        };
        await AsyncStorage.multiSet([
          ['@ArgusMobileApp:token', token],
          ['@ArgusMobileApp:user', JSON.stringify(googleUser)],
        ]);

        api.defaults.headers.Authorization = `Bearer ${token}`;
        setData({ token, user: googleUser as any });
      }
    } catch (error) {
      throw new Error(error);
    }
  }
  return (
    <AuthContext.Provider
      value={{ user: data.user, loading, signIn, signOut, signInWithGoogle }}
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
