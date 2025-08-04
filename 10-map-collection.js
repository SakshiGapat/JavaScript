
const myMap = new Map();
myMap.set(101, "Jenny");
myMap.set(223, "Elon");
myMap.set(435, "Stew");
myMap.set(545, "Elon");

console.log(myMap);
myMap.set(435, "Jeff");
console.log(myMap);

console.log("========== After delete =========");

myMap.delete(101);
console.log(myMap);

console.log("========== Accessing elements =========");
const valueForKey223 = myMap.get(223);
console.log(valueForKey223);

console.log("========== Traversing =========");
const keys = myMap.keys();
for (const key of keys) {
    let value = myMap.get(key);
    console.log("KEY: ${key}  ===> VALUE: ${value}");
}
console.log(keys);
