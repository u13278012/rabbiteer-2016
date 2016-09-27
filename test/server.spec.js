import {expect} from 'chai';
import {Server} from '../src/server';

describe('Server', () => {
  it('should be creatable with no arguments', () => {
    let server = new Server();
    expect(server).to.not.be.null;
  });
});
