import {expect} from 'chai';
import {Server} from '../src/server';
import path from 'path';

describe('Server', () => {
  it('should be creatable with no arguments', () => {
    let server = new Server();
    expect(server).to.not.be.null;
  });

  it('should use static root "public" by default', () => {
    let server = new Server();
    expect(server).to.not.be.null;
    expect(server.staticroot).to.be.eq(path.join(__dirname, '..', 'public'));
  });

  it('should use relative static root from options', () => {
    let server = new Server({ staticroot: "." });
    expect(server).to.not.be.null;
    expect(server.staticroot).to.be.eq(process.cwd());
  });

  it('should use absolute static root from options', () => {
    let server = new Server({ staticroot: __dirname });
    expect(server).to.not.be.null;
    expect(server.staticroot).to.be.eq(__dirname);
  });

  it('initial close should do nothing', () => {
    let server = new Server();
    expect(server).to.not.be.null;
    server.close();
    server.close();
  });

  it('should listen and close', () => {
    let server = new Server();
    expect(server).to.not.be.null;
    let promise = server.listen();
    return promise.then(svr => {
      expect(svr).to.not.be.null;
      server.close();
    }, e => {
      expect().fail(e);
    })
  });

  it('should listen on port 8080', () => {
    let server = new Server();
    expect(server).to.not.be.null;
    let promise = server.listen();
    return promise.then(svr => {
      expect(svr).to.not.be.null;
      let port = server.port;
      server.close();
      expect(port).to.be.eq(8080);
    }, e => {
      expect().fail(e);
    })
  });

  it('should reject on double listen', done => {
    let server = new Server();
    expect(server).to.not.be.null;
    let promise = server.listen();

    promise.then(svr => {
      expect(svr).to.not.be.null;

      server.listen(8080).then(
        () => { server.close(); done('nope') },
        () => { server.close(); done(); });
    }, e => {
      done(e);
    });
  });

  it('should tell the url after listening', () => {
    let server = new Server();
    expect(server).to.not.be.null;
    let promise = server.listen();
    return promise.then(svr => {
      expect(svr).to.not.be.null;
      let url = server.url;
      let port = server.port;
      server.close();
      expect(url).to.be.eq(`http://localhost:${port}/`);
    }, e => {
      expect().fail(e);
    })
  });

  it('should not have certain props when not listening', () => {
    let server = new Server();
    expect(server).to.not.be.null;
    expect(server.url).to.be.undefined;
    expect(server.port).to.be.undefined;

    let promise = server.listen();
    return promise.then(svr => {
      expect(svr).to.not.be.null;
      let port = server.port;
      let url = server.url;
      server.close();
      expect(port).to.not.be.undefined;
      expect(url).to.not.be.undefined;
      expect(server.port).to.be.undefined;
      expect(server.url).to.be.undefined;
    }, e => {
      expect().fail(e);
    })
  });

  it('should reject on really weird situation that we only put in for code coverage to pass', done => {
    let server = new Server();
    expect(server).to.not.be.null;
    delete server.app;
    let promise = server.listen();

    promise.then(() => done('nope'), () => done());
  });
});
