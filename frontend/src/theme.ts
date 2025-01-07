import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light', // You can switch to 'dark' if needed.
    primary: {
      main: '#4a7c59', // Army green
      contrastText: '#ffffff', // White text for contrast
    },
    secondary: {
      main: '#8b5e34', // Brownish tone
      contrastText: '#ffffff', // White text for contrast
    },
    background: {
      default: '#eae7dc', // Neutral beige for background
      paper: '#ffffff', // White for paper elements
      //@ts-ignore
      customRed: '#ff0000', // Custom Red background color
      customYellow: '#ffcc00', // Custom Yellow background color
    },
    text: {
      primary: '#333333', // Dark gray for primary text
      secondary: '#4a7c59', // Army green for secondary text
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 8, // Slightly less rounded corners
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          backgroundColor: '#4a7c59', // Default button color
          '&:hover': {
            backgroundColor: '#3a5c47', // Darker green on hover
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#4a7c59', // Army green for AppBar
          color: '#ffffff', // White text in the AppBar
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#eae7dc', // Neutral beige for card-like components
          color: '#333333', // Dark gray text
        },
      },
    },
  },
});

export default theme;
