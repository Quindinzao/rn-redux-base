// External libraries
import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Redux
import { RootState } from './store';

// Styles
import { ThemeType } from '../styles/styled';
import { dark } from '../styles/theme/dark';
import { light } from '../styles/theme/light';

interface ThemeState {
  value: ThemeType;
}

const initialState: ThemeState = {
  value: dark,
};

export const loadThemeFromStorage = async (dispatch: any) => {
  try {
    const storageTheme = await AsyncStorage.getItem('@theme');
    if (storageTheme === JSON.stringify(light)) {
      dispatch(changeToLight());
    } else {
      dispatch(changeToDark());
    }
  } catch (err: any) {
    console.error('Error', 'Something went wrong.');
  }
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeToDark: state => {
      state.value = dark;
    },
    changeToLight: state => {
      state.value = light;
    },
  },
});

export const { changeToDark, changeToLight } = themeSlice.actions;
export const selectTheme = (state: RootState) => state.theme.value;
export default themeSlice.reducer;
