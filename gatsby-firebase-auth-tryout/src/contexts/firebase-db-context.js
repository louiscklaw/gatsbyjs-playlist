import React from 'react'
import FirebaseContext from './firebase-context'

// https://firebase.google.com/docs/database/web/structure-data
// https://firebase.google.com/docs/database/web/read-and-write
// https://firebase.google.com/docs/database/admin/retrieve-data#node.js

// transactions
// https://firebase.google.com/docs/database/web/read-and-write#save_data_as_transactions

let init_context = {
  hello: 'world',
  firebase_db: null
}

let FirebaseDbContext = React.createContext(init_context)

function FirebaseDbContextProvider(props){
  let {firebase_app} = React.useContext(FirebaseContext)
  let firebase_db = firebase_app.firestore()

  const addingNewRecord = (payload) => {
    firebase_db.collection('guides')
      .add({
        field1: 'value1',
        field2: 'value3'
      })
      .then(()=>{
        console.log('add new record done')
      })
      .catch((err) =>{
        console.log(err.message)
      })
  }

  return(
    <FirebaseDbContext.Provider value={{
      firebase_db,
      addingNewRecord
    }}>
      {props.children}
    </FirebaseDbContext.Provider>
  )
}

export default FirebaseDbContext

export {FirebaseDbContextProvider}