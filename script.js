
const FeaturedProducts = [
    {
      id: 1,
        name: "Jacket",
        description: "Cotton Jacket",
        price: "10.00",
        size:"Xl-L-M-S",
        color:"red-blue-white-yellow",
        url:"img/products/f3.jpg"
      },
    {
      id: 2,
      name: " Basic T-Shirt",
      description: "ٍJohn Elliott Anti-Expo tee",
      price: "20.00",
      size:"L-M",
      color:"red-black-white",
      url:"img/products/3.jpg"
    },
    {
      id: 3,
      name: "T-shirt",
      description: "cap-sleeve T-shirt",
      price: "30.00",
      size:"Xl-L-M-S",
      color:"black-blue-white",
      url:"img/products/4.jpg"
    },
    {
      id: 4,
      name: "The Camp Shirt",
      description: "camp-collar floral-shirt",
      price: "40.00",
      size:"Xl-L-M",
      color:"red-blue-white",
      url:"img/products/f4.jpg"
    },
    {
       id: 5,
        name: "The Camp Shirt",
        description: "Cubano-camp shirt",
        price: "50.00",
        size:"Xl-L-M-S",
        color:"blue-white",
        url:"img/products/f5.jpg"
      },
      {
      id: 6,
      name: "The Flannel Shirt ",
      description: "Scotch plaid flannel shirt",
      price: "60.00",
      size:"Xl-M",
      color:"red-blue-white",
      url:"img/products/f6.jpg"
    },
    {
      id: 7,
    name: "shorts",
    description: "Denim Shorts",
    price: "70.00",
    size:"Xl-L-M-S",
    color:"blue-white",
    url:"img/products/f7.jpg"
  },
  {
    id: 8,
  name: "The Camp Shirt",
  description: "camp-collar checked woven shirt",
  price: "80.00",
  size:"L-M-S",
  color:"red-blue-white-yellow",
  url:"img/products/f8.jpg"
  }
  ,{
    id: 17,
    name: "Sneaker",
    description: "Running Sneaker Shoes",
    price: "180.00",
    size:"40-42-44",
    color:"red-blue-white-yellow",
    url:"img/products/Shoes/product-1.jpg"
    }
    ,{
      id: 18 ,
      name: "Slipper",
      description: "Leather Men Slipper",
      price: "190.00",
      size:"44-40-38",
      color:"red-blue-white",
      url:"img/products/Shoes/product-2.jpg"
      }
      ,{
        id: 19,
        name: "Fabric",
        description: "Simple Fabric Shoes",
        price: "160.00",
        size:"45-42-20",
        color:"red-blue",
        url:"img/products/Shoes/product-3.jpg"
        }
        ,{
          id: 20,
          name: "Retro",
          description: "Sport Retro Shoes",
          price: "80.00",
          size:"44-42",
          color:"blue-white",
          url:"img/products/Shoes/product-4.jpg"
          }
  ];

  const productContainerInd = document.getElementById("product-listInd");
  
  // Loop through product list and create HTML element for each product
  for (let i = 0; i < FeaturedProducts.length; i++) {
    const product = FeaturedProducts[i];
   
    const productElementInd = `
    <div class="pro">
    <div  class="product-img" onclick="window.location.href='sproduct.html?productid=${product.id}';">
    <img src="${product.url}" alt="">
    </div>
    <div class="des">
        <span >${product.name}</span>
        <h5>${product.description}</h5>
        <div class="star">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
        </div>
        <h4>$${product.price}</h4>
    </div>
  
</div>
    `;
    
    if (productContainerInd) {
     
      productContainerInd.innerHTML += productElementInd;
      }
    // Add product element to product list container
   
  }
  const productContainer = document.getElementById("product-list1");
  
  // Loop through product list and create HTML element for each product
  for (let i = 0; i < FeaturedProducts.length; i++) {
    const product = FeaturedProducts[i];
   
    const productElement = `
    <div class="pro">
    <div  class="product-img" onclick="window.location.href='sproduct.html?productid=${product.id}';">
    <img src="${product.url}" alt="">
    </div>
    <div class="des">
        <span >${product.name}</span>
        <h5>${product.description}</h5>
        <div class="star">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
        </div>
        <h4>$${product.price}</h4>
    </div>
    <a href="#" class="add-to-cart" data-product-id="${product.id}" data-product-name="${product.name}" data-product-price="${product.price}"><i class="fal fa-shopping-cart cart"></i></a>
</div>
    `;
    
    if (productContainer) {
     
      productContainer.innerHTML += productElement;
      }
    // Add product element to product list container
   
  }

  const NewArrivals = [
    {
      id:9,
        name: "Jacket",
        description: "Soft Jacket",
        price: "45.00",
        size:"Xl-L",
        color:"blue-black",
        url:"img/products/1.jpg"
      },
    {
      id:10,
      name: "Shirt",
      description: "Western Denim Shirt",
      price: "20.00",
      size:"Xl-M",
      color:"red-blue-white",
      url:"img/products/n2.jpg"
    },
    {
      id:11,
      name: "Dress",
      description: "Cotton Dress",
      price: "30.00",
      size:"Xl-M",
      color:"red-blue-yallow",
      url:"img/products/2.jpg"
    },
    {
      id:12,
      name: "popover shirt",
      description: "Gitman Vintage popover shirt",
      price: "50.00",
      size:"Xl-M-s",
      color:"blue-black",
      url:"img/products/n4.jpg"
    },
    {
        id:13,
        name: "Shirt",
        description: "indigo denim workshirt",
        price: "25.00",
        size:"L-M-S",
        color:"red-blue-white",
        url:"img/products/n5.jpg"
      },
      {
      id:14,
      name: "Shorts",
      description: "Pleated Shorts",
      price: "10.00",
      size:"Xl-L-S",
      color:"red-blue-yellow",
      url:"img/products/n6.jpg"
    },
    {
    id:15,
    name: "Shirt",
    description: "Flint and Tinder shirt",
    price: "30.00",
    size:"Xl-L-M",
    color:"red-blue-white",
    url:"img/products/n7.jpg"
  },
  {
    id:16,
  name: "popover Shirt",
  description: "short sleeve popover",
  price: "20.00",
  size:"Xl-M-S",
  color:"black-blue-white",
  url:"img/products/n8.jpg"
  }
  ,{
    id: 21,
    name: "Nike",
    description: "Nike Max 270SE",
    price: "120.00",
    size:"40-42-44",
    color:"red-blue-white-yellow",
    url:"img/products/Shoes/product-5.jpg"
    }
    ,{
      id: 22 ,
      name: "Adidas",
      description: "Adidas Sneaker Shoes",
      price: "100.00",
      size:"44-40-38",
      color:"red-blue-white",
      url:"img/products/Shoes/product-6.jpg"
      }
      ,{
        id: 23,
        name: "Nike",
        description: "Nike Basketball Shoes",
        price: "120.00",
        size:"45-42-20",
        color:"purple-blue-yellow",
        url:"img/products/Shoes/product-7.jpg"
        }
        ,{
          id: 24,
          name: "Puma",
          description: "New Puma Shoes",
          price: "100.00",
          size:"44-42",
          color:"blue-green-white",
          url:"img/products/Shoes/product-8.jpg"
          }
  ];

  const productContainer_listind = document.getElementById("product-listInd2");
  
  for (let i = 0; i < NewArrivals.length; i++) {
    const product2 = NewArrivals[i];
    const productElementInd2 = `
    <div class="pro">
    <div class="product-img" onclick="window.location.href='sproduct.html?productid=${product2.id}';">
    <img src="${product2.url}" alt="">
    </div>
    <div class="des">
        <span >${product2.name}</span>
        <h5>${product2.description}</h5>
        <div class="star">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
        </div>
        <h4>$${product2.price}</h4>
    </div>
    
</div>
    `;
    
      // Add product element to product list container
      if (productContainer_listind) {
     
        productContainer_listind.innerHTML += productElementInd2;
        }
    // Add product element to product list container
   
  }

  const productContainer_list = document.getElementById("product-list2");
  
  // Loop through product list and create HTML element for each product
  for (let i = 0; i < NewArrivals.length; i++) {
    const product2 = NewArrivals[i];
    
    // Create HTML element for product
    //
    const productElement2 = `
    <div class="pro">
    <div class="product-img" onclick="window.location.href='sproduct.html?productid=${product2.id}';">
    <img src="${product2.url}" alt="">
    </div>
    <div class="des">
        <span >${product2.name}</span>
        <h5>${product2.description}</h5>
        <div class="star">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
        </div>
        <h4>$${product2.price}</h4>
    </div>
    <a href="#" class="add-to-cart" data-product-id="${product2.id}" data-product-id="${product2.id}" data-product-name="${product2.name}" data-product-price="${product2.price}"> <i class="fal fa-shopping-cart cart"></i></a>
</div>
    `;
    
      // Add product element to product list container
      if (productContainer_list) {
     
        productContainer_list.innerHTML += productElement2;
        }
    // Add product element to product list container
   
  }

  
  const productContainer_list4 = document.getElementById("product-list5");
  const urlParams2 = new URLSearchParams(window.location.search);
	const productId2 = urlParams2.get('productid');
  const pid2=parseInt(productId2);

		// Find the product with matching ID in the FeaturedProducts array
		const product5 = FeaturedProducts.find((item) => item.id === parseInt(productId2));
   
    if(product5)
    {
      const sizes = product5.size.split("-"); // Split the size string into an array of sizes

      const sizeButtons = sizes.map(size => `<button>${size}</button>`).join("");
      const colors = product5.color.split("-"); // Split the size string into an array of sizes

      const colorButtons = colors.map(color => ` <li><button style="background-color: ${color};"></button></li>`).join("");
  const productElement5 =`
 
  <section id="proDetails" class="section-p1">
  <div class="single-pro-image">
      <img src="${product5.url}" width="100%" id="mainImg" alt="">
  </div>
  <div class="single-pro-details">
      <h6> ${product5.name}</h6>
      <h4> ${product5.description}</h4>
      <h2>$ ${product5.price}</h2>
      <div class="options">
      <div class="size-options">
        <p>Size:</p>
        ${sizeButtons}
      </div>
      <div class="color-options">
        <p>Color:</p>
        <ul>
        ${colorButtons}
        </ul>
      </div>
    </div>
  
      <h4> Prodcut Details</h4>
        <span> ${product5.name} can come in a variety of styles, sizes, and materials. They are typically designed to provide protection, comfort, and style for the wearer
        </span>
        
  </div>

  </section>
  
  `;

  if (productContainer_list4) {
     
    productContainer_list4.innerHTML += productElement5;
    }
  }

  const productContainer_list5 = document.getElementById("product-list6");
  const urlParams = new URLSearchParams(window.location.search);
	const productId = urlParams.get('productid');
