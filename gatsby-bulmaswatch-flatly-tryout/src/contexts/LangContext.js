import React from 'react'

let default_value = {
  hello: {},
  helloFunc: () => {}
}
let LangContext = React.createContext(default_value)

function LangContext(props){
  let {children} = props

  let [hello, setHello] = React.useState()

  const helloFunc = () => {
    console.log('LangContext.js', 'helloworld')
  }

  return(
    <LangContext.Provider value={{
      hello, setHello,
      helloFunc
    }}>
      {children}
    </LangContext.Provider>

  )
}

export default LangContext
export {LangContextProvider}