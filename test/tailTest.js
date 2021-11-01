const assertEqual = require('../assertEqual')
const tail = require('../tail')

assertEqual(String(tail([1, 2, 3])), String([2, 3]));
