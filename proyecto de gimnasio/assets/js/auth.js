// Lógica de Autenticación
const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simulación de validación (usuario: admin, contraseña: 1234)
  if (username === 'admin' && password === '1234') {
    // Redirigir al panel de administrador (dashboard.html)
    window.location.href = 'dashboard.html';
  } else if (username === 'trainer' && password === '1234') {
    // Redirigir al panel de entrenador (trainer.html)
    window.location.href = 'trainer.html';
  } else if (username === 'member' && password === '1234') {
    // Redirigir al panel de miembro (member.html)
    window.location.href = 'member.html';
  } else {
    // Mostrar mensaje de error
    errorMessage.style.display = 'block';
  }
});