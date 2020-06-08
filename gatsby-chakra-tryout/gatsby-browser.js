import React from "react"
import { ThemeProvider } from "@chakra-ui/core";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={customTheme}>
    {element}
  </ThemeProvider>
)