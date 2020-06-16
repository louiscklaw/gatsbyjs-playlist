import React from "react"

import FirebaseAuthContext from '../contexts/firebase-auth-context'
import FirebaseDbContext from '../contexts/firebase-db-context'

import Layout from "../components/layout"
import FirebaseFunctionContext from "../contexts/firebase-functions-context"

function IndexPage() {
  let {
    firebase_auth,
    firebaseLogin,
    firebaseLogout
  } = React.useContext(FirebaseAuthContext)

  let {
    addingNewRecord
  } = React.useContext(FirebaseDbContext)

  let {
    testAddAdminRole
  } = React.useContext(FirebaseFunctionContext)

  React.useEffect(()=>{
    console.log(firebase_auth)
    // firebaseLogin('user1@example.com', '123456')

  })

  const handleLoginButtonClick = () => {
    firebaseLogin('user1@example.com','123456')
  }

  const handleLogoutButtonClick = () => {
    firebaseLogout()
  }

  const handleNewRecordClick = () => {
    addingNewRecord({hello:'world'})
  }

  const handleAddAdminClick = () => {
    testAddAdminRole()
  }

  return(
    <Layout>
      <div>
        <button onClick={handleLoginButtonClick}>login</button>
      </div>

      <div>
        <button onClick={handleLogoutButtonClick}>logout</button>
      </div>

      <div>
        <button onClick={handleNewRecordClick}>new record</button>
      </div>

      <div>
        <button onClick={handleAddAdminClick}>add admin</button>
      </div>


      <div>
        <a href="https://console.firebase.google.com/u/1/project/fir-tryout-f4e7a/database/firestore/data~2Fcafes~2F6nCcvPz9IXQ9syC88VBP">link to firebase console</a>
      </div>
    </Layout>
  )

}


export default IndexPage
