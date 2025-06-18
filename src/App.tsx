// External libraries
import { Provider } from 'react-redux';

// Screens
import Home from './screens/Home';

// Redux
import { store } from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
