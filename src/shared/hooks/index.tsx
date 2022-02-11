import React from 'react';

import { ArgusProviderContextProvider } from '../../modules/User/hooks/argus_providers.context';
import { ProviderContextProvider } from '../../modules/User/hooks/providers.context';
import { AccessProvider } from './access';
import { AuthProvider } from './auth';
import { LoaderProvider } from './loading.context';

const AppProvider: React.FC = ({ children }) => (
  <LoaderProvider>
    <AccessProvider>
      <AuthProvider>
        <ArgusProviderContextProvider>
          <ProviderContextProvider>{children}</ProviderContextProvider>
        </ArgusProviderContextProvider>
      </AuthProvider>
    </AccessProvider>
  </LoaderProvider>
);

export { AppProvider };
