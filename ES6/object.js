const name = "karan";
const age = 23;

// Shorthand property
const user = {
  name,
  age: age,
  location: "pune",
};

console.log(user);

// Object destructing

const product = {
  label: "natrang",
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 4.5,
};

const { label: pLabel, stock, rating } = product;

console.log(pLabel);
console.log(stock);
console.log(rating);

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock);
};

transaction("order", product);
