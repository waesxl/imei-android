# imei-android
## Description
imei generator/checker (via Luhn algorithm)

## Installation
    $ npm install imei-android
    
## Usage
``` javascript
var imei = require('imei-android');

var IMEI= new imei();
console.log(IMEI.random()); // returns string with random imei

console.log(IMEI.device("Apple","iPhone3G")); // returns string with imei by device TAC

console.log(IMEI.isValid("860921035123120")); // returns true
```
