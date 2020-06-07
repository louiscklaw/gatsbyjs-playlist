import React from "react"

import StyleContextProvider from "./src/contexts/style-context"

export const wrapRootElement = ({ element }) => (
  <StyleContextProvider>
    {element}
  </StyleContextProvider>
)