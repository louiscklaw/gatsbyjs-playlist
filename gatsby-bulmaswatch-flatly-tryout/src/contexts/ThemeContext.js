import React from 'react'

import style from '../scss/origional_bulma/style.module.scss'
import flatly_style from '../scss/flatly/bulmaswatch.module.scss'


const default_value ={
  hello:'world',
  hello_func: () => {},
  active_style:{},
  lookUpStyleName: () => {}
}
const ThemeContext = React.createContext(default_value)

function ThemeContextProvider(props){
  const [hello, setHello] = React.useState(null)

  const hello_func = () => {
    console.log('hello_func from global.js')
  }


  const style_name = [
    'style',
    'flatly',
  ]

  const style_list = [
    style,
    flatly_style,
  ]

  const default_style = style

  const [active_style, setActiveStyle] = React.useState(default_style)

  const getStyleIdx = (style) => style_list.indexOf(style)
  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max))
  const nextStyle = (current_style) => {
    const idx_current_style = style_list.indexOf(current_style)
    if (idx_current_style == style_list.length -1) {
      return style_list[0]
    }else{
      return style_list[idx_current_style+1]
    }
  }

  const lookUpStyleName = (style_in) => style_name[getStyleIdx(style_in)]

  const rotateStyle = () => {
    active_style == style ? setActiveStyle(flatly_style): setActiveStyle(style)
    setActiveStyle(nextStyle(active_style))
  }



  return(
    <ThemeContext.Provider value={{
      hello, setHello,
      hello_func,
      active_style, setActiveStyle, rotateStyle,
      lookUpStyleName
    }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext

export {ThemeContextProvider}