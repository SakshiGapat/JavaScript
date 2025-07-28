
console.log(`============ Sum of 1 to 10 numbers ============`);

var sum = 0;
for (var i =1; i <= 10; i++){
    sum = sum + i;

}
console.log(sum);

console.log(`============ Sum of cube of 1 to 5 ============`);
var sum = 0;
for( var i = 1; i <= 5; i++){
    sum = sum + i*i*i;
}
console.log(sum);

console.log(`============ Only odd positioned chars ============`);
var str = "I am good Developer";
// var length = str.length;
for ( var index = 0; index <= str.length-1;index++){
    if (index % 2 != 0 ){
        var char = str.charAt(index);
        console.log(char);
    }
}

console.log(`============ Only odd positioned chars without spaces ============`);

var str = "I am good Developer";
// var length = str.length;
for ( var index = 0; index <= str.length-1;index++){
    if (index % 2 != 0 && str.charAt(index)!=' '){
        var char = str.charAt(index);
        console.log(char);
    }
}

console.log(`============ Count the num of vowels ============`);

var str = "I am very good IT developer";
var vowel = "aeiouAEIOU";
var vowelCount = 0;
foundVowels = [];
for ( var i = 0; i < str.length; i++){
    if(vowel.includes(str[i]));{
    vowelCount++;
    
    foundVowels.push(str[i]);
    }
}
console.log(foundVowels);
console.log(vowelCount);


console.log(`============ Reverse string ============`);
var str ="Sakshi Gapat";
 var strReverse = "";
for ( var i = str.length-1; i >= 0; i--){
    if (str.charAt(i) !=" "){
        strReverse = strReverse + str.charAt(i);
    }
}
console.log(strReverse)

var str ="Hard work always pays back";
 var strReverse = "";
for ( var i = str.length-1; i >= 0; i--){
    if (str.charAt(i) !=" "){
        strReverse = strReverse + str.charAt(i);
    }
}
console.log(strReverse)

var str ="Soon I will be Angular IT Champ";
 var strReverse = "";
for ( var i = str.length-1; i >= 0; i--){
    if (str.charAt(i) !=" "){
        strReverse = strReverse + str.charAt(i);
    }
}
console.log(strReverse)
console.log(`============ Count num of A ============`);

function countCharA(str){
var str = "I Am Learning JavaScript, The Language of internet";
var count = 0;
for(var i = 0; i < str.length; i++){
    if(str[i] === 'a' || str[i] === 'A'){
        count++;
    }
}
return count;
}
console.log(countCharA(str));


console.log(`============ Count no of A ============`);
function countChara(str){
var str = "My Favourite movie is LAggAn";
var count = 0;
for(var i = 0; i < str.length; i++){
    if(str[i] === 'a' || str[i] === 'A'){
        count++;
        
    }
}
return count;
}
console.log(countChara(str));