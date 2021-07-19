import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const colors = {
  primary: "#215970",
  second: "#378695",


};

const fonts = {
    heading: "iranyekan",
    body: "iranyekan",
}
const direction = "rtl"

const theme = extendTheme({direction, colors, fonts });

export default theme;
