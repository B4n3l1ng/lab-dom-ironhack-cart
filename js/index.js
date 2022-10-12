// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //... your code goes here
  const price = Number(product.querySelector('.price span').innerText);
  const quantity = Number(product.querySelector('.quantity input').value);
  const subtotal = price * quantity;
  const placeholder = product.querySelector('.subtotal span');
  placeholder.innerText = subtotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let total = 0;
  const list = document.getElementsByClassName('product');
  for (product of list){
    total += updateSubtotal(product);
  };
  // ITERATION 3
  //... your code goes here
  const totalPlace = document.querySelector('#total-value');
  totalPlace.innerText = `Total: $${total}`

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const targetProduct = target.parentNode.parentNode;
  targetProduct.querySelector('.quantity input').value =0;
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeBtns = document.getElementsByClassName('btn-remove');
  for (let buttons of removeBtns) {
    buttons.addEventListener('click',removeProduct);
  }
  });
