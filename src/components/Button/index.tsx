// Styled
import { TouchableHighlightProps } from 'react-native';
import { StyledButton, StyledText } from './styles';

interface ButtonProps extends TouchableHighlightProps {
  textButton: string;
}

const Button = (props: ButtonProps) => {
  return (
    <StyledButton {...props}>
      <StyledText>{props.textButton}</StyledText>
    </StyledButton>
  );
};

export default Button;
