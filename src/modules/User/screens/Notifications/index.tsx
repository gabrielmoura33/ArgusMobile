import React, { ReactNode } from 'react';

import HeaderSinglePage from '../../../../shared/screens/HeaderSinglePage';
import { Container, Wrapper } from './styles';

interface NotificationListProps {
  children: ReactNode;
}

function NotificationList({ children }: NotificationListProps) {
  return (
    <Wrapper>
      <HeaderSinglePage title="Notificaçōes">
        <Container />
      </HeaderSinglePage>
    </Wrapper>
  );
}

export default NotificationList;
