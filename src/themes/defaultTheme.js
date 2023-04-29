import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme({
  typography: {
    fontFamily: "'Visby Round Medium', sans-serif",
    fontWeight: 400,
    fontSize: 16,
    
    h1: {
      fontFamily: "'Visby Round Heavy', sans-serif",
      fontSize: 78,
      textTransform: "uppercase",
      textShadow: "0 0 15px #15141aad"
    },

    h2: {
      fontFamily: "'Visby Round Heavy', sans-serif",
      fontSize: 56,
      margin: "16px",
      textTransform: "uppercase",
      textShadow: "0 0 9px #2b29374f"
    },

    h3: {
      fontFamily: "'Visby Round Heavy', sans-serif",
      fontSize: 42,
      textTransform: "uppercase",
      textShadow: "0 0 11px #2b29374f"
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