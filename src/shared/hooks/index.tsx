import React from 'react';
import { AccessProvider } from './access';

import { AuthProvider } from './auth';

const AppProvider: React.FC = ({ children }) => (
    <AccessProvider>
      <AuthProvider>{children}</AuthProvider>
    </AccessProvider>
);

export { AppProvider };
