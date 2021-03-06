import React from 'react'
import firebase from 'firebase/app'
import firebaseConfig from '../firebase-config'

import { FirebaseMixinsContextProvider } from './firebase-mixins'
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
        <FirebaseDbContextProvider>
          <FirebaseFunctionContextProvider>
            <FirebaseMixinsContextProvider>
              {props.children}
            </FirebaseMixinsContextProvider>
          </FirebaseFunctionContextProvider>
        </FirebaseDbContextProvider>
      </FirebaseAuthContextProvider>
    </FirebaseContext.Provider>
  )
}

export default FirebaseContext

export {FirebaseContextProvider}