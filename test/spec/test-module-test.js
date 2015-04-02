TestModule = require('../../src/test-module');

describe('#reverse', function() {
    it('It should take a string and return the reverse', function() {
        // set up
        var str = 'life is so much better in reverse';

        // run unit
        var result = TestModule.reverse(str);

        // verfiy expectations
        expect(result)
        .to.equal('reverse in better much so is life');
    });
});

describe('#enforceUniqueValues', function() {
    it('should take a list and return a list of only unique values', function() {
        // set up
        var list = ['couches', 'shoes', 'watches', 'pets', 'watches', 'rope', 'shoes'];

        // run unit
        var result = TestModule.enforceUniqueValues(list);

        // verify expectations
        expect(result)
        .to.eql(['couches', 'pets', 'rope', 'shoes', 'watches'])
    });
});
