import React from 'react'
import firebase from 'firebase'
import firebaseConfig from '../firebase-config'

import { FirebaseAuthContextProvider } from './firebase-auth-context'
import { FirebaseDbContextProvider } from './firebase-db-context'
import { FirebaseFunctionContextProvider } from './firebase-functions-context'

let init_context = {
  hello: 'world',
  firebase_app: null
}

let FirebaseContext = React.createContext(init_context)

function FirebaseContextProvider(props){
  let firebase_app = firebase.initializeApp(firebaseConfig)

  return(
    <FirebaseContext.Provider value={{ firebase_app }}>
      <FirebaseAuthContextProvider>
        <FirebaseFunctionContextProvider>
          <FirebaseDbContextProvider>
            {props.children}
          </FirebaseDbContextProvider>
        </FirebaseFunctionContextProvider>
      </FirebaseAuthContextProvider>
    </FirebaseContext.Provider>
  )
}

export default FirebaseContext

export {FirebaseContextProvider}