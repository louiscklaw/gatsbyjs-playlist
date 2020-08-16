import React from 'react'

// import style from '../scss/style.module.scss'
// import flatly_style from '../scss/flatly/bulmaswatch.scss'

import flatly_style from '../scss/flatly/bulmaswatch.module.scss'
import style from '../scss/style.module.scss'

const default_value ={
  hello:'world',
  hello_func: () => {},
  active_style:{}
}
const ThemeContext = React.createContext(default_value)

function ThemeContextProvider(props){
  const [hello, setHello] = React.useState(null)

  const hello_func = () => {
    console.log('hello_func from global.js')
  }

  const [active_style, setActiveStyle] = React.useState(style)

  const rotateStyle = () => {
    active_style == style ? setActiveStyle(flatly_style): setActiveStyle(style)

  }

  return(
    <ThemeContext.Provider value={{
      hello, setHello,
      hello_func,
      active_style, setActiveStyle, rotateStyle
    }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext

export {ThemeContextProvider}