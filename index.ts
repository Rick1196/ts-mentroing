// single line comment
/**
 * comment block
 */
// const
const exampleString = "string example";
// exampleString = 'dif'; => error

const exampleArray = [];
exampleArray.push(1);

const exampleObject = {};
exampleObject["name"] = "Example";

// let

let exampleInterger = 1;
exampleInterger = 0;

let exampleString2 = "";
exampleString2 = "string";

// objecjet with an optional attribute
const exampleObject2: { name?: string; addres: string } = { addres: null };
exampleObject2["name"] = "ricardo";
exampleObject2.name;

exampleObject2["name"] = "ricardo";

exampleObject2.addres = "Example address";

type Person = {
  name?: string;
  addres: string;
  age?: number;
  exampleFunction?: (age: number) => void;
  contact?: {
    name: string;
    phone: string;
  };
};

const examplePerson: Person = {
  addres: "Example",
  exampleFunction: (age) => console.log("Age", age),
};

examplePerson.exampleFunction(10);
//undefined
const result = examplePerson.age + 10;
const contactName = examplePerson.contact.name;
console.log("Result Age", result / 10);
// Person = {} => error
// arrays
const exampleArray2: Person[] = [];
exampleArray2.push({ addres: null });
// exampleArray2.push(1); => Error
