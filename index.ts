// single line comment
/**
 * comment block
 */
// const
const exampleString = "string example";
// exampleString = 'dif'; => error

const exampleArray = [];
exampleArray.push(1);
exampleArray.push("string");

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
  name?: string; // optional attribute
  addres: string;
  age?: number;
  bloodType?: string;
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
// const contactName = examplePerson.contact.name;
console.log("Result Age", result / 10);
// Person = {} => error
// arrays
const exampleArray2: Person[] = [];
exampleArray2.push({ addres: null });
exampleArray2.push({ addres: null, name: "Example" });
// exampleArray2.push(1); => Error
//sync
//[1,2,3,4]
// for(let i = 0; i < array.length; i ++){
// const newVar = array[i];
// }
// for(const item of exampleArray2){
//   const name = item.name;
//   console.log('Name',name)
// }

//async
// exampleArray2.forEach((person, index) =>{
//   console.log(person, index);
// })

const realPerson: Person = {
  addres: "Gatito",
  age: 10,
  contact: {
    name: "",
    phone: "",
  },
  name: "",
  bloodType: "o+",
};
// realPerson.age;
// realPerson['age']

// Object
// key => string
for (const key of Object.keys(realPerson)) {
  console.log(key, realPerson[key]);
}
// operadores binarios && -> and || => or ! => not
// operadores aritmeticos ===, <==, >==, <, >, !==
// if(){}if else () {}else{}
// switch (key) {
//   case value:

//     break;

//   default:
//     break;
// }

const num = 10;
// if (num % 2 === 0) {
//   console.log(num, "par");
// } else if (num % 3 === 0) {
//   console.log(num, "multiplo de 3");
// } else {
//   console.log(num, "ninguno");
// }

// if (num % 3 === 0 && num % 2 !== 0) {
//   console.log(num, "multiplo de 3");
// } else {
//   console.log(num, "ninguno");
// }

// if (num % 2 === 0 || num % 5 === 0) {
//   console.log(num, "multiplo de 3");
// } else {
//   console.log(num, "ninguno");
// }
const defaultStreet = undefined;

const personAddress =
  (realPerson.addres || defaultStreet || "default" ) + " street";
console.log(personAddress);
