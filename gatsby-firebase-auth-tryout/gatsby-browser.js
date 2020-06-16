import React from "react"

import { FirebaseContextProvider } from "./src/contexts/firebase-context"

export const wrapRootElement = ({ element }) => (
  <FirebaseContextProvider>
      {element}
  </FirebaseContextProvider>
)
