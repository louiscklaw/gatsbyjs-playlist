import React, { Component } from 'react'

let light_theme = {backgroundColor: 'red'}
let dark_theme = {backgroundColor: 'black', color: "white"}

let default_style = {
  hello:'world',
  light_theme: true,
  theme_content: light_theme
}

const StyleContext = React.createContext()

class StyleContextProvider extends Component{
  constructor(props){
    super(props)
    this.state = default_style
  }

  updateTheme= (theme)=>{
    this.setState({...this.state, light_theme: theme})
    console.log(this.state.light_theme)
  }

  getActiveTheme = () => {
    return this.state.light_theme? light_theme: dark_theme
  }

  render(){
    return(
      <StyleContext.Provider value={{
        ...this.state,
        updateTheme: this.updateTheme,
        getActiveTheme: this.getActiveTheme
        }} style={{}}>
        {this.props.children}
      </StyleContext.Provider>
    )
  }
}

export {StyleContext}
export default StyleContextProvider
