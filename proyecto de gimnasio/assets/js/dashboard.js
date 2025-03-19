// Lógica para el módulo de Gestionar Usuarios

// Variables Globales
let users = [
    { name: "Juan Pérez", email: "juan@example.com", role: "Miembro" },
    { name: "Ana Gómez", email: "ana@example.com", role: "Entrenador" },
  ];
  
  const usersTable = document.getElementById("usersTable").getElementsByTagName("tbody")[0];
  const addUserBtn = document.getElementById("addUserBtn");
  const modal = document.getElementById("userFormModal");
  const closeBtn = document.querySelector(".close");
  const userForm = document.getElementById("userForm");
  const formTitle = document.getElementById("formTitle");
  const searchByName = document.getElementById("searchByName");
  const filterByRole = document.getElementById("filterByRole");
  
  let isEditing = false;
  let currentUserId = null;
  
  // Funciones
  
  /**
   * Renderiza la tabla de usuarios.
   */
  function renderUsers() {
    usersTable.innerHTML = ""; // Limpiar la tabla
    const searchTerm = searchByName.value.toLowerCase();
    const selectedRole = filterByRole.value;
  
    users.forEach((user, index) => {
      if (
        (searchTerm === "" || user.name.toLowerCase().includes(searchTerm)) &&
        (selectedRole === "" || user.role === selectedRole)
      ) {
        const row = usersTable.insertRow();
        row.innerHTML = `
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.role}</td>
          <td>
            <button class="btn-edit" onclick="editUser(${index})"><i class="fas fa-edit"></i> Editar</button>
            <button class="btn-delete" onclick="deleteUser(${index})"><i class="fas fa-trash"></i> Eliminar</button>
          </td>
        `;
      }
    });
  }
  
  /**
   * Abre el modal para agregar o editar un usuario.
   * @param {boolean} editing - Indica si se está editando un usuario.
   * @param {number} userId - El índice del usuario que se está editando.
   */
  function openModal(editing = false, userId = null) {
    isEditing = editing;
    currentUserId = userId;
  
    if (editing) {
      formTitle.innerHTML = `<i class="fas fa-edit"></i> Editar Usuario`;
      const user = users[userId];
      document.getElementById("name").value = user.name;
      document.getElementById("email").value = user.email;
      document.getElementById("role").value = user.role;
    } else {
      formTitle.innerHTML = `<i class="fas fa-user-plus"></i> Agregar Usuario`;
      userForm.reset();
    }
  
    modal.style.display = "flex";
  }
  
  /**
   * Cierra el modal.
   */
  function closeModal() {
    modal.style.display = "none";
  }
  
  /**
   * Agrega o edita un usuario.
   */
  function saveUser(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const role = document.getElementById("role").value;
  
    if (isEditing) {
      // Editar usuario existente
      users[currentUserId] = { name, email, role };
    } else {
      // Agregar nuevo usuario
      users.push({ name, email, role });
    }
  
    renderUsers();
    closeModal();
  }
  
  /**
   * Edita un usuario.
   * @param {number} userId - El índice del usuario que se está editando.
   */
  function editUser(userId) {
    openModal(true, userId);
  }
  
  /**
   * Elimina un usuario.
   * @param {number} userId - El índice del usuario que se está eliminando.
   */
  function deleteUser(userId) {
    if (confirm("¿Estás seguro de que deseas eliminar este usuario?")) {
      users.splice(userId, 1);
      renderUsers();
    }
  }
  
  // Event Listeners
  
  // Abrir modal para agregar usuario
  addUserBtn.addEventListener("click", () => openModal());
  
  // Cerrar modal
  closeBtn.addEventListener("click", closeModal);
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
  
  // Guardar usuario (agregar/editar)
  userForm.addEventListener("submit", saveUser);
  
  // Filtrar usuarios
  searchByName.addEventListener("input", renderUsers);
  filterByRole.addEventListener("change", renderUsers);
  
  // Renderizar la tabla al cargar la página
  document.addEventListener("DOMContentLoaded", renderUsers);