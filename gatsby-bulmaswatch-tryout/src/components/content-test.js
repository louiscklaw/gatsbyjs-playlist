import React from 'react'
import ThemeContext from '../contexts/ThemeContext'
import LangContext from '../contexts/LangContext'

import {combineStyles} from '../utils/common'

function ContentTest(props){
  const {active_style} = React.useContext(ThemeContext)
  const {
    LoremTest,
    LoremTest2,

    chineseTestShort,
    emojiTestShort,
    koreaTestShort,
    japaneseTestShort,

    chineseTest,
    emojiTest,
    koreaTest,
    japaneseTest
  } = React.useContext( LangContext )

  return(
    <section className={active_style.section} id="content">
    <h1 className={active_style.title}> Content </h1>
    <hr />
    <div className={active_style.content}>
      <h1> Hello World </h1>
      <p> { LoremTest()+ chineseTest()+emojiTest()+japaneseTest()+koreaTest() } </p>
      <h2> Second level </h2>
      <p>
        Curabitur accumsan turpis pharetra <strong> augue tincidunt </strong> blandit. Quisque condimentum maximus mi,
        sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem
        rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.
        { LoremTest2()+ chineseTest()+emojiTest()+japaneseTest()+koreaTest() }
      </p>
      <ul>
        <li> In fermentum leo eu lectus mollis, quis dictum mi aliquet. </li>
        <li> Morbi eu nulla lobortis, lobortis est in, fringilla felis. </li>
        <li> Aliquam nec felis in sapien venenatis viverra fermentum nec lectus. </li>
        <li> Ut non enim metus. </li>
      </ul>
      <h3> Third level </h3>
      <p> Quisque ante lacus, malesuada ac auctor vitae, congue
        <a href="#"> non ante </a>. Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu
        rutrum tellus. </p>
      <ol>
        <li> Donec blandit a lorem id convallis. </li>
        <li> Cras gravida arcu at diam gravida gravida. </li>
        <li> Integer in volutpat libero. </li>
        <li> Donec a diam tellus. </li>
        <li> Aenean nec tortor orci. </li>
        <li> Quisque aliquam cursus urna, non bibendum massa viverra eget. </li>
        <li> Vivamus maximus ultricies pulvinar. </li>
      </ol>
      <blockquote>
        Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit ipsum, ut blandit est<br/>
        tellus sit amet turpis.<br/>
        {chineseTest()+emojiTest()}
      </blockquote>
      <p> Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et <em> justo sodales </em> elementum. Maecenas
        ultrices lacus quis neque consectetur, et lobortis nisi molestie. </p>
      <p> Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec mattis vulputate risus in luctus. Maecenas
        vestibulum interdum commodo. </p>
      <p> Suspendisse egestas sapien non felis placerat elementum. Morbi tortor nisl, suscipit sed mi sit amet, mollis
        malesuada nulla. Nulla facilisi. Nullam ac erat ante. </p>
      <h4> Fourth level </h4>
      <p> Nulla efficitur eleifend nisi, sit amet bibendum sapien fringilla ac. Mauris euismod metus a tellus laoreet,
        at elementum ex efficitur. </p>
      <p> Maecenas eleifend sollicitudin dui faucibus sollicitudin augue cursus non. Ut finibus eleifend arcu ut
        vehicula. Mauris eu est maximus est porta condimentum in eu justo. Nulla id iaculis sapien. </p>
      <table>
        <thead>
          <tr>
            <th> One{chineseTestShort()+emojiTestShort()} </th>
            <th> Two{chineseTestShort()+emojiTestShort()} </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> Three {chineseTestShort()+emojiTestShort()}  </td>
            <td> Four {chineseTestShort()+emojiTestShort()}  </td>
          </tr>
          <tr>
            <td> Five {chineseTestShort()+emojiTestShort()}  </td>
            <td> Six {chineseTestShort()+emojiTestShort()}  </td>
          </tr>
          <tr>
            <td> Seven {chineseTestShort()+emojiTestShort()}  </td>
            <td> Eight {chineseTestShort()+emojiTestShort()}  </td>
          </tr>
          <tr>
            <td> Nine {chineseTestShort()+emojiTestShort()}  </td>
            <td> Ten {chineseTestShort()+emojiTestShort()}  </td>
          </tr>
          <tr>
            <td> Eleven {chineseTestShort()+emojiTestShort()}  </td>
            <td> Twelve {chineseTestShort()+emojiTestShort()}  </td>
          </tr>
        </tbody>
      </table>
      <p> Phasellus porttitor enim id metus volutpat ultricies. Ut nisi nunc, blandit sed dapibus at, vestibulum in
        felis. Etiam iaculis lorem ac nibh bibendum rhoncus. Nam interdum efficitur ligula sit amet ullamcorper. Etiam
        tristique, leo vitae porta faucibus, mi lacus laoreet metus, at cursus leo est vel tellus. Sed ac posuere est.
        Nunc ultricies nunc neque, vitae ultricies ex sodales quis. Aliquam eu nibh in libero accumsan pulvinar. Nullam
        nec nisl placerat, pretium metus vel, euismod ipsum. Proin tempor cursus nisl vel condimentum. Nam pharetra
        varius metus non pellentesque. </p>
      <h5> Fifth level </h5>
      <p> Aliquam sagittis rhoncus vulputate. Cras non luctus sem, sed tincidunt ligula. Vestibulum at nunc elit.
        Praesent aliquet ligula mi, in luctus elit volutpat porta. Phasellus molestie diam vel nisi sodales, a eleifend
        augue laoreet. Sed nec eleifend justo. Nam et sollicitudin odio. </p>
      <h6> Sixth level </h6>
      <p> Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec pulvinar lacus sed diam dignissim, ut eleifend
        eros accumsan. Phasellus non tortor eros. Ut sed rutrum lacus. Etiam purus nunc, scelerisque quis enim vitae,
        malesuada ultrices turpis. Nunc vitae maximus purus, nec consectetur dui. Suspendisse euismod, elit vel rutrum
        commodo, ipsum tortor maximus dui, sed varius sapien odio vitae est. Etiam at cursus metus. </p>
    </div>
  </section>
  )

}

export default ContentTest