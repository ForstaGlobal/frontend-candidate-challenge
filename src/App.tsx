import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import ToDoContainer from './components/ToDoContainer';
import Header from './components/Header';
import { useThemeStore } from './store/useThemeStore';
import './styles/styles.scss'
const App = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
     
  <Header/>
  
  <div className='todoListApp'>

      <ToDoContainer />
      </div>
    </ThemeProvider>
  );
};

export default App;
