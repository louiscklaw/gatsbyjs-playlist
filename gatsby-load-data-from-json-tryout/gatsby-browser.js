import React from 'react'

import {GlobalContextProvider} from './src/contexts/global-context'

import './static/plyr.css';

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <GlobalContextProvider>
        {element}
      </GlobalContextProvider>
    </>
  )
};
