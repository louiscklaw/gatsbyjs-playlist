import React from "react"

import { ModalContextProvider } from "./src/context/modal-context"
import { StyleContextProvider } from "./src/context/style-context"

export const wrapRootElement = ({ element }) => (
  <StyleContextProvider>
    <ModalContextProvider>
      {element}
    </ModalContextProvider>
  </StyleContextProvider>
)