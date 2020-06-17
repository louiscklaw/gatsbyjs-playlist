import React from "react"

import FirebaseMixinsContext from "../contexts/firebase-mixins"

import Layout from "../components/layout"
import RecordPanel from "../components/record-panel"
import AdminPanel from "../components/admin-panel"
import { resetWarningCache } from "prop-types"

function IndexPage() {
  let {
    user_info,

    firebaseLogin,
    firebaseLogout,
    addingNewRecord,
    testAddAdminRole,
    createUser,
    googleLogin,
    githubLogin,
    facebookLogin
  } = React.useContext(FirebaseMixinsContext)

  const handleLoginButtonClick = () => {

  }

  React.useEffect(()=>{
    let login_forms = document.querySelectorAll('.login-form')

    if (login_forms.length != 0){
      login_forms.forEach( login_form => {
        login_form.addEventListener('submit', (e) => {
          e.preventDefault()

          console.log(login_form)

          let login_result = login_form.querySelector('#login-result')
          firebaseLogin(
            login_form.email.value,
            login_form.password.value
          )
            .catch((err)=>{
              login_result.innerHTML = err.message
            })
        })
      })
    }

  },[])

  return(
    <Layout>

      <div>
        <a href="https://console.firebase.google.com/u/1/project/fir-tryout-f4e7a/database/firestore/data~2Fcafes~2F6nCcvPz9IXQ9syC88VBP">link to firebase console</a>
      </div>

      <div>
        <h3>testing password incorrect login</h3>
        <form id="login-form-password-incorrect" className="login-form">
          <input type="text" name="email" defaultValue="user@example.com" />
          <input type="password" name="password" defaultValue="123321" />
          <button onClick={handleLoginButtonClick}>login</button>
          <button type="reset">Reset</button>
          <div id="login-result"></div>
        </form>
      </div>

      <div>
        <h3>testing password correct login</h3>
        <form id="login-form-password-correct" className="login-form">
          <input type="text" name="email" defaultValue="user@example.com" />
          <input type="password" name="password" defaultValue="123456" />
          <button onClick={handleLoginButtonClick}>login</button>
          <button type="reset">Reset</button>
          <div id="login-result"></div>
        </form>
      </div>
      <div> <button onClick={firebaseLogout}>logout</button> </div>


      <div>
        <h3>testing admin correct login</h3>
        <form id="admin-login-form-password-correct" className="login-form">
          <input type="text" name="email" defaultValue="admin@example.com" />
          <input type="password" name="password" defaultValue="123456" />
          <button onClick={handleLoginButtonClick}>login</button>
          <button type="reset">Reset</button>
          <div id="login-result"></div>
        </form>
      </div>
      <div> <button onClick={firebaseLogout}>logout</button> </div>


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

      <RecordPanel />

      <AdminPanel />

    </Layout>
  )

}


export default IndexPage
