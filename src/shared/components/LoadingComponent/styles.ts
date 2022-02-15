import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  background: ${({ theme }) => theme.colors.Secondary};
`;
