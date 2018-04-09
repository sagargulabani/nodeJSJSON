//var array = require('./batchdata.json')
var fs = require('fs');
var randomstring = require('randomstring');
var array = [];

for (var i = 0; i < 1000000; i++ ) {
    var obj = {};
    obj.name = "sagar";
    obj.value1 = randomstring.generate(10);
    obj.value2 = randomstring.generate(10);
    obj.value4 = randomstring.generate(10);
    obj.value5 = randomstring.generate(10);
    obj.value6 = randomstring.generate(10);
    obj.value7 = randomstring.generate(10);
    obj.value8 = randomstring.generate(10);
    obj.value9 = randomstring.generate(10);
    obj.value10 = randomstring.generate(10);
    array.push(obj);
}
var array;
fs.writeFileSync('./batchdata.json', JSON.stringify(array, null, 3), 'utf-8');