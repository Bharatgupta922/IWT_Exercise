var i = "hello";
console.log(i);

var str = "100hello";
var str1 = /\d/g;
var str2 = str.match(str1);


document.getElementById("op").innerHTML = str2;

var x = "1 110 1000 0";
var y = /10*/g;
var z = x.match(y);
console.log(x);

var a = "helloooo is the olllo lo ll";
var b = /lo+/g;
console.log(a.match(b));
var c=  /lo*/g;
console.log(a.match(c));
var d = /lo=?/g;
console.log(a.match(d));
var e = /\d/g;
var f = "1000\n125\nbharat";
console.log(f.match(e));
var g = /\d/i;
console.log(f.match(g));

var h = /\d{2}/g;
console.log(x.match(h));
 
var i = /\d{1,3}/g;
console.log(x.match(i));

var j = /[^2-5]/g;
console.log(x.match(j));