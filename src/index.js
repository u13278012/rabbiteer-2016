
import {Server} from './server';
import opn from 'opn';


// create a new instance of our server class
let server = new Server();

// start listening
server.listen().then(() => {
  console.log(`listening on port ${server.port}`);
  if (process.env.NODE_ENV === 'development') {
    opn(server.url);
  }

}, e => {
  console.error(e.message)
  if (e.code === "EADDRINUSE") {
    console.log('the port/address is already in use. Is another instance already running?')
  }
});
