
console.log(`============ Creating the array ============`);
let array = [50, 40, 60, 80, 30];
console.log(array);

console.log(`============ Length the array ============`);
const arraylength = array.length;
console.log(arraylength);

console.log(`============ Access the array ============`);
const eleAt3 = array[3];
console.log(eleAt3);

console.log(`============ Accessing the last element the array ============`);
let lastEle = array[array.length-1];
console.log(lastEle);

console.log(`============ Updating the array ============`);
console.log(array);
array[1] = 10;
console.log(array);

console.log(`============= Traversing Array ============`);
for (let index = 0; index < array.length; index++){
    const element = array[index];
    console.log(element);
}

console.log(`============= Add or insert the ele at the end of the array ============`);
array.push(909);
console.log(array);

console.log(`============= Add or insert the ele at the beginning of the array ============`);
array.unshift(333);
console.log(array);

console.log(`============= Remove the ele at the end of the array ============`);
array.pop();
console.log(array);

console.log(`============= Remove the ele at the beginning of the array ============`);
array.shift();
console.log(array);

console.log(`============= Use includes() method in the array ============`);
array.includes(60);
array.includes(100);
console.log(array.includes(60));
console.log(array.includes(100));

console.log(`============= indexOf() method in the array ============`);
const indexOf80 = array.indexOf(80);
const indexOf100 = array.indexOf(100);
console.log(indexOf80);
console.log(indexOf100);

console.log(`============= Log only even elements from the array ============`);
let arr = [1, 30, 90, 9, 70, 44, 3];
let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if(element % 2 == 0){
            console.log(element);
            
        }
    }

console.log(`============= sum  elements from the array ============`);
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
         if(element % 2 == 0){
            console.log(element);
            sum = sum + element;
            console.log(sum);
        }
    }

console.log(`============= Log only even indexed elements from the array ============`);
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if(index % 2 == 0){
            console.log(element);
            
        }
    }

console.log(`============= slice ============`);
// made slices 
let arrayNum = [1, 30, 90, 9, 70, 44, 3];
const sliceFrom2 = arrayNum.slice(2);
console.log(sliceFrom2);
const sliceFrom3To6 = arrayNum.slice(3, 6);
console.log(sliceFrom3To6);

console.log(`============= splice ============`);
// add,remove,replace
let arrNum = [1, 30, 90, 9, 70, 44, 3];
const returnValues = arrNum.splice(4);
console.log(arrNum);
console.log(returnValues);

console.log(`============= Delete Element ============`);
let arrayNums = [1, 30, 90, 9, 70, 44, 3];
const deleteEle = arrayNums.splice(4, 2);
console.log(deleteEle);
console.log(arrayNums);

console.log(`============= Add or insert ele without deleting or replacing existing element ============`);
let arrayNumber = [1, 30, 90, 9, 70, 44, 3];
arrayNumber.splice(2, 0, 77);
console.log(arrayNumber);

console.log(`============= Scenario ============`);
let arrayNumbers = [1, 30, 90, 9, 70, 44, 3];
arrayNumbers.splice(3, 2, 60, 80, 100, 11);
console.log(arrayNumbers);

console.log(`============= ASSIGNMENT ============`);
const fruits = ["Banana", "Orange", "Apple", "Mango", "Watermelon"];

console.log(`============= Log first and last ele ============`);

let firstele = fruits[0];
let lastele = fruits[fruits.length-1];
console.log(firstele);
console.log(lastele);

console.log(`============= Add Papaya ata first ============`);;
fruits.unshift("Papaya");
console.log(fruits);

console.log(`============= Remove Mango ============`);
let deleteele = fruits.splice(4, 1);
console.log(deleteele);
console.log(fruits);

console.log(`============= Add or insert Pineapple at last ============`);
fruits.push("Pineapple");
console.log(fruits);

console.log(`============= Insert Dragon Fruit before Watermelon ============`);
fruits.splice(4, 0, "Dragon Fruit");
console.log(fruits);

console.log(`============= Replace an Orange with Kiwi ============`);
fruits.splice(2, 1, "Kiwi");
console.log(fruits);

console.log(`============= Elements strating from index 1 to 4 ============`);
let selected = fruits.slice(1, 4);
console.log(selected);

console.log(`============= Only select last 3 elements ============`);
let last3Ele = fruits.slice(fruits.length-3);
console.log(last3Ele);
