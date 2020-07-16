import React from 'react'

let funcPlaceholder = () => {}
let default_context = {
  hello: {}, setHello: funcPlaceholder
}

let TestContext = React.createContext(default_context)

function TestContextProvider(props){
  let [hello, setHello] = React.useState('hello')
  return(
    <TestContext.Provider value={{
      hello,
      setHello
    }}>
      {props.children}
    </TestContext.Provider>
  )
}

export default TestContext
export {TestContextProvider}