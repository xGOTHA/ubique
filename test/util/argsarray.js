var assert = require('assert');
var ubique = require('../../index.js');

suite('util',function () {
console.log('Testing util/argsarray ...');
test('argsarray', function (done) {



assert.deepEqual(ubique.argsarray(99,true,'test',null),[99,true,"test",null]);


done();
});
});


// <--- This file has been auto-generated. PLEASE DO NOT EDIT THIS FILE, changes will be overwritten the next time the script is run --->