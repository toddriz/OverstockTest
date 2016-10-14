'use strict';

var ImplementationModule = require('../../src/implementation-module');

describe('ImplementationModule', function () {
    describe('#head', function () {
        it('It should take an array and return the first element', function () {
            //set up
            var list = ['head', 'body', 'tail'];
            //run unit
            var result = ImplementationModule.head(list);
            //verify expectation
            expect(result)
                .to.eql('head');
        });
    });

    describe('#tail', function () {
        it('It Should take an array and return all elements except the first element ', function () {
            //set up
            var list = ['head', 'body', 'tail'];

            //run unit
            var result = ImplementationModule.tail(list);
            //verify expectation
            expect(result)
                .to.eql(['body', 'tail']);
        });
    });

    describe('#cons', function () {
        it('Should return false if second parameter is not an array', function () {
            //set up
            var param1 = "string";
            var param2 = "string";
            //run unit
            var result = ImplementationModule.cons(param1, param2)
            //verify expectation
            expect(result)
                .to.false;
        });

        it('Should take return concatenation of param 1 and param 2 if second parameter is an array', function () {
            //set up
            var param1 = "string";
            var param2 = [" in Array"];
            //run unit
            var result = ImplementationModule.cons(param1, param2)
            //verify expectation
            expect(result)
                .to.eql("string in Array");
        });
    });
});
