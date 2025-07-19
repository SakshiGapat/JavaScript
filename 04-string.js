
var greet = "Good Morning";
console.log("======= Find the length of the string =======");
var greetlength = greet.length;
console.log(greet, " - String length is: ", greetlength);

console.log(`${greet}- String length is: ${greetlength}`); //variable substitution


console.log("========== charAt() ==========");
var charAtIndex0 = greet.charAt(0);
console.log(`Char available at index 0 is: ${charAtIndex0}`);

var charAtIndex0 = greet.charAt(7);
console.log(`Char available at index 7 is: ${charAtIndex0}`);

var charAtIndex0 = greet.charAt(50);
console.log(`Char available at index 50 is: ${charAtIndex0}`);

var charAtIndex0 = greet.charAt(greet.length-1);
console.log(`Char available at index end is: ${charAtIndex0}`);

var str = "Hello buddyhow are you doing";
var charAtLastIndex = str.charAt(str.length-1);
console.log(`Char available at the last index is: ${charAtLastIndex}`);

console.log(`========== concat() ==========`);
var firstName = "Sakshi";
var lastName = " Gapat";
var result = firstName + lastName
console.log(`Concat string using + operator ${result} `);

var result = firstName.concat(lastName).concat(" I am Engineer");
console.log(`Concat string using concat(): ${result} `);

console.log(`========== indexOf ==========`);
var greet = "Good Morning";
var indexOfO = greet.indexOf("o");
console.log(`Index of char O : ${indexOfO}`);

var indexOfZ = greet.indexOf("z");
console.log(`Index of char z : ${indexOfZ}`);

var indexOfMorning = greet.indexOf("Morning");
console.log(`Index of sub string Morning : ${indexOfMorning}`);

console.log(`========== Trim ==========`);
var day =" Today is Friday ";
console.log(`Before trim: ${day.length}`);
var trimResult = day.trim();
console.log(`After trim: ${trimResult.length}` );
var totalRemovedSpaces = day.length - trimResult.length;
console.log(`Total spaces removed after trim() is: ${totalRemovedSpaces} `);


console.log(`========== Assignment ==========`);

function stringBasics(){
var company = "Infosys"; 
console.log(``);
console.log(`My dream company name is: ${company}`);

var hobby1 = "Travelling";
var hobby2 = "Listening Musics";
var hobby3 = "Spending time with Family members";
console.log(`My Hobbies are : ${hobby1}, ${hobby2}, ${hobby3}`);

console.log(`Lenght of Hobby 1: ${hobby1.length}`); 
console.log(`Lenght of Hobby 2: ${hobby2.length}`);
console.log(`Lenght of Hobby 3: ${hobby3.length}`);

var totalSum = hobby1.length+hobby2.length+hobby3.length;
console.log(`Sum the total number of characters available in hobbies: ${totalSum}`);
}
stringBasics();