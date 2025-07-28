
console.log(4+true);
console.log(5-true);


console.log(`================= Assignment ===================`);

result = '3' + 2;  //concatination
console.log(result); //32

result = '3' + true;  //concatination
console.log(result);  //3true

result = '3' + undefined;  //concatination
console.log(result);   //3undefined

result = '3' + null;  //concatination
console.log(result);  //3null


console.log(`============== Explicit Conversion ===============`);

var num = 100;
var numStr = String(num);
console.log(`Value: ${numStr} and it's type: ${typeof numStr}`);

var numOne = 0;
var numBoolean = Boolean(numOne);
console.log(`Value: ${numBoolean} and it's type: ${typeof numBoolean}`);

var numTwo = true;
var numTwoBoolean = String(numTwo);
console.log(`Value: ${numTwoBoolean} and it's type: ${typeof numTwoBoolean}`);

var numTwoBoolean = Number(numTwo);
console.log(`Value: ${numTwoBoolean} and it's type: ${typeof numTwoBoolean}`);

// console.log(`============== Assignment  ===============`);

