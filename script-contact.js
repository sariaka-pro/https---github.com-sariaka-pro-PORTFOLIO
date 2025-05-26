
document.getElementById('contactForm').addEventListener('submit', function(event) {
    let isValid = true;
  
    // Validation du nom
    let name = document.getElementById('name');
    let nameError = document.getElementById('nameError');
    if (name.value === '' || name.value.length <= 2) { 
      nameError.style.display = 'inline'; 
      isValid = false;
    } else {
      nameError.style.display = 'none';
    }
  
    // Validation de l'email
    let email = document.getElementById('email');
    let emailError = document.getElementById('emailError');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email.value === '' || !emailPattern.test(email.value)) {
      emailError.style.display = 'inline';
      isValid = false;
    } else {
      emailError.style.display = 'none';
    }
    
    if (!isValid) {
      event.preventDefault(); 
    }
  });
  
  
  