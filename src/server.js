import express from 'express';
import morgan from 'morgan';


/** The server object that serves the api and files */
export class Server {

  /** costructs a new server object */
  constructor() {
    let app = express();

    app.use(express.static(__dirname + '/public'));

    // log every request to the console
    app.use(morgan('dev'));

    // parse application/x-www-form-urlencoded            
    //app.use(bodyParser.urlencoded({ 'extended': 'true' }));

    // parse application/json
    //app.use(bodyParser.json());

    this.app = app;
  }

  /**
   * Starts listening.
   * @param {string|number} port - The port to listen on. If not given will use `process.env.PORT` or `8080` if not set.
   * @return {promise} A promise that will resolve one listening has started, or rejected if listening fails.
   */
  listen(port = undefined) {
    // port is optional
    if (!port) port = parseInt(this.port || process.env.PORT || 8080);
    this.port = port;

    //return a promise that resolves or rejects based on the ability to listen
    return new Promise((resolve, reject) => {
      try {
        let server = this.app.listen(port);
        server.on('error', reject);
        server.on('listening', resolve);
      } catch (e) {
        reject(e);
      }
    });
  }
}