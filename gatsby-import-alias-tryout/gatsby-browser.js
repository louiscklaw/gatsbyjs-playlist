import React from "react"

import { TestContextProvider } from "~contexts/test-context"

export const wrapRootElement = ({ element }) => {
  return (
    <TestContextProvider>
      {element}
    </TestContextProvider>
  )
}
