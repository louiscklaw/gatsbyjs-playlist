import React from 'react'

import style from '../scss/origional_bulma/style.module.scss'

// import cerulean_style from '../scss/cerulean/bulmaswatch.module.scss'
// import cosmo_style from '../scss/cosmo/bulmaswatch.module.scss'
// import cyborg_style from '../scss/cyborg/bulmaswatch.module.scss'
// import darkly_style from '../scss/darkly/bulmaswatch.module.scss'
import flatly_style from '../scss/flatly/bulmaswatch.module.scss'
// import journal_style from '../scss/journal/bulmaswatch.module.scss'
// import litera_style from '../scss/litera/bulmaswatch.module.scss'
// import lumen_style from '../scss/lumen/bulmaswatch.module.scss'
// import lux_style from '../scss/lux/bulmaswatch.module.scss'
// import materia_style from '../scss/materia/bulmaswatch.module.scss'
// import minty_style from '../scss/minty/bulmaswatch.module.scss'
// import nuclear_style from '../scss/nuclear/bulmaswatch.module.scss'
// import pulse_style from '../scss/pulse/bulmaswatch.module.scss'
// import sandstone_style from '../scss/sandstone/bulmaswatch.module.scss'
// import simplex_style from '../scss/simplex/bulmaswatch.module.scss'
// import slate_style from '../scss/slate/bulmaswatch.module.scss'
// import solar_style from '../scss/solar/bulmaswatch.module.scss'
// import spacelab_style from '../scss/spacelab/bulmaswatch.module.scss'
// import superhero_style from '../scss/superhero/bulmaswatch.module.scss'
// import united_style from '../scss/united/bulmaswatch.module.scss'
// import yeti_style from '../scss/yeti/bulmaswatch.module.scss'



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


  const style_name = [
    'style',
    // 'cerulean',
    // 'cosmo',
    // 'cyborg',
    // 'darkly',
    'flatly',
    // 'journal',
    // 'litera',
    // 'lumen',
    // 'lux',
    // 'materia',
    // 'minty',
    // 'nuclear',
    // 'pulse',
    // 'sandstone',
    // 'simplex',
    // 'slate',
    // 'solar',
    // 'spacelab',
    // 'superhero',
    // 'united',
    // 'yeti',
  ]

  const style_list = [
    style,
    // cerulean_style,
    // cosmo_style,
    // cyborg_style,
    // darkly_style,
    flatly_style,
    // journal_style,
    // litera_style,
    // lumen_style,
    // lux_style,
    // materia_style,
    // minty_style,
    // nuclear_style,
    // pulse_style,
    // sandstone_style,
    // simplex_style,
    // slate_style,
    // solar_style,
    // spacelab_style,
    // superhero_style,
    // united_style,
    // yeti_style,
  ]

  const default_style = flatly_style

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