const products = [
  { id: 1, name: "Smartphone", price: 8999, category: "Electronics", image: "https://via.placeholder.com/200x150", rating: 4.5 },
  { id: 2, name: "T-Shirt", price: 499, category: "Clothing", image: "https://via.placeholder.com/200x150", rating: 4.2 },
  { id: 3, name: "Book: JavaScript", price: 299, category: "Books", image: "https://via.placeholder.com/200x150", rating: 4.9 },
  { id: 4, name: "Headphones", price: 1199, category: "Electronics", image: "https://via.placeholder.com/200x150", rating: 4.1 },
];

const productsContainer = document.getElementById("productsContainer");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const priceSort = document.getElementById("priceSort");

function renderProducts(list) {
  productsContainer.innerHTML = "";
  list.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>Price: ₹${product.price}</p>
      <p>Rating: ${product.rating} ⭐</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productsContainer.appendChild(card);
  });
}

function addToCart(id) {
  alert("Added to cart: " + products.find(p => p.id === id).name);
}

function filterAndSortProducts() {
  let filtered = [...products];

  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm) {
    filtered = filtered.filter(p => p.name.toLowerCase().includes(searchTerm));
  }

  const selectedCategory = categoryFilter.value;
  if (selectedCategory) {
    filtered = filtered.filter(p => p.category === selectedCategory);
  }

  const sortBy = priceSort.value;
  if (sortBy === "low-high") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === "high-low") {
    filtered.sort((a, b) => b.price - a.price);
  }

  renderProducts(filtered);
}

searchInput.addEventListener("input", filterAndSortProducts);
categoryFilter.addEventListener("change", filterAndSortProducts);
priceSort.addEventListener("change", filterAndSortProducts);

// Initial render
renderProducts(products);
