/* globals describe */
'use strict';

const expect = require('chai').expect;
let Minutes = require('../../model/minutes');

describe('Minutes Model', function () {
    it('should return invalid if no date', function (done) {
        let minutes = new Minutes();
        minutes.validate(function (err) {
            expect(err.errors.date).to.exist;
            done();
        });
    });
    it('shoud return an array for posts', function (done) {
        let minutes = new Minutes({date: 'Just a date'});
        
        expect(minutes.posts).to.be.instanceof(Array);
        done();
    });
});