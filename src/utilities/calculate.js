const add = (first, second) => {
  return first + second;
}

const multiply = (first, second) =>{
  return first * second;
}

const getTotalPrice = products => products.reduce((total, product) => total + product.price, 0);

export {add, multiply, getTotalPrice};