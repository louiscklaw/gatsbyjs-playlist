#!/usr/bin/env node

'use strict';

var fs = require( 'fs' )
var HTMLtoJSX = require( './htmltojsx.js' );

var converter = new HTMLtoJSX( {
  createClass: false
} );


function try_convert( input_html_path, output_html_path ) {

  var file_content = fs.readFileSync( input_html_path, {
    encoding: 'utf-8'
  } )

  var output = converter.convert( file_content );


  const convert_uppercase = output.replace(
    /className="(.+?)"/g, ( m, p1 ) => {
      return 'className="' + p1.replace( /-(\w)/g, ( mm, pp1 ) => {
        return pp1.toUpperCase()
      } ) + '"'
    }
  )

  const final = convert_uppercase.replace( /className="(.+?) ?"/g, ( m, p1 ) => {
    if ( p1.split( ' ' ).length > 1 ) {
      return `className={combineStyles([${p1.split(' ').filter(x => x.trim() != '').map(x => 'active_style.'+x).join(', ')}])}`
    } else {
      return `className={active_style.${p1}}`
    }
  } )


  fs.writeFileSync( output_html_path, final, {
    encoding: 'utf-8'
  } )

}

try_convert( 'helloworld.html', 'helloworld_output.html' )
try_convert( 'input.html', 'output.html' )
