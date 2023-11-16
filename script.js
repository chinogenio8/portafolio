window.addEventListener('load', function() {
    alert('¡Bienvenido a mi Portfolio!');
  });



  ///sirve para poder validad los datos del formulario y no mandar 1 dato sino todos los datos necesarios
  
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', function(event) {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const comments = document.getElementById('coments').value;
  
      if (name.trim() === '' || email.trim() === '' || phone.trim() === '' || comments.trim() === '') {
        event.preventDefault(); // Evitar el envío del formulario
        alert('Por favor completa todos los campos obligatorios.');
      }
    });
  });


  
  
  //Sirve para el desplazamiento suave en la pagina 
  const links = document.querySelectorAll('nav.opciones a');

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(e.target.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });



  