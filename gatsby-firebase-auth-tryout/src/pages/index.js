import React from "react"

import FirebaseMixinsContext from "../contexts/firebase-mixins"

import Layout from "../components/layout"

function IndexPage() {
  let {
    firebase_auth,
    firebaseLogin,
    firebaseLogout,
    addingNewRecord,
    testAddAdminRole,
    createUser
  } = React.useContext(FirebaseMixinsContext)

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

  const handleCreateUserClick = () => {
    createUser()
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
        <button onClick={handleCreateUserClick}>create user</button>
      </div>

      <div>
        <a href="https://console.firebase.google.com/u/1/project/fir-tryout-f4e7a/database/firestore/data~2Fcafes~2F6nCcvPz9IXQ9syC88VBP">link to firebase console</a>
      </div>
    </Layout>
  )

}


export default IndexPage