const pid=Number(productId);

		// Find the product with matching ID in the FeaturedProducts array
		const product6 = NewArrivals.find((item) => item.id === parseInt(productId));
    if(product6)
    {
      const sizes2 = product6.size.split("-");
      const sizeButtons2 = sizes2.map(size => `<button>${size}</button>`).join("");
      const colors2 = product6.color.split("-"); // Split the size string into an array of sizes

      const colorButtons2 = colors2.map(color => ` <li><button style="background-color: ${color};"></button></li>`).join("");
  
  const productElement6 = `
 
  <section id="proDetails" class="section-p1">
  <div class="single-pro-image">
      <img src="${product6.url}" width="100%" id="mainImg" alt="">
      
  </div>

  <div class="single-pro-details">
      <h6> ${product6.name}</h6>
      <h4> ${product6.description}</h4>
      <h2>$ ${product6.price}</h2>
      <div class="options">
      <div class="size-options">
        <p>Size:</p>
        ${sizeButtons2}
      </div>
      <div class="color-options">
        <p>Color:</p>
        <ul>
        ${colorButtons2}
        </ul>
      </div>
    </div
     
      <h4> Prodcut Details</h4>
      <span> ${product6.name} can come in a variety of styles, sizes, and materials. They are typically designed to provide protection, comfort, and style for the wearer
      </span>

  </section>
  `;

  if (productContainer_list5) {
     
    productContainer_list5.innerHTML += productElement6;
    }
  
  }

  const shoppingCartSection = document.getElementById('shopping-cart-section');
  if(shoppingCartSection)
  {
  }
  $(document).ready(function() { 
     let cart=[];
    // cartItems=[];
  //   const quantityInput=document.getElementById("QtyValue");
     const cartItemsH=document.getElementById("cart-items");
   
      $('.add-to-cart').click(function (event) {
          event.preventDefault();
          const productPrice = $(this).data('product-price');
          const productName = $(this).data('product-name');
          const productId= $(this).data('product-id');
         
        //  const quantity = quantityInput.value;
        shoppingCartSection.style.display = 'flex';
  
          addToCart(productId, productName, productPrice);
      });
  
      // Update quantity input event listener
      $('#cart-items').on('change', '.quantity-input', function () {
        const productId = $(this).closest('tr').data('product-id');
        
          const quantity = Number($(this).val());
        
          updateCartItemQuantity(productId, quantity);
      }); 
    
  
      // Remove item button event listener
      $('#cart-items').on('click', '.remove-item', function () {
          const productId = $(this).closest('tr').data('product-id');
  
          removeCartItem(productId);
      });
  

      // Checkout button event listener
      $('.payButton').click(function () {
          checkout();
      });
  
      // Add item to cart and update UI
      function addToCart(id, name, price) {
          // Check if item is already in cart
        // let cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
         const existingItemIndex = cart.findIndex(item => item.id === id);

          if (existingItemIndex !== -1) {
              // Item already exists in cart, update its quantity
              cart[existingItemIndex].quantity++;
          } else {
              // Item does not exist in cart, add it
              cart.push({
                  id: id,
                  name: name,
                  price: price,
                  quantity:1
              });
          }
           updateCartUI();
           alert('The product has been added successfully ')
      }
      
      // Update cart item quantity and update UI
      function updateCartItemQuantity(id, quantity ) {
          // Find cart item by ID
          const cartItem = cart.find(item => item.id === id);
        //  let itemIndex = rows.indexOf(item); 
          // Update cart item's quantity
          cartItem.quantity = quantity;
         //alert('The product has been updated successfully ')
          updateCartUI();
      }
  
      // Remove cart item and update UI
      function removeCartItem(id) {
          // Find index of cart item to be removed
         const itemIndexToRemove = cart.find(item => item.id === id);
        
          // Update cart item's quantity
          // Remove cart item from array
          cart.splice(itemIndexToRemove, 1);
          
          updateCartUI();
          alert('The product has been deleted successfully ')
      }

    
    
      // Calculate subtotal, tax, and total, and update UI
      function updateCartUI() {
        let subtotal = 0;
        // Generate HTML for cart items
        let cartItemsHTML = '';
       
        cart.forEach(item => {
            subtotal += item.price * item.quantity;

              cartItemsHTML +=
                  `<tr data-product-id="${item.id}" class="d-sm-block d-md-table-row">
                      <td>${item.name}</td>
                      <td>$ ${item.price}</td>
                      <td><input class="form-control quantity-input" type="number"  value="${item.quantity}"></td>
                      <td><button class="btn btn-danger remove-item">Remove</button></td>
                  </tr>`;
          });

           localStorage.setItem("cart", JSON.stringify(cart));
          const DisRate = 0.25;
          const dis = subtotal * DisRate;
          const total = subtotal - dis;
  
          $('#subtotal').text(`$${subtotal.toFixed(2)}`);
          $('#discount').text(`$${dis.toFixed(2)}`);
          $('#total').text(`$${total.toFixed(2)}`);
         
          // Update cart items table
           if(cartItemsH){
            cartItemsH.innerHTML =cartItemsHTML;
           
              }
      }
      

      // Checkout and clear cart
      function checkout() {
      //   alert('please enter all Persnol and Card Information for pay Successfully')
      cart=[];
      alert('pay Successfully')
         
      }
  }); 

  const displayCartBtn = document.getElementById("displayCartBtn");
  if(displayCartBtn ){
  displayCartBtn.addEventListener("click", displayCart);
             }

  function displayCart() {
    const storedCart = JSON.parse(localStorage.getItem("cart")); 
    
    updateCartUI();

    $('#cart-items2').on('change', '.quantity-input', function () {
      const productId = $(this).closest('tr').data('product-id');
      
        const quantity = Number($(this).val());
      
        updateCartItemQuantity(productId, quantity);
    }); 
  

    // Remove item button event listener
    $('#cart-items2').on('click', '.remove-item', function () {
        const productId = $(this).closest('tr').data('product-id');

        removeCartItem(productId);
    });


    // Checkout button event listener
    $('.payButton').click(function () {
        checkout();
    });
    function updateCartItemQuantity(id, quantity ) {
      // Find cart item by ID
      const cartItem = storedCart.find(item => item.id === id);
    
      cartItem.quantity = quantity;
    
      updateCartUI();
  }

  // Remove cart item and update UI
  function removeCartItem(id) {
      // Find index of cart item to be removed
     const itemIndexToRemove = storedCart.find(item => item.id === id);

     storedCart.splice(itemIndexToRemove, 1);
      
      updateCartUI();
      alert('The product has been deleted successfully ')
  }
   
  function  updateCartUI(){
    let subtotal = 0;
    let cartItemsHTML = "";

    storedCart.forEach(item => {
    subtotal += item.price * item.quantity;
    
    cartItemsHTML += `
    <tr data-product-id="${item.id}" class="d-sm-block d-md-table-row">           <td>${item.name}</td>   
            <td>$ ${item.price}</td>         
              <td><input class="form-control quantity-input" type="number" min="1" 
              value="${item.quantity}"></td>         
               <td><button class="btn btn-danger remove-item">Remove</button></td>  </tr> `;
    });
    
   const DisRate = 0.25;
          const dis = subtotal * DisRate;
          const total = subtotal - dis;
  
          
         
    const cartItems = document.getElementById("cart-items2");
    cartItems.innerHTML =`
    <table>  <tbody>${cartItemsHTML}</tbody>  </table>     
               `;
          $('#subtotal').text(`$${subtotal.toFixed(2)}`);
          $('#discount').text(`$${dis.toFixed(2)}`);
          $('#total').text(`$${total.toFixed(2)}`);

    }
    function checkout() {
        
     // storedCart=[];
     localStorage.clear();
     alert('pay Successfully')
         
      }
  }

  const footer=document.getElementById("foot");
  const header=document.getElementById("navheader");


  const headerElement= ` <header>
  <nav class="navbar navbar-expand-md bg-dark navbar-dark">
      <a class="navbar-brand" href="index.html">Ecommerce Store</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">
             
              <li class="nav-item">
                  <a class="nav-link" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="shop.html">Shop</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="contact.html">Contact</a>
              </li>
              <li class="nav-item">
                  <a  class="nav-link" href="cart.html" "><i class="far fa-shopping-bag"></i></a>
              </li>
          </ul>
      </div>
  </nav>
</header>
`;
  header.innerHTML=headerElement;

  const footerElement= ` <footer class="bg-dark text-white mt-5 section-p1">
  <div class="container">
      <div class="row">
          <div class="col-md-4">
              <h4>Contact</h4>
      <p><Strong> Address:</Strong> Homs-Syria</p>
      <p><Strong> Phone:</Strong> +963996000000</p>
      <p><Strong> Email:</Strong> Waseem_232315@svuonline.org</p>
      <div class="follow1">
          <h4>Follow us</h4>
          <div class="icon followus">
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-youtube"></i>
            </div>

           </div>
           </div>

          <div class="col-md-4" >
              <div class="col about">
              <h4> About</h4>
              <a href="#">About us</a>
              <a href="#">Delivery Information</a>
              <a href="#" >Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
              <a href="contact.html">Contact us</a>
          </div> 
          </div>
          <div class="col-md-4">
              <div class="intsall">
              <h4>install app</h4>
              <p>
                 from Google Play and Play store
              </p>
                <div class="row">
                  <img src="img/pay/app.jpg" alt="">
                  <img src="img/pay/play.jpg" alt="">
                </div>
                <p>
                    Secured Payment Gateways
                </p>
                <img src="img/pay/pay.png" alt="">
            </div>
      </div>
            <div class="copyright">
                <p> &copy;2023 Ecommerce Website-All Rights Reserved By Waseem_232315</p>
            </div>

          </div>
      
  </div>
</footer>
`;
footer.innerHTML=footerElement;

const productButton = document.getElementById("checkout-btn");
const payment = document.getElementById("payment");
const close= document.querySelector(".closePayment");

if(payment){
  payment.style.display = "none";
}

if (productButton) {
  productButton.addEventListener("click", () => {
    payment.style.display = "flex";

  });
}
  if (close) {
    close.addEventListener("click", () => {
      payment.style.display = "none";
  
    });
}

 
  


