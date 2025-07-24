 console.log(`=============== Arithmatic operators ================`)


 var a = 10;
 var b = 5;
 var result = a + b;
 console.log(`Addition ${result}`);

 var result = a -b;
console.log(`Substraction ${result}`);

var result = a * b;
 console.log(`Multiplication ${result}`);

 var result = a / b;
  console.log(`Division ${result}`);

   var result = a % b;
  console.log(`Modulus ${result}`);

   console.log(`=============== Comparision operators ================`);

   var a = 10;
   var b = 11;
   var c = "10";
   var d = 10;

   console.log(`== operator: ${a==b}`);//false
    console.log(`== operator: ${a==d}`);//true
     console.log(`== operator: ${a==c}`);//true
     
    console.log(`== operator: ${a===b}`);//false
    console.log(`== operator: ${a===d}`);//true
     console.log(`== operator: ${a===c}`);//false


     var a = 10;
     var b = 11;
     var c = "10";
     var d = 10;

    console.log(`!= Not Equal OPerator: ${a!=b}`);//true
    console.log(`!= Not Equal OPerator: ${a!=d}`);//false
     console.log(`!= Not Equal OPerator: ${a!=c}`);//false

     console.log(`< Less than Operator: ${a < b}`);//true
     console.log(`< Less than Operator: ${a < d}`);//false

     console.log(`<= Less than equal Operator: ${a <= b}`); //true
     console.log(`<= Less than equal Operator: ${a <= d}`); //true

     console.log(`> Greater than Operator: ${a > b}`); //flase
     console.log(`> Greater than Operator: ${a > d}`); //false

     console.log(`>= Greater than equal Operator: ${a >= b}`); //false
     console.log(`>= Greater than equal Operator: ${a >= d}`); //true

    console.log(`=============== Assignment 1 ================`);

    function squareOfWordLength(x){

        var wordcount = x.split(" ").length;
        var square = wordcount * wordcount;
        console.log(`Words are: ${x} is: ,  Total Words are: ${wordcount} , ans Square is: ${square} `);
    }
    squareOfWordLength("JavaScript");
    squareOfWordLength("Google Chrome");
    squareOfWordLength("Web Developer Smart");

    function stringAnalysis(){
        var sentence = "I am Angular Developer";
        var length = sentence.length;
        var wordcount = sentence.split(" ").length;

        console.log(`String: ${sentence}`);
        console.log(`Length: ${length}`);
        console.log(`Total words: ${wordcount}`);

        console.log(` length / word : ${length / wordcount}`);
        console.log(` length * word : ${length * wordcount}`);
    }
    stringAnalysis();

    console.log(`=============== Assignment 2 ================`);

    function greaterNumber(numOne, numTwo){
       var result = numOne > numTwo ? numOne : numTwo;
       console.log(`Greater number is: ${result}`);
    }
    greaterNumber(10, -10);
    greaterNumber(800, 899);

    function isEvenOrOddNum(num){
        var result = num % 2 == 0 ? true : false;
        return result
    }
    var returnValue = isEvenOrOddNum(29);
    console.log(`The Given Number is even :${returnValue}`);

    var returnValue = isEvenOrOddNum(44);
    console.log(`The Given Number is even :${returnValue}`);

    var returnValue = isEvenOrOddNum(0);
    console.log(`The Given Number is even :${returnValue}`);

    var returnValue = isEvenOrOddNum(101);
    console.log(`The Given Number is even :${returnValue}`);

    function wordLength(x){
        var result = (x.length % 2 == 0) ? true : false;
        console.log(`The length of word is even: ${result}`);
    }
    wordLength("JavaScript");
    wordLength("Developer");
    wordLength("Google");

    function maleMarriageEligibility(gender, age, boyname){
        var result = (gender == "Male" && age >=21) 
        ? `Hey ${boyname} you are eligible` 
        : `Hey ${boyname} you are not eligible`;
        return result;
    }
    var returnValue = maleMarriageEligibility("Male", 25, "Bill");
    console.log(returnValue);
    var returnValue = maleMarriageEligibility("Male", 17, "Stew Jobs");
    console.log(returnValue);
    

    function femaleMarriageEligibility(gender, age, girlName){
        var result = (gender == "female" && age >= 18)
        ? `Hey ${girlName} you are eligible`
        : `Hey ${girlName} you are not eligible`;
        return result;
    }
    var returnValue = femaleMarriageEligibility("female", 16, "Jenifer");
    console.log(returnValue);
    var returnValue = femaleMarriageEligibility("female", 25, "Malinda Gates");
    console.log(returnValue);

     

   