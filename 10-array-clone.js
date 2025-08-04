
const arrayOne = [1, 2, 3];
const arrayClone = arrayOne; //Shallow clone


console.log("========== arrayClone =========");
arrayClone.push(100);
console.log(arrayClone);

console.log("========== arrayOne ==========");
console.log(arrayOne);

console.log("========== Deep Clone ==========");
const arrayTwo = [...arrayOne];
console.log(arrayTwo);
arrayTwo.push(2000);
console.log(arrayTwo);
console.log(arrayOne);


console.log("========== Merge two arrays using spread operator  ==========");
const arrayFour = [1, 2, 3];
const arrayFive = [4, 5, 6];
const arraySix = [10, 50, 60];
const mergeArray = [...arrayFour, ...arrayFive, ...arraySix];
console.log(mergeArray);

console.log("========== Assignment ==========");
const array = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];

console.log("========== Length of the array ==========");
console.log(array.length);

console.log("========== First and last Number ==========");
let firstNum = array[0];
let lastNum = array[array.length-1];

console.log("========== Third last number ==========");
let thirdLastNum = array[array.length-3];

console.log("========== All Even Numbers ==========");
for (let index = 0; index<array.length; index++){
    const element = array[index];
    if (element % 2 == 0){
        console.log(element);
    }
}

console.log("========== All Odd Numbers ==========");
for (let index = 0; index<array.length; index++){
    const element = array[index];
    if (element % 2 != 0){
        console.log(element);
    }
}

console.log("========== All even positioned Numbers and its sum ==========");
const arrNumber = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
let sum = 0;
 for (let index = 0; index < arrNumber.length; index++) {
        const element = arrNumber[index];
        if(index % 2 == 0){
            console.log(element);
            sum = sum + element;
            console.log(sum);
        }
    }


console.log("========== All odd positioned Numbers and its sum ==========");
 for (let index = 0; index < arrNumber.length; index++) {
        const element = arrNumber[index];
        if(index % 2 != 0){
            console.log(element);
            sum = sum + element;
            console.log(sum);
        }
    }

console.log("========== Sum of all Numbers ==========");
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    sum = sum+ element;
    console.log(sum);
}

console.log("========== All Numbers multiple of 5 ==========");
for (let index = 0; index < arrNumber.length; index++) {
    const element = arrNumber[index];
    if (element % 5 == 0) {
        console.log(element);
    }
    
}

console.log("========== Insert 55, 66 at index 3 ==========");
let arr = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
arr.splice(3, 0, 55,66);
console.log(arr);

console.log("========== Delete from index 3 ==========");
let deleteNum = arr.splice(3, arr.length-1);
console.log(arr);