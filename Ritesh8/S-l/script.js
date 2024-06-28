// Signup
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    if (!localStorage.getItem(username)) {
      localStorage.setItem(username, password);
      alert('Signup successful!');
      window.location.href = 'login.html'; // Redirect to login page after signup
    } else {
      document.getElementById('signup-error').textContent = 'Username already exists!';
    }
  });
  
  // Login
  document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    if (localStorage.getItem(username) === password) {
      alert('Login successful!');
      // You can redirect to another page here
    } else {
      document.getElementById('login-error').textContent = 'Invalid username or password!';
    }
  });
  