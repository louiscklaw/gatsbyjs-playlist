import React from 'react'

import FirebaseMixinsContext from "../contexts/firebase-mixins"
import { words } from 'lodash'


function RecordPanel(){
  let [search_result, setSearchResult] = React.useState(null)

  let {
    addingNewRecord,
    listRecord,
    genRecordTable,
    searchRecord
  } = React.useContext(FirebaseMixinsContext)

  const handleNewRecordClick = () => {
    addingNewRecord('guides',{hello:'world'})
  }

  const handleListRecordClick = () => {
    listRecord('guides')
  }

  const handleSearchClick = (e) => {
    e.preventDefault()

    let search_form = e.target.parentElement
    let search_field = 'field1'
    let search_criteria = search_form.search_criteria.value

    searchRecord('guides', search_field, search_criteria)
      .then(querySnapshot => {
        console.log('query done')
        console.log(querySnapshot.docs)
        querySnapshot.docs.forEach(doc => {
          setSearchResult( JSON.stringify(doc.data()) )
        })
      })
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

      <form id="search-form">
        <input type="text" defaultValue="1233211234567" name="search_criteria" />
        <button onClick={handleSearchClick}>search record</button>
        <div id="search-result">
          {search_result}
        </div>
      </form>

      <div>
        <button onClick={handleListRecordClick}>List record</button>

        {genRecordTable('guides')}

      </div>



    </div>
  )
}

export default RecordPanel