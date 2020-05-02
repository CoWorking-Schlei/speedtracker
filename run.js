/*
 * Start all tests with one script
 */

const pages = [
  'about',
  'account',
  'blog',
  'coliving',
  'contact',
  'coworking',
  'home',
  'imprint',
  'newsletter',
  'sparetime',
];

pages.map( function ( page ) {

  const speeds = [
    'cable',
    '3g',
  ];

  speeds.map( function ( speed ) {
    console.log( 'Call:' + page + '-' + speed );

    // Prepare url vars
    const gitUserName = 'CoWorking-Schlei';
    const gitRepo = 'speedtracker';
    const branch = 'master';
    const key = 'coworkingschlei';

    let profile = page + '-' + speed;

    const https = require( 'https' );
    let options = {
      hostname: 'api.speedtracker.org',
      path: '/v1/test/' + gitUserName + '/' + gitRepo + '/' + branch + '/' + profile + '?key=' + key,
      method: 'GET',
    };

    let req = https.request( options, res => {

      if ( 200 !== parseInt( res.statusCode ) ) {
        console.log( 'Not 200 for :' + options.path );
      }

    } );

    req.on( 'error', error => {
      console.log( 'Error with :' + options.path );
      console.error( error );
    } );

    req.end();

  } );

} );
