#!/usr/bin/env node
const fs = require('fs')
var HTMLtoJSX = require( './htmltojsx.js' );

const IN_HTML_PATH='./in.html'
const OUTPUT_HTML_PATH='./out.html'

var converter = new HTMLtoJSX( {
  createClass: false
} );

fs.writeFileSync(OUTPUT_HTML_PATH, converter.convert( fs.readFileSync(IN_HTML_PATH,{encoding: 'utf-8'}) ) )
