import React from 'react'
import {ProfileWarehouse} from './profile-warehouse'

let default_context = {
  hello:"world",setHello:()=>{},
  user_profile:{},setUserProfile:()=>{},
}

let ProfileContext = React.createContext(default_context)

function ProfileContextProvider(props){
  let [hello, setHello] = React.useState()
  let [user_profile, setUserProfile] = React.useState(
    new ProfileWarehouse('logic')
  )

  React.useEffect(()=>{
    setUserProfile(user_profile)
  })

  return(
    <ProfileContext.Provider value={{
      hello, setHello,
      user_profile
    }}>
      {props.children}
    </ProfileContext.Provider>
  )
}

export default ProfileContext
export {ProfileContextProvider}