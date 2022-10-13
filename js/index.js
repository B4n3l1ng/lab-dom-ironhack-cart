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
  const target = event.currentTarget.parentNode.parentNode; // the event being passed will be the button, this means parentNode of parentNode of the event will be the product we will want to delete

  target.parentNode.removeChild(target); // this function will delete the the target (the product DOM element) from it's parentNode. essentially removing it from the DOM.

  const total = document.querySelector("#total-value span"); // total DOM element
  const subtotal = target.querySelector(".subtotal span"); // subtotal DOM element

  calculateAll();
}

// ITERATION 5

function createProduct() {
 // input values from the create product line
 let nameElement = document.querySelector(
  '.create-product input[type="text"]'
);
let priceElement = document.querySelector(
  '.create-product input[type="number"]'
);

let cart = document.querySelector("tbody"); // targets the cart DOM in which the new elements will be added

// We proceed to create the product DOM element via 3 steps (create the element, add a class (optional), add some innerHTML (which can include other HTML tags))

let newProduct = document.createElement("tr"); // to create the new product DOM element that will be added
newProduct.className = "product"; // to add a new class to the new product DOM element

// We create the nested elements by passing a string that represents HTML elements to innerHTML
// .innerHTML will cause the string to be parsed and converted to nested elements
// the values from the input nameElement and priceElement are passed with string interpolation
newProduct.innerHTML = `
  <tr class="product">
    <td class="name">
      <span>${nameElement.value}</span>
    </td>
    <td class="price">$<span>${priceElement.value}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  </tr>
`;

cart.appendChild(newProduct); 

nameElement.value = ""; 
priceElement.value = ""; 


var deleteButton = newProduct.querySelector(".btn-remove"); 
deleteButton.addEventListener("click", removeProduct); 
}

window.addEventListener("load", () => {

  
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  
  const removeButtons = document.querySelectorAll(".btn-remove");
  removeButtons.forEach((eachButton) => {
    eachButton.addEventListener("click", removeProduct);
  });

  
  const createButton = document.querySelector("#create");
  createButton.addEventListener("click", createProduct);
});