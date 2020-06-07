import React from 'react'

let default_value = {
  hello: 'world',
  light_theme_active: true
}

let light_theme = {backgroundColor: 'white', color: 'black'}
let dark_theme = {backgroundColor: 'black', color:'white'}

let StyleContext = React.createContext()

class StyleContextProvider extends React.Component{
  constructor(props){
    super(props)
    this.state = default_value
  }

  helloWorld = () => {
    console.log("helloworld context")
  }

  toggleTheme = () => {
    this.setState({...this.state, light_theme_active: !this.state.light_theme_active})
    console.log(this.state)
  }

  getActiveTheme = () => {
    return this.state.light_theme_active? light_theme: dark_theme
  }

  render(){
    return(
      <StyleContext.Provider value={{
        ...this.state,
        toggleTheme: this.toggleTheme,
        getActiveTheme: this.getActiveTheme,
        helloWorld: this.helloWorld
        }} >
        {this.props.children}
      </StyleContext.Provider>
    )
  }
}
export {StyleContext}
export default StyleContextProvider