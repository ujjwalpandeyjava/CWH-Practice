
console.log('this is module.js\n')
function average(arr){
    let sum  = 0;
    arr.forEach(element => {
        sum+=element;
    });
    return sum+1;
}
/* 
    module.exports = average;   //export one func (1)
 */

/* 
//Now we will get this object when we import this module. (2)
module.exports = { 
    avg : average,
    name: "Ujjwal pandey",
    repo: "git l234"
} */

/* 
//can do this also
module.exports.daddysName = "P.k."              (3)
 */