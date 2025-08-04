

let array = [50, 40, 60, 80, 30];
let sum = 0;
for (const element of array) {
    sum = sum + element;
    console.log(element);
}
console.log(`Sum is: ${sum} `);

console.log(`============ join() ============`);
let arr = [50, 40, 60, 80, 30];
console.log(typeof arr);
const joinedElement = arr.join("|");
console.log(joinedElement);

console.log(`============ concat() ============`);
const arr1 = [50, 40, 60, 80, 30];
const arr2 = [20, 70, 100];
const arr3 = arr1.concat(arr2);
console.log(arr3);

console.log(`============ Array clone ============`);
const arrayOne = [1, 2, 3];
const arrayClone = arrayOne;  // Shallow clone

arrayClone.push(100);
console.log(arrayClone);

console.log(`============ arrayOne ============`);
console.log(arrayOne);

























