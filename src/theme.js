import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
const dark = "#101327";

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