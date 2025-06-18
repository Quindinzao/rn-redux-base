import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const width = Dimensions.get('screen').width;

export const StyledButton = styled.TouchableHighlight`
  height: 54px;
  justify-content: center;
  border-radius: 12px;

  width: ${width - 48}px;
  background-color: ${({ theme }) => theme.colors.button};
`;

export const StyledText = styled.Text`
  width: 100%;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
`;
