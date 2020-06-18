import React from 'react'

import FirebaseAuthContext from './firebase-auth-context'
import FirebaseFunctionContext from './firebase-functions-context'
import FirebaseDbContext from './firebase-db-context'

let default_value = {}

let FirebaseMixinsContext = React.createContext(default_value)

function FirebaseMixinsContextProvider(props){

  const helloFirebaseMixins = () => {
    console.log('helloFirebaseMixins')
  }

  let FirebaseAuthValues = React.useContext(FirebaseAuthContext)
  let FirebaseDbValues = React.useContext(FirebaseDbContext)
  let FirebaseFunctionValues = React.useContext(FirebaseFunctionContext)

  return(
    <FirebaseMixinsContext.Provider value={{
      helloFirebaseMixins,
      ...FirebaseAuthValues,
      ...FirebaseDbValues,
      ...FirebaseFunctionValues
    }}>

      {props.children}

    </FirebaseMixinsContext.Provider>
  )

}

export default FirebaseMixinsContext

export {FirebaseMixinsContextProvider}