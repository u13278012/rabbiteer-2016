
import {Server} from './server';
import {startDebugSupport} from './debugsupport';

//figure out what environment we are in (either development or production).
// if we are in a dev environment we enable more debug features.
const development = process.env.NODE_ENV !== 'production';

if (development) {
  startDebugSupport();
}

// create a new instance of our server class
let server = new Server({
  //where static files will be served from
  staticroot: "www"
});

// start listening
server.listen().then(() => {
  console.log(`listening on port ${server.port}`);
  if (development) {
    //this opens the browser
    require('opn')(server.url);
  }
}, e => {
  //oh noes!
  console.error(e.message)
  if (e.code === "EADDRINUSE") {
    console.log('the port/address is already in use. Is another instance already running?')
  }
});

//the program will continue running while the server is listening.