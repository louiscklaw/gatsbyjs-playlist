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
    return "文善洋也加一業未太……麼起專聽"
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

  const chineseTestShort = () => {
    return "文善"
  }

  const emojiTestShort = () => {
    return "🔯🍣"
  }

  const koreaTestShort = () => {
    return "제자"
  }

  const japaneseTestShort = () => {
    return "タハ"
  }

  const LoremTest = () => {
    return `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida,
    nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio,
    sollicitudin vel erat vel, interdum mattis neque.`
  }

  const LoremTest2 = () => {
    return (
      <>
        Curabitur accumsan turpis pharetra <strong> augue tincidunt </strong> blandit. Quisque condimentum maximus mi,
        sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem
        rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.
      </>
    )
  }


  return(
    <LangContext.Provider value={{
      hello, setHello,
      helloFunc,

      chineseTest,
      emojiTest,
      koreaTest,
      japaneseTest,

      chineseTestShort,
      emojiTestShort,
      koreaTestShort,
      japaneseTestShort,

      LoremTest,
      LoremTest2
      }}>
      {children}
    </LangContext.Provider>

  )
}

export default LangContext
export {LangContextProvider}
