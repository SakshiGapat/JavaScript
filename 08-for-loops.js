
console.log(`============ For Loop ============`);

for (let index = 1; index < 10; index++) {
    console.log(index);
    
}

for (let index = 1; index <= 10; index++) {
    console.log(index);
    
}

for (let index = 1; index < 11; index++) {
    console.log(index);
    
}

console.log(`============ Print the table of 2 ============`);

for (let index = 2; index <= 20; index=index+2) {
    console.log(index);
    
}
console.log(`============ Print the table of 2 with diff method ============`);

for (let index = 1; index <= 10; index++) {
    var result = index*2;
    console.log(result);
}

console.log(`============ Print the table of 7 ============`);

for (let index = 7; index <= 70; index=index+7) {
    console.log(index);
    
}

console.log(`============ Print the table of 7 with diff method ============`);

for (let index = 1; index <= 10; index++) {
    var result = index*7;
    console.log(result);
}

console.log(`============ Print the numbers from 10 to 1 ============`);

for (let index = 10; index >= 1; index--) {
    console.log(index);
    
}

console.log(`============ Print the table of 11 in reverse order ============`);
for (let index = 10; index >= 1; index--) {
    var result = index*11
    console.log(result);
}


console.log(`============ Assignment on F0r Loop ============`);
console.log(`============ Numbers btn 5 to 15 ============`);

for (let index = 5; index <= 15; index++) {
    console.log(index);
    
}
console.log(`============ Numbers btn 50 to 40 ============`);
for (let index = 50; index >= 40; index--) {
    console.log(index);
    
}
console.log(`============ First 15 odd Numbers ============`);
for (let index = 1; index <= 30; index++) {
   if(index % 2 != 0){
        console.log(index);
   }
    
}
console.log(`============ methiod 2 ============`);
var oddNums = 1;
for (let index = 1; oddNums <= 15; index++) {
    if (index % 2 != 0){
        console.log(index);
        oddNums++;
    }
    
}
console.log(`============ First 10 even numbers ============`);
for (let index = 2; index <= 20; index++) {
    if(index % 2 ==0 ){
        console.log(index);
    }
    
}
console.log(`============ method 2 ============`);
var evenNums = 2;
for (let index = 2; evenNums <= 10; index++) {
    if (index % 2 == 0){
        console.log(index);
        evenNums++;
    }
    
}

console.log(`============ Table of 5 ============`);
for (let index = 5; index <= 50; index= index+5) {
    console.log(index);
    
}
console.log(`============ method 2 ============`);
for (let index = 1; index <= 10; index++) {
    var result = index*5;
    console.log(result);
    
}
console.log(`============ Table of 10 ============`);
for (let index = 10; index <= 100; index= index+10) {
    console.log(index);
    
}
console.log(`============ method 2 ============`);
for (let index = 1; index <= 10; index++) {
    var result = index*10;
    console.log(result);
    
}
console.log(`============ Table of 10 in reverse order ============`);
for (let index = 10; index >= 1; index--) {
    var result = index*10;
    console.log(result);
}