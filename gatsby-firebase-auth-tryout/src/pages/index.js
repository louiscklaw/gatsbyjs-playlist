import React from "react"

import FirebaseMixinsContext from "../contexts/firebase-mixins"

import Layout from "../components/layout"

function IndexPage() {
  let {
    firebaseLogin,
    firebaseLogout,
    addingNewRecord,
    testAddAdminRole,
    createUser,
    googleLogin,
    user_info,
    githubLogin,
    facebookLogin
  } = React.useContext(FirebaseMixinsContext)

  const handleLoginButtonClick = () => {
    firebaseLogin('user1@example.com','123456')
  }

  const handleNewRecordClick = () => {
    addingNewRecord({hello:'world'})
  }

  return(
    <Layout>

      <div>
        <a href="https://console.firebase.google.com/u/1/project/fir-tryout-f4e7a/database/firestore/data~2Fcafes~2F6nCcvPz9IXQ9syC88VBP">link to firebase console</a>
      </div>

      <div> <button onClick={handleLoginButtonClick}>login</button> </div>
      <div> <button onClick={firebaseLogout}>logout</button> </div>
      <div> <button onClick={handleNewRecordClick}>new record</button> </div>
      <div> <button onClick={(e) => {testAddAdminRole(user_info.email)}}>add admin</button> </div>
      <div> <button onClick={createUser}>create user</button> </div>
      <div> <button onClick={googleLogin}>test google login</button> </div>
      <div> <button onClick={githubLogin}>test github login</button></div>
      <div> <button onClick={facebookLogin}>test facebook login</button></div>

      <div>
        userinfo:
        <pre>
          {JSON.stringify(user_info, null, 2)}
        </pre>
      </div>



    </Layout>
  )

}


export default IndexPage
