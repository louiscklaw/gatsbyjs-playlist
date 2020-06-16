import React from 'react'
import FirebaseContext from './firebase-context'

let init_context = {
  hello: 'world',
  firebase_auth: null
}

let FirebaseAuthContext = React.createContext(init_context)

function FirebaseAuthContextProvider(props){
  let {firebase_app} = React.useContext(FirebaseContext)
  let firebase_auth = firebase_app.auth()

  React.useEffect(() => {
    // init checking on auth changed
    firebaseAuthChanged()

    return function cleanup() {
      firebaseLogout()
    }
  },[])

  const firebaseAuthChanged = () => {
    firebase_auth.onAuthStateChanged( user => {
      if(user){
        user.getIdTokenResult()
          .then(idTokenResult => {
            user.admin = idTokenResult.claims.admin
            console.log(`idTokenResult,`, idTokenResult)
          })
      }
    })
  }

  const firebaseLogout = () => {
    // alert('calling firebase auth context logout')
    firebase_auth.signOut()
  }

  const firebaseLogin = (email, password) => {
    firebase_auth.signInWithEmailAndPassword( email, password ).then( ( cred ) => {
      console.log(cred)
    } )
  }

  return(
    <FirebaseAuthContext.Provider value={{
      firebase_auth,
      firebaseLogout,
      firebaseLogin
      }}>
      {props.children}
    </FirebaseAuthContext.Provider>
  )
}

export default FirebaseAuthContext

export {FirebaseAuthContextProvider}