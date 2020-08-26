#!/usr/bin/env node

const fs = require( 'fs' )

const component_template = fs.readFileSync( '/home/logic/_workspace/gatsbyjs-playlist/gatsby-bulmaswatch-tryout/scripts/src/component-template.js', {
  encoding: 'utf-8'
} )

var wanted_html_content = fs.readFileSync( '/home/logic/_workspace/gatsbyjs-playlist/gatsby-bulmaswatch-tryout/scripts/out.html', {
  encoding: 'utf-8'
} )

fs.writeFileSync(
  'out-component.js',
  component_template.replace( '<component_html_content>', wanted_html_content )
)
