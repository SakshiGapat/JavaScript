
let array = [50, 40, 30, 50, 40, 30];
console.log(array);

let setOfRollNum = new Set();
setOfRollNum.add(101);
setOfRollNum.add(111);
setOfRollNum.add(101);
setOfRollNum.add(113);
setOfRollNum.add(111);
setOfRollNum.add(201)
console.log(setOfRollNum);

console.log(`size is ${setOfRollNum.size}`);

setOfRollNum.delete(113);
console.log(setOfRollNum);

console.log(`Is element 111 available: ${setOfRollNum.has(111)}`);
console.log(`Is element 111 available: ${setOfRollNum.has(1111)}`);


console.log(typeof setOfRollNum);

console.log("========== Set traversal ==========");
for (const element of setOfRollNum) {
    console.log(element);
}

console.log("========== WAP to remove duplicate from array ==========");
let arr = [50, 40, 30, 50, 40, 40];
const arrNum = [...new Set(arr)];
console.log(arrNum);
