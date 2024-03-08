import { Slot } from 'expo-router';
import { SessionProvider } from '../ctx';
import { ThemeProvider } from 'styled-components/native';
import themes from '../theme';

export default function Root() {
  const theme = themes.dark

  return (
    <ThemeProvider theme={theme}>
      <SessionProvider>
        <Slot />
      </SessionProvider>
    </ThemeProvider>
  );
}