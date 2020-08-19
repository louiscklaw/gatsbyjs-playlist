import React from 'react'

let default_value = {
  hello: {},
  helloFunc: () => {}
}
let LangContext = React.createContext(default_value)

function LangContextProvider(props){
  let {children} = props

  let [hello, setHello] = React.useState()

  const helloFunc = () => {
    console.log('LangContext.js', 'helloworld')
  }

  const chineseTest = () => {
    return "文善"
  }

  const emojiTest = () => {
    return "🔯🍣💵 🐪👫🐈📅📍🎻💼 🐣🍖🐻📩🍨."
  }

  const koreaTest = () => {
    return "제자문회의를 둘 수 있다, 누구든지 법률에 의하"
  }

  const japaneseTest = () => {
    return "タハネ文会ヲツレ端作"
  }

  const chineseTestTitle = () => {
    return "文善"
  }

  const emojiTestTitle = () => {
    return "🔯🍣"
  }

  const koreaTestTitle = () => {
    return "제자"
  }

  const japaneseTestTitle = () => {
    return "タハ"
  }

  return(
    <LangContext.Provider value={{
      hello, setHello,
      helloFunc,

      chineseTest,
      emojiTest,
      koreaTest,
      japaneseTest,

      chineseTestTitle,
      emojiTestTitle,
      koreaTestTitle,
      japaneseTestTitle
      }}>
      {children}
    </LangContext.Provider>

  )
}

export default LangContext
export {LangContextProvider}
