import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const colors = {
  primary: {
    100: "#009d21",
    200: "#4BF970",
    300: "#84FBA0",
    400: "#009d21",
    500: "#009d21",
    600: "#009d21",
    700: "#009d21",
    800: "#009d21",
    900: "#009d21",
  },
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

const fonts = {
    heading: "iranyekan",
    body: "iranyekan",
}
const direction = "rtl"

const theme = extendTheme({direction, colors, fonts , components});

export default theme;
