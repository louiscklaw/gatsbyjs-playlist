import React from 'react'

import FirebaseMixinsContext from '../contexts/firebase-mixins'

function AdminPanelContent(){
  return(
    <div>
      admin panel
      <pre>
        admin panel is privileged, require login + admin
      </pre>
    </div>
  )
}

function AdminPanel(){
  const {user_info} = React.useContext(FirebaseMixinsContext)

  React.useEffect(()=>{

  },[])

  return(
    <>
      { (typeof(user_info) != 'undefined' && user_info.is_admin) ? <AdminPanelContent /> : ""}
    </>
  )
}

export default AdminPanel
