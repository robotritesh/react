// script.js
document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('product-list');
    const categorySelect = document.getElementById('category-select');
    const sortSelect = document.getElementById('sort-select');
    const searchInput = document.getElementById('search-input');
  
    // Fetch categories and populate dropdown
    fetchCategories();
  
    // Fetch and display all products
    fetchProducts();
  
    // Event listeners
    categorySelect.addEventListener('change', fetchProducts);
    sortSelect.addEventListener('change', fetchProducts);
    searchInput.addEventListener('input', fetchProducts);
  
    async function fetchCategories() {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const categories = await response.json();
        categories.forEach(category => {
          const option = document.createElement('option');
          option.value = category;
          option.textContent = category;
          categorySelect.appendChild(option);
        });
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    }
  
    async function fetchProducts() {
      const category = categorySelect.value;
      const sortBy = sortSelect.value;
      const searchTerm = searchInput.value.trim().toLowerCase();
  
      let url = 'https://fakestoreapi.com/products';
  
      if (category) {
        url += `?category=${category}`;
      }
  
      try {
        const response = await fetch(url);
        let products = await response.json();
  
        // Filter products by search term
        products = products.filter(product => product.title.toLowerCase().includes(searchTerm));
  
        // Sort products by price
        if (sortBy === 'asc') {
          products.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'desc') {
          products.sort((a, b) => b.price - a.price);
        }
  
        // Display products
        displayProducts(products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
  
    function displayProducts(products) {
      productList.innerHTML = '';
  
      products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
  
        const image = document.createElement('img');
        image.src = product.image;
        image.alt = product.title;
  
        const title = document.createElement('h3');
        title.textContent = product.title;
  
        const price = document.createElement('p');
        price.textContent = `$${product.price.toFixed(2)}`;
  
        productDiv.appendChild(image);
        productDiv.appendChild(title);
        productDiv.appendChild(price);
  
        productList.appendChild(productDiv);
      });
    }
  });

  