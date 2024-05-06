document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');
    const messageDiv = document.getElementById('message');
  
    signupForm.addEventListener('submit', function(event) {
      event.preventDefault(); 

      const username = signupForm.username.value;
      const password = signupForm.password.value;
      const uname = signupForm.uname.value;
  
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const existingUser = users.find(user => user.username === username);
  
      if (existingUser) {
        showMessage('Username already exists. Please choose a different one.', 'error');
        return;
      }
      users.push({ uname,username, password });
      localStorage.setItem('users', JSON.stringify(users));
      showMessage('Signup Successful!', 'success');
      signupForm.reset();
    });
  
    function showMessage(message, type) {
      messageDiv.textContent = message;
      messageDiv.id = type;
    }
  });
  