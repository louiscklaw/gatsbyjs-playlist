import React from 'react'
import site_style from '../scss/style.module.scss'


let default_context = {
  hello: 'world', setHello: () => {},
  style: {}, setSiteStyle: () => {},
}

let StyleContext = React.createContext(default_context)

function StyleContextProvider(props){
  let [hello, setHello] = React.useState({})
  let [style, setStyle] = React.useState(site_style)

  return(
    <StyleContext.Provider value={{
      hello, setHello,
      style, setStyle
    }}>
      {props.children}
    </StyleContext.Provider>
  )
}

export default StyleContext
export {StyleContextProvider}
