import React from "react"

import { ThemeContextProvider } from "./src/contexts/ThemeContext"
import { LangContextProvider } from './src/contexts/LangContext'

export const wrapRootElement = ({ element }) => (
  <ThemeContextProvider>
    <LangContextProvider>
      {element}
    </LangContextProvider>
  </ThemeContextProvider>
)
