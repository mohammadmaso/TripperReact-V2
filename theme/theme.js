import { extendTheme } from '@chakra-ui/react';

const colors = {
  primary: 
    {
      50: '#deffe6',
      100: '#afffc1',
      200: '#7eff99',
      300: '#4dff72',
      400: '#20ff4b',
      500: '#009d21',
      600: '#00801a',
      700: '#00801a',
      800: '#004d0d',
      900: '#001b00',
    }
};

const components = {
    Button: { baseStyle: { _focus: { boxShadow: "none" } } },
    Switch: {
      baseStyle: {
        track: {
          _focus: {
            boxShadow: "none",
          },
        },
      },
    },
    Tabs: {
      baseStyle: {
        tab: {
          _focus: {
            boxShadow: "none",
          },
        },
      },
    },
  }

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
}


const fonts = {
    heading: "peyda",
    body: "iranyekan",
}
const direction = "rtl"

const theme = extendTheme({direction, colors, fonts , components, config});

export default theme;
