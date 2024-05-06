document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const messageDiv = document.getElementById('message');
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const username = loginForm.username.value;
      const password = loginForm.password.value;
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find(u => u.username === username && u.password === password);
      if (user) {
        showMessage('Login successful!', 'success');
        setTimeout(() => {
          window.location.href = 'index.html';
        }, 1000);
      } else {
        showMessage('Invalid username or password.', 'error');
      }
    });
  
    function showMessage(message, type) {
      messageDiv.textContent = message;
      messageDiv.id = type;
    }
  });
  