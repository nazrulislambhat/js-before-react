//sync code example
function otherFunction() {
  console.log('Other Function');
}

console.log('Start');
otherFunction();
console.log('End');

//async



console.log('Start');


setTimeout(() => {
  console.log('ion timeou');
}, 2000);

console.log('End');

