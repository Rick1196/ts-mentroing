// single line comment
/**
 * comment block
 */
// const
var exampleString = "string example";
// exampleString = 'dif'; => error
var exampleArray = [];
exampleArray.push(1);
var exampleObject = {};
exampleObject["name"] = "Example";
// let
var exampleInterger = 1;
exampleInterger = 0;
var exampleString2 = "";
exampleString2 = "string";
// objecjet with an optional attribute
var exampleObject2 = { addres: null };
exampleObject2["name"] = "ricardo";
exampleObject2.name;
exampleObject2["name"] = "ricardo";
exampleObject2.addres = "Example address";
var examplePerson = {
    addres: "Example",
    exampleFunction: function (age) { return console.log("Age", age); }
};
examplePerson.exampleFunction(10);
//undefined
var result = examplePerson.age + 10;
var contactName = examplePerson.contact.name;
console.log("Result Age", result / 10);
// Person = {} => error
// arrays
var exampleArray2 = [];
exampleArray2.push({ addres: null });
// exampleArray2.push(1); => Error
