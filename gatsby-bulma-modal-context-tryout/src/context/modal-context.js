import React from 'react'

import StyleContext from './style-context'

let default_context = {
  hello: 'world', setHello: () => {},
  modal_ref:{}, setModalRef: () => {}, closeTestModal: () => {}, openTestModal: () => {},
}

let ModalContext = React.createContext(default_context)

function ModalContextProvider(props){
  let [hello, setHello] = React.useState({})
  let [modal_ref, setModalRef] = React.useState({})

  let {style} = React.useContext(StyleContext)

  const closeTestModal = () => {
    modal_ref.current.classList.remove(style.isActive)
  }

  const openTestModal = () => {
    modal_ref.current.classList.add(style.isActive)
  }

  return(
    <ModalContext.Provider value={{
      hello, setHello,
      modal_ref, setModalRef, closeTestModal, openTestModal
    }}>
      {props.children}
    </ModalContext.Provider>
  )
}

export default ModalContext
export {ModalContextProvider}