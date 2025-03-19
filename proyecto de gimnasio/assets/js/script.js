// Lógica de Autenticación y Navegación
const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simulación de validación (usuario: admin, contraseña: 1234)
  if (username === 'admin' && password === '1234') {
    // Redirigir al dashboard
    window.location.href = 'dashboard.html'; // Redirección correcta
  } else {
    errorMessage.style.display = 'block'; // Mostrar mensaje de error
  }
});

// Funcionalidad del Modal (Formulario) - Solo para dashboard.html
if (window.location.pathname.includes('dashboard.html')) {
  const addUserBtn = document.getElementById('addUserBtn');
  const modal = document.getElementById('userFormModal');
  const closeBtn = document.querySelector('.close');
  const userForm = document.getElementById('userForm');
  const formTitle = document.getElementById('formTitle');
  const submitBtn = document.getElementById('submitBtn');

  // Abrir Modal para Agregar Usuario
  addUserBtn.addEventListener('click', () => {
    formTitle.textContent = 'Agregar Usuario';
    userForm.reset();
    modal.style.display = 'flex';
  });

  // Cerrar Modal
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Cerrar Modal al hacer clic fuera del formulario
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Enviar Formulario (Agregar/Editar Usuario)
  userForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Usuario guardado exitosamente');
    modal.style.display = 'none';
  });
}