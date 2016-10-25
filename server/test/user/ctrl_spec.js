/* globals describe */
'use strict';

const expect = require('chai').expect;
const supertest = require('supertest');
const api = supertest(`http://localhost:3000`);
let User = require('../../model/user');

describe('POST signup function', function () {
    it('should return invalid if password and passwordCfm does not match', function (done) {
        api.post('/api/register')
            .set('Accept', 'application/json')
            .send({
                name: 'Test',
                email: 'haha@gmail.com',
                password: '123456',
                passwordCfm: '123454',
            })
            .end(function (err, res) {
                expect(err.errors).to.exist;
                done();
            });
    });
    // it('should create auth_token for user', function (done) {
    //     api.post('/api/register')
    //         .set('Accept', 'applcation/json')
    //         .send({
    //             name: 'Test',
    //             email: 'haha@gmail.com',
    //             password: '123456',
    //             passwordCfm: '123456'
    //         })
    //         .end(function(err, res) {
    //             expect(err).to.be.null;
    //             expect(res.auth_token).to.exist; 
    //             done();
    //         });
    // });
    it('should create new user in database');
});

// remove user after testing
// after(function(done) {
//     User.remove({email: 'haha@gmail.com'}, function (err) {
//         if (err) console.log(err);
//         else done();
//     });
// });