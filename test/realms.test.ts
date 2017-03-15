import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import app from '../src/App';

chai.use(chaiHttp);
const expect = chai.expect;

describe('GET /api/v1/realms', () => {

    it('Returns a JSON array', () => {
        return chai.request(app).get('/api/v1/realms')
            .then(res => {
                expect(res.status).to.equal(200);
                expect(res).to.be.json;
                expect(res.body).to.be.an('array');
                
            });
    });

    it('name is included in the response', () => {
        return chai.request(app).get('/api/v1/realms')
            .then(res => {
                expect(res.status).to.equal(200);
                expect(res.body[0]).to.be.an('object');
                expect(res.body[0].name);

            });
    });
});

describe('GET /api/v1/realms/azralon', () => {

    it('Returns an object with name Azralon', () => {
        return chai.request(app).get('/api/v1/realms/azralon')
            .then(res => {
                expect(res.status).to.equal(200);
                expect(res).to.be.json;
                expect(res.body).to.be.an('object');
                expect(res.body.name).to.equal('Azralon');
                
            });
    });
});