#!/usr/bin/env node

const fs = require( 'fs' )

const OUTPUT_HTML_PATH = '/home/logic/_workspace/gatsbyjs-playlist/gatsby-bulmaswatch-tryout/scripts/out.html'

var f_in_content = fs.readFileSync( OUTPUT_HTML_PATH, {
  encoding: 'utf-8'
} )

// var f_in_content = "<i className={combineStyles([active_style.fas, active_style.faHome])}></i>"

fs.writeFileSync(
  OUTPUT_HTML_PATH,
  f_in_content
  .replace(
    /<!-- (.+?) -->/g,
    ( m ) => {
    return `{/* ${m} */}`

    }
  )
)
