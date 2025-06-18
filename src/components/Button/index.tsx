// Styled
import { TouchableOpacityProps } from 'react-native';
import { StyledButton, StyledText } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  textButton: string;
}

const Button = (props: ButtonProps) => {
  return (
    <StyledButton {...props} activeOpacity={0.7}>
      <StyledText>{props.textButton}</StyledText>
    </StyledButton>
  );
};

export default Button;
