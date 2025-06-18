// External Libraries
import 'styled-components/native';

// Styles
import { dark } from './theme/dark';

type ThemeType = typeof dark;

declare module 'styled-components/native' {
  export interface DefaultTheme extends ThemeType {}
}
