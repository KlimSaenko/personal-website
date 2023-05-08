import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme({
  typography: {
    fontFamily: "'Visby Round Medium', sans-serif",
    fontWeight: 400,
    fontSize: 16,
    
    h1: {
      fontFamily: "'Visby Round Heavy', sans-serif",
      fontSize: 78,
      marginBottom: "16px",
      textTransform: "uppercase",
      textShadow: "0 0 15px #19171fa1"
    },

    h2: {
      fontFamily: "'Visby Round Heavy', sans-serif",
      fontSize: 56,
      marginBottom: "16px",
      textTransform: "uppercase",
      textShadow: "0 0 9px #22212c5c"
    },

    h3: {
      fontFamily: "'Visby Round Heavy', sans-serif",
      fontSize: 42,
      marginBottom: "8px",
      textTransform: "uppercase",
      textShadow: "0 0 11px #2b29374f"
    },

    tag: {
      fontFamily: "'Visby Round Heavy', sans-serif",
      fontSize: 24,
      textTransform: "uppercase"
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
      main: '#d1ba87'
    },
    home: {
      main: '#ebdfc4'
    },
    info: {
      main: '#e3ddc5d9'
    }
  },
});

export default defaultTheme;