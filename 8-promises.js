// const doWorkPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Test");
//     // resolve([1, 4, 7]);
//     reject("Things went wrong!!");
//   }, 2000);
// });

// doWorkPromise
//   .then((result) => {
//     console.log("success", result);
//   })
//   .catch((error) => {
//     console.log("Error! ", error);
//   });

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

add(1, 2)
  .then((sum) => {
    console.log(sum);
    add(sum, 5)
      .then((totalSum) => {
        console.log(totalSum);
      })
      .catch((e) => {
        console.log(e);
      });
  })
  .catch((e) => {
    console.log(e);
  });

//promise chaning with new syntex

add(1, 1)
  .then((sum) => {
    console.log(sum);
    return add(sum, 4);
  })
  .then((totalSum) => {
    console.log(totalSum);
  })
  .catch((e) => {
    console.log(e);
  });
