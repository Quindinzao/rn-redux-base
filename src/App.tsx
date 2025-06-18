// External libraries
import { StatusBar, useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { Provider } from 'react-redux';

// Styles
import { dark } from './styles/theme/dark';
import { light } from './styles/theme/light';

// Screens
import Home from './screens/Home';

// Redux
import { store } from './redux/store';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <ThemeProvider theme={isDarkMode ? dark : light}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Home />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
