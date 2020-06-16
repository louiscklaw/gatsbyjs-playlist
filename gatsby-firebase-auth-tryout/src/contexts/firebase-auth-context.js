import React from 'react'
import firebase from 'firebase'

import FirebaseContext from './firebase-context'

let init_context = {
  hello: 'world',
  user_info: null,
  firebase_auth: null
}

let FirebaseAuthContext = React.createContext(init_context)

function FirebaseAuthContextProvider(props){
  let {firebase_app} = React.useContext(FirebaseContext)
  let firebase_auth = firebase_app.auth()

  let [user_info, setUserInfo] = React.useState({
    email: null,
    is_admin: false
  })

  React.useEffect(() => {
    // init checking on auth changed
    firebaseAuthChanged()

    return function cleanup() {
      firebaseLogout()
      setUserInfo({
        email: '',
        is_admin: false
      })
    }
  },[])

  const firebaseAuthChanged = () => {
    firebase_auth.onAuthStateChanged( user => {
      if(user){
        user.getIdTokenResult()
          .then(idTokenResult => {
            user.admin = idTokenResult.claims.admin
            console.log(`idTokenResult,`, idTokenResult)
            setUserInfo({
              email: user.email,
              admin: user.admin
            })
          })
      }
    })
  }

  const firebaseLogout = () => {
    // alert('calling firebase auth context logout')
    console.log('calling firebaseLogout')
    firebase_auth.signOut()
    setUserInfo(init_context)
  }

  const firebaseLogin = (email, password) => {
    firebase_auth.signInWithEmailAndPassword( email, password )
      .then( ( cred ) => {
        console.log(cred)
      } )
  }

  const googleLogin = () => {
    var provider = new firebase.auth.GoogleAuthProvider()
    provider.setCustomParameters( { 'login_hint': 'user@example.com' } )
    firebase_auth.signInWithPopup(provider)
      .then((userdata) => {
        console.log('google login ok')
      })
      .catch((err)=>{
        console.log("google login failed, ",err.message)
      })
  }

  const githubLogin = () => {
    var provider = new firebase.auth.GithubAuthProvider()

    provider.setCustomParameters( {
      'login_hint': 'user@example.com'
    } )

    firebase_auth.signInWithPopup( provider )
    .then( ( userdata )=>{
      console.log('github login ok')
    })
    .catch( (err) =>{
      console.log('github login fail,', err.message)
    } )
  }

  const facebookLogin = () => {
    var provider = new firebase.auth.FacebookAuthProvider();

    provider.setCustomParameters( {
      'login_hint': 'user@example.com'
    } )

    firebase_auth.signInWithPopup( provider )
    .then( ( userdata )=>{
      console.log('facebook login ok')
    })
    .catch( (err) =>{
      console.log('facebook login fail,', err.message)
    } )
  }

  return(
    <FirebaseAuthContext.Provider value={{
      user_info,
      firebase_auth,
      firebaseLogout,
      firebaseLogin,
      googleLogin,
      githubLogin,
      facebookLogin
      }}>
      {props.children}
    </FirebaseAuthContext.Provider>
  )
}

export default FirebaseAuthContext

export {FirebaseAuthContextProvider}
