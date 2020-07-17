import React from 'react'
import ClipboardJS from 'clipboard'
import {Link} from 'gatsby'
import './test-copy-link.css'

function TestCopyLink(props){
  React.useEffect(()=>{
    new ClipboardJS('.btn');
    if (window.location.hash){
      if (document.querySelector(window.location.hash)){
        document.querySelector(window.location.hash).click()
      }
    }
  },[])
  let text = props.text;

  return(
    <div>
      {JSON.stringify(props)}
      <h3
        className="btn"
        data-clipboard-text={text.replace(' ','-')}>
        {text}
        <Link to={props.path+'#'+text.replace(' ','-')} id={text.replace(' ','-')}>
          <i className="fa fa-link" aria-hidden="true"></i>
        </Link>
      </h3>
      <p>
待進變果沒致友環健問水法代人苦天。
      </p>
    </div>
  )
}

export default TestCopyLink