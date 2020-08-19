import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faAddressBook,
  faAirFreshener,
  faAlignCenter,
  faAlignLeft,
  faAlignRight,
  faAmbulance,
  faAngleDown,
  faAtom,
  faBold,
  faBus,
  faCheck,
  faCloudUploadAlt,
  faCoffee,
  faCoins,
  faDice,
  faEnvelope,
  faFileAlt,
  faHeading,
  faHeart,
  faHome,
  faItalic,
  faReply,
  faReply1,
  faRetweet,
  faTimes,
  faUnderline,
  faUpload,
  faUser,
  faWarning,
} from '@fortawesome/free-solid-svg-icons'

import {
  faGithub,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

let default_value = {
  hello: {},
  helloFunc: () => {}
}
let FontAwesomeContext = React.createContext(default_value)
function FontAwesomeContextProvider(props){
  let {children} = props

  let [hello, setHello] = React.useState()

  const helloFunc = () => {
    console.log('LangContext.js', 'helloworld')
  }

  let faReply1 = '123312'

  return(
    <FontAwesomeContext.Provider value={{
      hello, setHello,
      helloFunc,

  faAddressBook,
  faAirFreshener,
  faAlignCenter,
  faAlignLeft,
  faAlignRight,
  faAmbulance,
  faAngleDown,
  faAtom,
  faBold,
  faBus,
  faCheck,
  faCloudUploadAlt,
  faCoffee,
  faCoins,
  faDice,
  faEnvelope,
  faFileAlt,
  faHeading,
  faHeart,
  faHome,
  faItalic,
  faReply,
  faReply1,
  faRetweet,
  faTimes,
  faUnderline,
  faUpload,
  faUser,
  faWarning,

  faGithub,
  faTwitter,

      }}>
      {children}
    </FontAwesomeContext.Provider>

  )
}

export default FontAwesomeContext
export {FontAwesomeContextProvider}
