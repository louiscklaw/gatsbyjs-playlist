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
    firebaseLogout,
    googleLogin,
    githubLogin,
    facebookLogin,
    user_info
  } = React.useContext(FirebaseAuthContext)

  let firebase_db_context = React.useContext(FirebaseDbContext)

  let {
    testAddAdminRole
  } = React.useContext(FirebaseFunctionContext)

  const helloworld = () => {
    console.log('helloworld')
  }

  const createUser = (email, password ) => {
    console.log('createUser click')
  }

  return(
    <FirebaseMixinsContext.Provider value={{
      helloworld,
      createUser,
      firebase_auth,
      firebaseLogin,
      firebaseLogout,
      testAddAdminRole,
      googleLogin,
      user_info,
      githubLogin,
      facebookLogin,
      ...firebase_db_context
    }}>
      {props.children}
    </FirebaseMixinsContext.Provider>
  )
}

export default FirebaseMixinsContext

export {FirebaseMixinsContextProvider}