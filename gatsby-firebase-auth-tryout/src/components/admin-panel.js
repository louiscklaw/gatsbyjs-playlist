import React from 'react'

import FirebaseMixinContext from '../contexts/firebase-mixins'

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
  const {user_info} = React.useContext(FirebaseMixinContext)
  return(
    <>
      { user_info.admin ? <AdminPanelContent />: '' }
    </>
  )
}

export default AdminPanel