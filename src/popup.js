const doc = document;
const http = new XMLHttpRequest();

/**** HELPERS ****/

/**
 * Extract host and app from URL
 * @param {string} url - URL to parse
 * @returns {(Object|boolean)} Object with host and app or false
 */
function parseURL( url ) {
  // extract via regex -> http(s)://<host>:8000/de-DE/app/<app>/...
  const param = url.match(/^https?:\/\/(.*?):\d+\/[a-z]{2}-[A-Z]{2}\/app\/(.*?)\//);

  // check, if host and app could be found
  if (  param[1] && param[2] ) {
    return {
      host: param[1],
      app: param[2]
    };
  } else {
    return false;
  }
}

/**** EVENT HANDLER ****/

function reloadTarget() {
  const host   = doc.getElementById( 'inp_host' ).value;
  const app    = doc.getElementById( 'inp_app' ).value;
  const target = doc.getElementById( 'inp_target' ).value;

  // create http params
  // const uri = `https://${ host }:8089/servicesNS/nobody/${ app }/configs/conf-${ target }/_reload`;
  const uri = 'https://localhost:8089/servicesNS/nobody/MyApp/configs/conf-props/_reload';
  const auth = 'Basic ' + btoa( 'admin:admin' );

  // open connection and set head
  http.open( 'GET', uri );
  http.setRequestHeader( 'Authorization', auth, true );
  
  // callback for reponse
  http.onreadystatechange = () => {
    if ( http.readyState == XMLHttpRequest.DONE && http.status == 200 ) {
      console.log( http.readyText );
    }
  };

  // start connecting
  http.send();
}

function bumpInstance() {
  console.log('bump it');
}

// DOCUMENT READY
doc.addEventListener( 'DOMContentLoaded', () => {
  const url = 'http://localhost:8000/de-DE/app/MyApp/';
  const params = parseURL( url );

  doc.getElementById( 'inp_host' ).value = params.host;
  doc.getElementById( 'inp_app' ).value = params.app;

  // bind event handlers to elements
  doc.getElementById( 'btn_reload' ).addEventListener( 'click', reloadTarget );
  doc.getElementById( 'btn_bump' ).addEventListener( 'click', bumpInstance );
});