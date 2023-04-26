import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme({
  typography: {
    fontFamily: "'Visby Round Medium', sans-serif",
    fontWeight: 400,
    fontSize: 16,
    
    h2: {
      fontFamily: "'Visby Round Heavy', sans-serif",
      fontWeight: 400,
      fontSize: 42,
      margin: "16px"
    }
  },

  overrides: {
    MuiDrawer: {
      paper: {
        "& .MuiListItemIcon-root": {
          color: "inherit"
        }
      }
    }
  },

  palette: {
    primary: {
      main: '#F4EEE0'
    }
  },
});

export default defaultTheme;