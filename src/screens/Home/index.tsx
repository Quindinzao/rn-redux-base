// External libraries
import { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Components
import Text from '../../components/Text';

// Routes
import {
  changeToDark,
  changeToLight,
  loadThemeFromStorage,
  selectTheme,
} from '../../redux/themeSlice';

// Assets
import Logo from '../../assets/icons/Logo';

// Styles
import { StyledButton, Wrapper } from './styles';
import { light } from '../../styles/theme/light';
import { dark } from '../../styles/theme/dark';

const Home = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const changeTheme = async () => {
    try {
      if (theme.name === 'dark') {
        dispatch(changeToLight());
        await AsyncStorage.setItem('@theme', JSON.stringify(light));
      } else {
        dispatch(changeToDark());
        await AsyncStorage.setItem('@theme', JSON.stringify(dark));
      }
    } catch (err: any) {
      console.error('Error', 'Something went wrong.');
    }
  };

  useEffect(() => {
    loadThemeFromStorage(dispatch);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={theme.name === 'dark' ? 'dark-content' : 'light-content'}
      />
      <Wrapper>
        <Logo height={86} width={86} />
        <Text typeText={'title'}>Welcome to React Native</Text>
        <Text typeText={'caption'}>App version 0.0.1</Text>
        <Text typeText={'caption'}>Hello World!</Text>
        <StyledButton textButton={'Change theme'} onPress={changeTheme} />
      </Wrapper>
    </ThemeProvider>
  );
};

export default Home;
