
console.log("!. Object literals");
let person = {
    firstName : "Stew",
    lastName : "Job",
    age : 22,
    city : "Mumbai",
    isMarried : false
};
console.log(person);
console.log(typeof person);

console.log("Accessing Object Properties");
console.log(`Person First Name is : ${person.firstName}`);
console.log(`Person Age is : ${person.age}`);

console.log(`============= Adding properties in the object ============`);
person.pin = 411048;
console.table(person);

console.log(`============= Updateing properties in the object ============`);
person.city = "Pune";
console.table(person);

console.log(`============= Delete properties from the object ============`);
delete person.age;
console.table(person);

console.log(`============= Traversing the object ============`);
for (const key in person) {
        const value = person[key];
        console.log(`KEY : ${key} ===>${value}`);
}

console.log(`============= Nested object ============`);
let student = {
    stdName : "Elon Musk",
    country : "USA",
    isMarried : true,
    address : {
        city : "Washi",
        destrict : "Dharashiv",
        pin : 413525
    }
}
console.table(student);
console.log(student.address.pin);
student.address.street = "Solapur road";
console.table(student.address);

console.log(`============= Object with methods ============`);
let employee = {
    // properties 
    firstName : "Bill Gates",
    designation : "CEO",
    skills : ["HTML", "CSS", "JS", "React"],
    // Methods
    details: function(){
        console.log(`Object Details : ${this.firstName}, ${this.designation}, ${this.skills}`);

    }
}

employee.details();

console.log(`============= Assignment ============`);

let professor = {
    firstname : "Sakshi",
    lastname : "Gapat",
    age : 23,
    salary : 80000,
    isMarried : false,
    degrees : {
        engineering : "CSE",
        PHD : "ADV Computing",
        college : "TCOER",
        city : "Pune",
        certificates : ["Hacker Rank Participation", "Certificate in IFE course", "Certificate in Adv Programming", "Certificate in NPTEL course"]
    }
}

console.table(professor);
console.table(professor.degrees);

console.log(`============= Add properties ============`);
professor.totalExperience = "14 years";

console.log(professor);
console.log(professor.degrees);

console.log(`============= Modify properties ============`);

professor.age = 25;

console.log(professor);
console.log(professor.degrees);

console.log(professor.degrees.certificates);

professor.degrees.certificates.splice(2,0,"Oracle Certified");
console.log(professor.degrees.certificates);

console.log(professor.degrees.certificates[professor.degrees.certificates.length-1]);

console.log(`Logging complete professor object : `);
for (let key in professor){
    const value = professor[key];
    console.log(`${key} ===> ${value}`);
}
