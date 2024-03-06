import { Slot } from 'expo-router';
import { SessionProvider } from '../ctx';
import { useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from '../theme';

export default function Root() {
  //const deviceTheme = useColorScheme()
  //const themes = !deviceTheme ? theme.dark : theme[deviceTheme]
  // Set up the auth context and render our layout inside of it.

  return (
    <ThemeProvider theme={theme.def}>
      <SessionProvider>
        <Slot />
      </SessionProvider>
    </ThemeProvider>
  );
}