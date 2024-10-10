document.addEventListener('DOMContentLoaded', function () {
    'use strict';
  
    var form = document.getElementById('loginForm');
  
    function handleFormSubmit(event) {
      event.preventDefault();
      if (form.checkValidity()) {
        redirectToHome();
      } else {
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }
  
    function redirectToHome() {
      window.location.href = "home.html";
    }
  
    form.addEventListener('submit', handleFormSubmit);
  });