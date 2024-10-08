import { products } from './products.js';
let productsHTML = '';

products.forEach((product) => {
  productsHTML += `<div class="product-div">
          <div class="image-div">
            <img
              src="${product.image}"
              alt=""
            />
          </div>
          <div class="product-name">${product.name}</div>
          <div class="product-rating">
            <img src="images/ratings/rating-${product.rating.stars * 10}.png" class="rating-image" />
          </div>
          <b>$${(product.priceCents / 100).toFixed(2)}</b>
          <div class="product-rating-count">${product.rating.count}</div>
          <div class="product-quantity-container">
            <select class="select-quantity">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <div class="added-to-cart-message"></div>
          <button class="add-to-cart-button" data-product-id="${product.id}">Add To Cart</button>
        </div>`;
});

document.querySelector('.js-main-products').innerHTML = productsHTML;

document.querySelectorAll('.add-to-cart-button').forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.getAttribute('data-product-id');
    const quantity = button.parentElement.querySelector('.select-quantity').value;
    
    let matchingItem;

    cart.forEach((item)=>{
      if(productId===item.productId){
        matchingItem=item;
      }
    })
      if (matchingItem){
        matchingItemItem.quantity ++;
      }else{
        cart.push({
          productId: productId,
          quantity: parseInt(quantity, 10),
        });
      }

  let cartQuantity = 0;
  cart.forEach((item)=>{
    cartQuantity += item.quantity;
  })

  document.querySelector('.cart').innerHTML = cartQuantity;
  
  });
});
