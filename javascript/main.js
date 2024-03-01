const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
if (bar) {
  bar.addEventListener("click", function () {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", function () {
    nav.classList.remove("active");
  });
}

// Array of products
var products = [
  {
    image: "../img/24.png",
    brand: "acer",
    name: "Acer Gaming Nitro 5",
    rating: 5,
    price: 1050,
  },
  {
    image: "../img/27.png",
    brand: "acer",
    name: "Acer Gaming Nitro 5",
    rating: 5,
    price: 1050,
  },
  {
    image: "../img/25.png",
    brand: "acer",
    name: "Acer Gaming Nitro 5",
    rating: 5,
    price: 1050,
  },
  {
    image: "../img/26.png",
    brand: "acer",
    name: "Acer Gaming Nitro 5",
    rating: 5,
    price: 1050,
  },
];

// Loop through the products array and generate product cards
var productRow = document.getElementById("productRow");
for (var i = 0; i < products.length; i++) {
  var product = products[i];

  var productCard = document.createElement("div");
  productCard.className = "col-lg-3 col-md-6 col-sm-12";
  productCard.innerHTML = `
                                            <div class="pro">
                                                <img src="${
                                                  product.image
                                                }" alt="product">
                                                <div class="des">
                                                    <span>${
                                                      product.brand
                                                    }</span>
                                                    <h5>${product.name}</h5>
                                                    <div class="star">
                                                        ${generateStars(
                                                          product.rating
                                                        )}
                                                    </div>
                                                    <h4>$ ${product.price}</h4>
                                                </div>
                                            </div>
                                        `;

  // Add event listener to navigate to pageDetail.html on card click
  productCard.addEventListener("click", function () {
    window.location.href = "/layout/pageDetail.html";
  });

  productRow.appendChild(productCard);
}

// Helper function to generate star icons based on rating
function generateStars(rating) {
  var stars = "";
  for (var i = 0; i < rating; i++) {
    stars += '<i class="fas fa-star"></i>';
  }
  return stars;
}

var cards = [
  { imageSrc: "../img/24.png", infoText: "Computer" },
  { imageSrc: "../img/25.png", infoText: "Mouse" },
  { imageSrc: "../img/26.png", infoText: "Keyboard" },
  { imageSrc: "../img/27.png", infoText: "Headphone" },
  // Add more card data as needed
];
var newArrivals = [
  {
    image: "../img/24.png",
    brand: "acer",
    name: "Acer Gaming Nitro 5",
    rating: 5,
    price: 1050,
  },
  {
    image: "../img/27.png",
    brand: "acer",
    name: "Acer Gaming Nitro 5",
    rating: 5,
    price: 1050,
  },
  {
    image: "../img/25.png",
    brand: "acer",
    name: "Acer Gaming Nitro 5",
    rating: 5,
    price: 1050,
  },
  {
    image: "../img/26.png",
    brand: "acer",
    name: "Acer Gaming Nitro 5",
    rating: 5,
    price: 1050,
  },
];

// Loop through the new arrival products array and generate product cards
var arrivalRow = document.getElementById("arrivalRow");
for (var i = 0; i < newArrivals.length; i++) {
  var product = newArrivals[i];

  var productCard = document.createElement("div");
  productCard.className = "col-lg-3 col-md-6 col-sm-12";
  productCard.innerHTML = `
                            <div class="pro">
                                <img src="${product.image}" alt="product">
                                <div class="des">
                                    <span>${product.brand}</span>
                                    <h5>${product.name}</h5>
                                    <div class="star">
                                        ${generateStars(product.rating)}
                                    </div>
                                    <h4>$ ${product.price}</h4>
                                </div>
                            </div>
                        `;
  productCard.addEventListener("click", function () {
    window.location.href = "/layout/pageDetail.html";
  });

  arrivalRow.appendChild(productCard);
}

// Generate cards dynamically
var cardContainer = document.getElementById("cardContainer");
cards.forEach(function (card) {
  var cardDiv = document.createElement("div");
  cardDiv.className = "col-lg-3 col-md-6 col-sm-12";
  cardDiv.innerHTML = `
                                    <div class="card">
                                        <img src="${card.imageSrc}" alt="Image description">
                                        <div class="info">
                                            ${card.infoText}
                                        </div>
                                    </div>
                                `;
  cardDiv.addEventListener("click", function () {
    window.location.href = "/layout/products.html";
  });
  cardContainer.appendChild(cardDiv);
});
