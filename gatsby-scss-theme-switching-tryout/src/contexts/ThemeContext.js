import React from "react"

import light_mode from '../scss/light_mode.module.scss'
import dark_mode from '../scss/dark_mode.module.scss'

const defaultState = {
  dark: false,
  toggleDark: () => {},
  active_style: {}
}

const ThemeContext = React.createContext(defaultState)

// Getting dark mode information from OS!
// You need macOS Mojave + Safari Technology Preview Release 68 to test this currently.
const supportsDarkMode = () => window.matchMedia("(prefers-color-scheme: dark)").matches === true

function ThemeProvider(props){
  let [dark, setDark] = React.useState(defaultState.dark)
  let [active_style, setActiveStyle] = React.useState(light_mode)

  const toggleDark = () => {
    // let dark = !this.state.dark
    // localStorage.setItem("dark", JSON.stringify(dark))
    // this.setState({ dark })
    // console.log('dark ?')
    setDark(!dark)
  }

  React.useEffect(()=>{
    setActiveStyle(dark? dark_mode: light_mode)
  }, [dark])

  React.useEffect(()=>{
    // TODO: translate
    // componentDidMount() {
    //   // Getting dark mode value from localStorage!
    //   const lsDark = JSON.parse(localStorage.getItem("dark"))
    //   if (lsDark) {
    //     this.setState({ dark: lsDark })
    //   } else if (supportsDarkMode()) {
    //     this.setState({ dark: true })
    //   }
    // }

  },[])

  return(
    <ThemeContext.Provider value={{
      dark, toggleDark,
      active_style,
      active_style, setActiveStyle
    }}>
      {props.children}
    </ThemeContext.Provider>

  )
}

export default ThemeContext
export { ThemeProvider }