import React from 'react'

import FirebaseDbContext from './firebase-db-context'
import FirebaseAuthContext from './firebase-auth-context'
import FirebaseFunctionContext from './firebase-functions-context'

let default_value = {}

let FirebaseMixinsContext = React.createContext(default_value)

function FirebaseMixinsContextProvider(props){
  let {
    firebase_auth,
    firebaseLogin,
    firebaseLogout
  } = React.useContext(FirebaseAuthContext)

  let {
    addingNewRecord,
    firebase_db
  } = React.useContext(FirebaseDbContext)

  let {
    testAddAdminRole
  } = React.useContext(FirebaseFunctionContext)

  const helloworld = () => {
    console.log('helloworld')
  }

  const createUser = (email, password ) => {
    console.log(firebase_db)
  }

  return(
    <FirebaseMixinsContext.Provider value={{
      helloworld,
      createUser,
      firebase_auth,
      firebaseLogin,
      firebaseLogout,
      addingNewRecord,
      testAddAdminRole
    }}>
      {props.children}
    </FirebaseMixinsContext.Provider>
  )
}

export default FirebaseMixinsContext

export {FirebaseMixinsContextProvider}