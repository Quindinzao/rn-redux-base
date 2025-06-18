// Components
import Text from '../../components/Text';

// Assets
import Logo from '../../assets/icons/Logo';

// Styles
import { StyledButton, Wrapper } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, selectCount } from '../../redux/counterSlice';

const Home = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Logo height={86} width={86} />
      {/* <Text typeText={'title'}>Welcome to React Native</Text>
      <Text typeText={'caption'}>App version 0.0.1</Text>
      <Text typeText={'caption'}>Hello World!</Text>
      <StyledButton textButton={'React Native'} /> */}
      <Text typeText={'title'}>{count}</Text>
      <StyledButton textButton={'Add'} onPress={() => dispatch(increment())} />
      <StyledButton
        textButton={'Remove'}
        onPress={() => dispatch(decrement())}
      />
    </Wrapper>
  );
};

export default Home;
