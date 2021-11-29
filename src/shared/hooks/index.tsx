import React from 'react';

import { ProviderContextProvider } from '../../modules/User/hooks/providers.context';
import { AccessProvider } from './access';
import { AuthProvider } from './auth';
import { LoaderProvider } from './loading.context';

const AppProvider: React.FC = ({ children }) => (
  <LoaderProvider>
    <AccessProvider>
      <AuthProvider>
        <ProviderContextProvider>{children}</ProviderContextProvider>
      </AuthProvider>
    </AccessProvider>
  </LoaderProvider>
);

export { AppProvider };
