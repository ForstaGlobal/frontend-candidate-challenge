import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TodoList from './todoList/TodoList';
import CssBaseline from '@mui/material/CssBaseline';
import { IconButton } from '@mui/material';
import { Brightness7, Brightness4 } from '@mui/icons-material';
import { ToastProvider } from 'react-toast-notifications';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const App = () => {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
          ...(mode === 'light')
          ? {
            primary: {
              main: '#556cd6',
            },
            secondary: {
              main: '#556cd680',
            },
            success: {
              main: '#36B37E70'
            },
            error: {
              main: '#FF0000',
            }
          }
          : {
            primary: {
              main: '#556cd6',
            },
            secondary: {
              main: '#FFFFFF20',
            },
            success: {
              main: '#22552270'
            },
            error: {
              main: '#FF0000',
            },
          }
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Content></Content>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

const Content = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <ToastProvider>
      <Container sx={{ marginTop: '3em', marginBottom: '1.5em' }}>
        <IconButton sx={{ mr: 1, float: 'right' }} size='large' onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
        <Typography variant='h2' align='center'>My Todos</Typography>
        <TodoList></TodoList>
      </Container>
    </ToastProvider>
  );
}

export default App;
