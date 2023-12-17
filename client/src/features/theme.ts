import { createTheme, responsiveFontSizes, Theme } from "@mui/material";

export const createCustomTheme = (palleteType: 'light' | 'dark'): Theme => {
  return responsiveFontSizes(
    createTheme({
      palette: {
        mode: palleteType,
        primary: {
          main: palleteType === 'light' ? '#d3979f' : '#b0885c',
          dark: palleteType === 'light' ? '#b44b59' : '#dcb18c',
        },
        secondary: {
          main: palleteType === 'light' ? '#fff4e6' : '#9e3642',
          dark: palleteType === 'light' ? '#fff4e6' : '#d27984',
        },
      },
      typography: {
        allVariants: {
          color: palleteType === 'light' ? 'black' : 'white',
          fontFamily: 'Satoshi-Medium',
        },
        body1: {
          fontSize: '1.2rem',
        },
        body2: {
          fontSize: '1.2rem',
        },
      },
    })
  );
};
