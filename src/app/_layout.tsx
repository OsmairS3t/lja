import { Slot } from 'expo-router';
import { SessionProvider } from '../ctx';
import { ThemeProvider } from 'styled-components/native';
import theme from '../theme';

export default function Root() {
  // Set up the auth context and render our layout inside of it.
  return (
    <ThemeProvider theme={theme}>
      <SessionProvider>
        <Slot />
      </SessionProvider>
    </ThemeProvider>
  );
}