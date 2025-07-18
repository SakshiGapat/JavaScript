
console.log("==========Function with no arguments and no return value==========");
function dayOfWeek(){
    console.log("Today is Friday....");
   
}
 dayOfWeek();
  dayOfWeek();
   dayOfWeek();

console.log("==========Function with arguments and no return value==========");

function addition(n1, n2, n3){
    var result = n1 + n2 + n3;
    console.log(result);
}
addition(70,30,40);
addition(120,100,50);

console.log("==========Function with arguments and return value==========");
function square(num){
    var result = num * num;
    return result;
}
    var squareValue = square(15);
    console.log("Square is:", squareValue);

    var squareValue = square(11);
     console.log("Square is:", squareValue); 


console.log("========== Assignment ==========");

function personalDetails(firstName, lastName, collegeName){
    var result = firstName;
    var res = lastName
    var value = collegeName
    console.log("My Name is: ", result , res );
console.log("College Name is: ",value);
}
personalDetails("Sakshi","Gapat","TCOER");


console.log("==========3 parameterss and it should log in the addition ==========");

function addThreeValues(x, y, z){
    var result = x + y + z;
    console.log("The addition is: ",result);
}
addThreeValues(10.23,600,40);
addThreeValues("Hello", "Good", "Morning");

console.log("========== Bank Details ==========");

function bankDetails(bankName,accountNum,location,pincode){
    var r1 = bankName;
    var r2 = accountNum;
    var r3 = location;
    var r4 = pincode;
    console.log("Bank Details are: ",r1, r2, r3, r4);
}
bankDetails("ICITI Bank", 3456782345,"Pune",431202);
bankDetails("Axis Bank",7856782345,"Mumbai",441202);
bankDetails("HDFD Bank",8956782345,"Pune",631202);