import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
const dark = "#3C3C3D";
const light = "#f0f0f0";

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: mode(dark)(props)
      }
    })
  }
});

export default theme;