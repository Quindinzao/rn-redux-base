import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { ThemeType } from '../styles/styled';
import { dark } from '../styles/theme/dark';
import { light } from '../styles/theme/light';

interface ThemeState {
  value: ThemeType;
}

const initialState: ThemeState = {
  value: dark,
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
