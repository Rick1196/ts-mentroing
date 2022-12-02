/**
 * name: string => name of the product
 * price: number => price of the product
 * categories: string[] => name of the categories which the product belongs to example: 'food', 'decoration', 'cars'
 * disscount?:number  => optional field that indicates if the product has a discont and how much is the discount
 */
type Product = {
  name: string;
  price: number;
  categories: string[];
  disscount?: number;
};

type PersonComplex = {
  name: string | { firstName: string; lastName: string };
  address: string;
  age?: number;
};

const person1: PersonComplex = {
  name: "Ricardo Perez",
  address: "Metepec",
  age: 26,
};
const person2: PersonComplex = {
  name: { firstName: "Ricardo", lastName: "Perez" },
  address: "Metepec",
  age: 26,
};

interface ProductI {
  name: string;
  price: number;
  categories: string[];
  disscount?: number;
}
// create an array with 10 or more items of type Product each product must have at least one of the following categories:
/**
 * books
 * software
 * videogames
 * toys
 * clothes
 */
const productos: Product[] = [];
productos.push({
  name: "principito",
  price: 20,
  categories: ["books"],
  disscount: 1,
});
productos.push({
  name: "autocad",
  price: 49,
  categories: ["software"],
  disscount: 1,
});
productos.push({ name: "luchitas", price: 43, categories: ["videogames"] });
productos.push({
  name: "muñeca",
  price: 24,
  categories: ["toys"],
  disscount: 1,
});
productos.push({ name: "blusa", price: 57, categories: ["clothes"] });
productos.push({ name: "pantalon", price: 62, categories: ["clothes"] });
productos.push({ name: "candy crush", price: 78, categories: ["videogames"] });
productos.push({
  name: "soliword",
  price: 46,
  categories: ["software"],
  disscount: 1,
});
productos.push({ name: "hadas", price: 26, categories: ["books"] });
productos.push({ name: "osito", price: 97, categories: ["toys"] });

// create a variable of type array of Product and save all the products on the first array that has a disscount
const example: Product[] = [];
for (const item of productos) {
  // if(item.disscount)
  // if(item.disscount !== undefined && item.disscount !== 0)
  if (item.disscount !== undefined) {
    example.push(item);
    //  example.push(item);
  }
}
const cuantos = productos.filter((item) =>
  item.categories.includes("software")
);

//  create a variable of type array of Product and save all the products on the first array that has the category of software or videogames
const example2: Product[] = [];
for (const item of productos) {
  // item.categories.includes('software');
  if (
    item.categories.includes("software") ||
    item.categories.includes("videogames")
  ) {
    example2.push(item);
    //  example.push(item);
  }
}

console.log(productos, example, example2);
// exercise 2
/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * example
 * array =  [2,7,11,15]
 * target = 9
 *
 * indices = [0, 1]
 * because array[0] is 2 and array[1] is 7, so 2 + 7 = 9
 */

const array = [2, 7, 11, 15];
let target = 9;
function valor(x: number, array: number[]) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      let newVar = i + 1;
      if (newVar < array.length && array[i] + array[newVar] == target) {
        return "Indices [" + i + " , " + newVar;
      }
    }
  }
}
const exampleVariable = [];
const exampleFunction = (x: number, y: number) => {
  const exampleVariable2 = 3.1416;
  return x + y / exampleVariable2;
};
function exampleFunction2(x: number, y: number): number {
  try {
    const result = (x + y) / 2;
    if (result === Infinity) {
      throw new Error("Undefined result");
    }
    return result;
  } catch (error) {
    console.log(error);
    return 0;
  }
}

console.log(exampleFunction2(1, 2));
