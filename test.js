var imei = require ('./scr/imei');

var IMEI= new imei();

console.log(IMEI.device("Xiaomi","Mi13T")); // returns string with imei by device TAC