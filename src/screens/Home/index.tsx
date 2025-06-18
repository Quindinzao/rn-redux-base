// External libraries
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { useDispatch, useSelector } from 'react-redux';

// Components
import Text from '../../components/Text';

// Routes
import {
  changeToDark,
  changeToLight,
  selectTheme,
} from '../../redux/themeSlice';

// Assets
import Logo from '../../assets/icons/Logo';

// Styles
import { StyledButton, Wrapper } from './styles';

const Home = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={theme.name === 'light' ? 'light-content' : 'dark-content'}
      />
      <Wrapper>
        <Logo height={86} width={86} />
        <Text typeText={'title'}>Welcome to React Native</Text>
        <Text typeText={'caption'}>App version 0.0.1</Text>
        <Text typeText={'caption'}>Hello World!</Text>
        <StyledButton
          textButton={'Change theme'}
          onPress={() =>
            theme.name === 'dark'
              ? dispatch(changeToLight())
              : dispatch(changeToDark())
          }
        />
      </Wrapper>
    </ThemeProvider>
  );
};

export default Home;
