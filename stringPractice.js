
console.log(`========== toString() ==========`);
var age = 22;
console.log(`Age: ${age}, and it's type is: ${typeof age}`);
var ageStr = age.toString();
console.log(`Age: ${ageStr}, and it's type is: ${typeof ageStr}`)
 
console.log(`========== includes() ==========`);
var vowels = "aeiou";
var isOAvailable = vowels.includes("ai");
var isOAvailable = vowels.includes("A".toLowerCase());// we can to it to make it lowercase
console.log(isOAvailable);

console.log(`========== slice() ==========`);
var greet = "Good Morning my buddy How are you";
var sliceFive = greet.slice(5);
console.log(sliceFive);

var greet = "Good Morning my buddy How are you";
var sliceNine = greet.slice(9);
console.log(sliceNine);

var greet = "Good Morning my buddy How are you";
var sliceNine = greet.slice(2,10);
console.log(sliceNine);

console.log(`========== subString() ==========`);

var greet = "Good Morning my buddy How are you";
var subString = greet.substring(4,15); //(index,length)
console.log(subString);

console.log(`========== split() ==========`);
var greet = "Good Morning my buddy How are you";
var words = greet.split(" ")
console.log(words);

var str = "My Life My Rule";
var strWords = str.split(" ");
console.log(strWords);
console.log(strWords.length);


console.log(`========== Assignment ==========`);

console.log(`========== Printing the string ==========`);
var str = "  Hey you are doing good, keep it up  ";
console.log(`Given string is: ${str}`);

console.log(`========== Printing the length ==========`);
console.log(`Given string length is: ${str.length}`);
// var length = str.length;
// console.log(`Length of the given string is: ${length}`);
console.log(`========== Removing the starting and tailing spaces ==========`);
var strSlice = str.slice(2,36);
console.log(strSlice);

console.log(`Length of string after removing spaces: ${strSlice.length}`);
var  removedSpaces = str.length - strSlice.length;
console.log(`The total no.of removed spaces: ${removedSpaces}`);

var charAtIndex0 = strSlice.charAt(0);
var charAtIndex33 = strSlice.charAt(33);
console.log(`Characters at first and last after removing spaces: ${charAtIndex0}, ${charAtIndex33}`);

var strSliceWords = strSlice.split(" ");
console.log(strSliceWords);
console.log(strSliceWords.length);

var indexOfgood = strSlice.indexOf("good");
console.log(indexOfgood);

var strSubstring = strSlice.substring(22,strSlice.length);
console.log(strSubstring);

strSlice = "Hey you are doing good, keep it up";
console.log(strSlice.startsWith("Hey"));
console.log(strSlice.endsWith("up"));