const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) {
        return reject("Numbers must be positive");
      }
      resolve(a + b);
    }, 2000);
  });
};

const doWork = async () => {
  // throw new Error("something went wrong");
  // return "Andrew";
  const sum = await add(1, -2);
  const sum2 = await add(sum, 100);
  const sum3 = await add(sum2, 100);
  return sum3;
};
doWork()
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });

console.log("Finish");
