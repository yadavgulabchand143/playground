// Object Property ShortHand and object destrcturing es6 features

const name = "andrew";
const userAge = 27;

const user = {
  name, // shorthand property
  age: userAge,
  location: "thane",
};

console.log(user);

// Object destrcturing

const product = {
  label: "Red NoteBook",
  price: 3,
  stock: 201,
  saleProce: undefined,
  //rating: 4,
};

// normal way
// const label = product.label;
// const stock = product.stock;

// Object destrcturing way
// const { label, stock, rating } = product;
// console.log(label, stock);
//console.log(rating);

// const { label: productLabel, stock, rating = 5 } = product;
// console.log(productLabel);
// console.log(rating);

const transaction = (type, { label, stock = 0 } = {}) => {
  console.log(type, label, stock);
};

transaction("order", product);
