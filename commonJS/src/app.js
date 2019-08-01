console.log(100)
var $ = require('jquery')
console.log($)
var $root = $('#root')
$root.html('<p>通过jquery插入的文字</p>')

var a = require('./a2.js')
console.log(a.w)

var bb = require('./b.js')
console.log(bb.c)
