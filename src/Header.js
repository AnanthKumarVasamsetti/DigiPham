import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function Header() {
    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
          primary: {
            main: '#1976d2',
          },
        },
      });

  return (
    <ThemeProvider theme={darkTheme}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            Relator
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
}