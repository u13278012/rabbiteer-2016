import express from 'express';
import morgan from 'morgan';
import {urlencoded, json} from 'body-parser';
import path from 'path';

/**
 * @typedef {Object} ServerOptions
 * @property {string} staticroot - The location of static files. Defaults to "public".
 */

/** The server object that serves the api and files */
export class Server {

  /** costructs a new server object
   * @param {ServerOptions} options - Server options
   */
  constructor(options = {}) {
    let app = express();

    // log every request to the console
    app.use(morgan('dev'));

    //set up static file serving
    let staticroot = options.staticroot;
    if (!staticroot) staticroot = 'public';
    if (!path.isAbsolute(staticroot)) staticroot = path.resolve(staticroot);
    this._staticroot = staticroot;
    console.log(`static files will be served from ${staticroot}`);
    app.use(express.static(staticroot));

    // parse application/x-www-form-urlencoded
    app.use(urlencoded({ 'extended': 'true' }));

    // parse application/json
    app.use(json());

    this.app = app;
  }

  /** Gets the address on which the application may be accessed. */
  get url() { return this.port && `http://localhost:${this.port}/`; }

  /** Gets the configured static root path. */
  get staticroot() { return this._staticroot; }

  /**
   * @param {int} port - The port on which to listen. Defaults to `process.env.PORT`
   * or port `8080` if not set.
   * @returns {Promise<express.Server>} returns a promise that will resolve when the server has begun
   * listening, or reject if something goes wrong. 
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
        server.on('listening', () => {
          this.server = server;
          resolve(server);
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  /** Stop listening
   * @return {undefined}
   */
  close() {
    if (this.server && this.server.close) {
      this.server.close();
      delete this.server;
      delete this.port;
    }
  }
}