import { StatusBar, useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { dark } from './styles/theme/dark';
import { light } from './styles/theme/light';
import Home from './screens/Home';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ThemeProvider theme={isDarkMode ? dark : light}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Home />
    </ThemeProvider>
  );
};

export default App;
