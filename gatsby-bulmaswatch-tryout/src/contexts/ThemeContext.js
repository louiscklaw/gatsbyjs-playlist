import React from 'react'

// import style from '../scss/style.module.scss'
// import flatly_style from '../scss/flatly/bulmaswatch.scss'

// import cerulean_style from '../scss/cerulean/bulmaswatch.module.scss'
// import cosmo_style from '../scss/cosmo/bulmaswatch.module.scss'
// import cyborg_style from '../scss/cyborg/bulmaswatch.module.scss'
// import darkly_style from '../scss/darkly/bulmaswatch.module.scss'
// import default_style from '../scss/default/bulmaswatch.module.scss'
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