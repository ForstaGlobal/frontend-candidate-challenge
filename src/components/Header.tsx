import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import { useThemeStore } from '../store/useThemeStore';

const Header: React.FC = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const toggleDarkMode = useThemeStore((state) => state.toggleDarkMode);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: isDarkMode ? '#2b3743' : '#ffffff',
        boxShadow: '0px 2px 2px lightgrey',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h1" sx={{ fontSize: '1.5rem', fontWeight: 700, color: isDarkMode ? '#ffffff' : '#351950' }}>

         Forsta       
       </Typography>
      </Box>
      <Button onClick={toggleDarkMode} sx={{ backgroundColor: 'transparent', color: isDarkMode ? '#ffffff' : '#351950' }}>
        <NightlightRoundIcon />
        Dark Mode
      </Button>
    </Box>
  );
};

export default Header;
