/* globals describe */
'use strict';
const expect = require('chai').expect;
let User = require('../../model/user');

let userHelper = {
    name: 'Testing',
    email: 'haha@gmail.com',
    password: '123456',
    shortPassword: '1234'
};

describe('User Model', function () {
    it('should return error if no name', function (done) {
        let user = new User();
        user.validate(function(err) {
            expect(err.errors.name).to.exist;
            done();
        });
    });
    it('should return error if no email', function (done) {
        let user = new User();
        user.validate(function(err) {
            expect(err.errors.email).to.exist;
            done();
        });
    });
    it('should return error if no password', function (done) {
        let user = new User();
        user.validate(function(err) {
            expect(err.errors.password).to.exist;
            done();
        });
    });
    it('should return error if password length is shorter than 6', function (done) {
        let user = new User({password: userHelper.shortPassword});
        user.validate(function(err) {
            expect(err.errors.password).to.exist;
            done();
        });
    });
    it('should allow creation of document with valid input', function (done) {
        let user = new User(userHelper);
        user.validate(function(err) {
            expect(err).to.be.null;
            done();
        });
    });
})