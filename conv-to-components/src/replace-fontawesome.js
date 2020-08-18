#!/usr/bin/env node

const fs = require( 'fs' )

const OUTPUT_HTML_PATH = './out.html'

var f_in_content = fs.readFileSync( OUTPUT_HTML_PATH, {
  encoding: 'utf-8'
} )

// var f_in_content = "<i className={combineStyles([active_style.fas, active_style.faHome])}></i>"

fs.writeFileSync(
  OUTPUT_HTML_PATH,
  f_in_content
  .replace(
    /<i className={combineStyles\(\[active_style.(.+?), active_style.fa(.+?)\]\)}.*?\/>/g,
    ( m, p1, p2 ) => {
      var fa_category = p1
      var fa_icon_name = p2
      var fontawesome_icon_name_in_js = fa_category+fa_icon_name
      return `<FontAwesomeIcon icon={${fontawesome_icon_name_in_js}} />`
      // return `123312`
    }
  )
)