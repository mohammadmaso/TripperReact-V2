import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from "@chakra-ui/theme-tools"

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
    
    // Menu: {
    //   sizes :{
    //     sm :{
    //       h:"30px",
    //     }
    //   }
    // },
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
    body: "iranyekanfanum",
}
const direction = "rtl"

// const breakpoints = createBreakpoints({
//   sm: "320px",
//   md: "768px",
//   lg: "1200px",
//   xl: "1600px",
// })

const theme = extendTheme({direction, colors, fonts , components, config, sizes:{
  fontSizes:{
    md: "0.7rem",
    sm: "0.5rem"
  }
}});

export default theme;
