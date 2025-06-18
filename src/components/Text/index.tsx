import { StyledText } from './styles';

interface TextProps {
  children: React.ReactNode;
  typeText: 'caption' | 'title';
}

const Text = (props: TextProps) => {
  return <StyledText typeText={props.typeText}>{props.children}</StyledText>;
};

export default Text;
