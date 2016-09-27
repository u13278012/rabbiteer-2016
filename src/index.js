
import {Server} from './server';
import opn from 'opn';


// create a new instance of our server class
let server = new Server({
  staticroot: "www"
});

// start listening
server.listen().then(() => {
  let message = `listening really hard on port ${server.port}`;
  console.log(message);
  if (process.env.NODE_ENV !== 'production') {
    opn(server.url);
  }

}, e => {
  console.error(e.message)
  if (e.code === "EADDRINUSE") {
    console.log('the port/address is already in use. Is another instance already running?')
  }
});
