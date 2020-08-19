import React from "react"

import { ThemeContextProvider } from "./src/contexts/ThemeContext"
import { LangContextProvider } from './src/contexts/LangContext'
import { FontAwesomeContextProvider} from './src/contexts/FontAwesomeContext'


export const wrapRootElement = ({ element }) => (
  <ThemeContextProvider>
    <FontAwesomeContextProvider>
      <LangContextProvider>
        {element}
      </LangContextProvider>
    </FontAwesomeContextProvider>
  </ThemeContextProvider>
)
