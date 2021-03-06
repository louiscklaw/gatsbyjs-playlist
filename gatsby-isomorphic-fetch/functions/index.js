const functions = require( 'firebase-functions' );
const fetch = require( 'isomorphic-fetch' );
const papaparse = require( 'papaparse' );
const cors = require( 'cors' );

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest( ( request, response ) => {
  response.send( "Hello from Firebase!" );
} );

function convertCsvToJson( csv_in ) {
  var parsed_data = papaparse.parse( csv_in ).data
  var data_length = parsed_data.length - 1
  var row_length = parsed_data[ 0 ].length
  var out_json = []

  for ( var i = 1; i < data_length; i = i + 1 ) {
    var temp_d = {}
    for ( var ii = 0; ii < row_length; ii = ii + 1 ) {
      temp_d[ parsed_data[ 0 ][ ii ] ] = parsed_data[ i ][ ii ]
    }
    out_json = [ ...out_json, temp_d ]
  }
  return out_json
}

exports.curl_fetch = functions.https.onRequest( ( request, response ) => {
  // handle wanted var not exist
  let json_text = JSON.parse( request.body )
  let target_csv = JSON.parse( request.body ).target_csv

  if ( target_csv == null || target_csv == undefined ) {
    console.log( 'handle target_csv not exist' )
    response.writeHead( 200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    } )
    response.write( JSON.stringify( {
      result: '123321'
    } ) )
    response.end()
  } else {
    fetch( target_csv )
      .then( result => {
        return result.text()
      } )
      .then( text => {
        response.writeHead( 200, {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        } )
        response.write( JSON.stringify( {
          fetch_result: convertCsvToJson( text )
        } ) )
        response.end();
        // response.json(convertCsvToJson(text))
      } )
      .catch( ( err ) => {
        response.writeHead( 200, {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        } )
        response.write( JSON.stringify( {
          result: 'target_url_not_found'
        } ) )
        response.end()
      } )
  }

} )