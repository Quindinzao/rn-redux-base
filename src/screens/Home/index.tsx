import Logo from '../../assets/icons/Logo';
import { StyledButton, Wrapper } from './styles';
import Text from '../../components/Text';

const Home = () => {
  return (
    <Wrapper>
      <Logo height={86} width={86} />
      <Text typeText="title">Welcome to React Native</Text>
      <Text typeText={'caption'}>App version 0.0.1</Text>
      <Text typeText={'caption'}>Hello World!</Text>
      <StyledButton textButton="React Native" />
    </Wrapper>
  );
};

export default Home;
