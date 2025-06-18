// External libraries
import styled from 'styled-components/native';

// Components
import Button from '../../components/Button';

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-bottom: 48px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const StyledButton = styled(Button)`
  margin-top: 24px;
`;
