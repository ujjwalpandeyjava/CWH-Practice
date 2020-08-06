/* const mod = require('./module')              //imports module in nodejs, imports one function or object
   console.log(mod)                             //It will give average function of module.js
 */

/* 
const average = require('./module')             //imports module in nodejs, imports many functions or an object     (1) (2)
//console.log(mod.average([4,6,7,8]))           //Wrong
console.log(average([4,6,7,8]))
 */

/* 
const acess = require("./module")               //imports object                (2)
console.log(acess.avg([4, 6, 7]))               //these 3 are key values in the object.
console.log(acess.name)
console.log(acess.repo)
 */

/* 
const nam = require("./module")                 //impoeted a single key value (3)
console.log(nam.daddysName)
*/

console.log('This is index.js\n')
