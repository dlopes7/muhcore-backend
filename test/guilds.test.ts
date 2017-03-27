import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import app from '../src/App';

chai.use(chaiHttp);
const expect = chai.expect;

describe('POST /api/v1/guilds', () => {

    it('Returns a JSON object', () => {
        return chai.request(app).post('/api/v1/guilds')
            .then(res => {
                expect(res.status).to.equal(200);
                expect(res).to.be.json;               
            });
    });
});