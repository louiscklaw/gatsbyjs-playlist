import React from "react"

import { ProfileContextProvider } from "./src/contexts/profile-context"

export const wrapRootElement = ({ element }) => (
  <ProfileContextProvider>
    {element}
  </ProfileContextProvider>
)
