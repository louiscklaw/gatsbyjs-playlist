import React from 'react'

import FirebaseMixinsContext from "../contexts/firebase-mixins"


function RecordPanel(){
  let {
    addingNewRecord,
    listRecord,
    genRecordTable
  } = React.useContext(FirebaseMixinsContext)

  const handleNewRecordClick = () => {
    addingNewRecord('guides',{hello:'world'})
  }

  const handleListRecordClick = () => {
    listRecord('guides')
  }

  return(
    <div>
      record panel
      <pre>
        record panel is privileged, require login
      </pre>
      <div>
        <button onClick={handleNewRecordClick}>new record</button>
      </div>
      <div>
        <button onClick={handleListRecordClick}>List record</button>

        {genRecordTable('guides')}

      </div>
    </div>
  )
}

export default RecordPanel