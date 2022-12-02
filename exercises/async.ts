const asyncFunction = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve({ data: "example data"});

      reject({ data: "example data", error: "Server is down", code: 500 });
      // throw new Error({ data: "example data", error: "Server is down", code: 500 })
    }, 200);
  });
};

// const normalFunction = async () => {
//   try {
//     const result = await asyncFunction();
//     console.log(result);
//     console.log(1 + 2);
//     console.log(2 + 2);
//   } catch (error) {
//     console.log(error);
//   }
// };
type Data = { data: string };
// async function handleResolve1(
//   param: Data
// ): Promise<{ data: string; error: "string"; code: number }> {
//   const result = await asyncFunction();
//   //..
//   return result;
// }
const handleResolve = (param: { data: string }) => {
  console.log(param);
};
const normalFunction = () => {
  asyncFunction()
    .then(handleResolve)
    .catch((error) => {
      console.log(error);
    });
};

normalFunction();
