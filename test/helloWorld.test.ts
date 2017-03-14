import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import app from '../src/App';

chai.use(chaiHttp);
const expect = chai.expect;

describe('Home', () => {

  it('Should be JSON', () => {
    return chai.request(app).get('/')
      .then(res => {
        expect(res.type).to.eql('application/json');
      });
  });

  it('Should have a message prop', () => {
    return chai.request(app).get('/')
      .then(res => {
        expect(res.body.message).to.eql('Hello World!');
      });
  });

});