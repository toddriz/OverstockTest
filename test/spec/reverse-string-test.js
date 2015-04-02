StringReverse = require('../../src/reverse-string');

describe('StringReverse', function() {
    it('It should take a string and return the reverse', function() {
        // set up
        var str = 'life is so much better in reverse';

        // run unit
        var result = StringReverse.reverse(str);

        // verfiy expectations
        expect(result)
        .to.equal('reverse in better much so is life');
    });
});
