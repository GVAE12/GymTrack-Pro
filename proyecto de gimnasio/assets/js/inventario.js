// Manejo del formulario para agregar nuevos equipos
document.getElementById('add-equipment-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('equipment-name').value;
    const status = document.getElementById('equipment-status').value;
    const purchaseDate = document.getElementById('purchase-date').value;
  
    // Crear nueva fila en la tabla de inventario
    const table = document.getElementById('inventory-table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    newRow.innerHTML = `
      <td>${name}</td>
      <td>${status}</td>
      <td>${purchaseDate}</td>
      <td>
        <button class="btn modify-btn">Modificar</button>
        <button class="btn remove-btn">Eliminar</button>
      </td>
    `;
  
    // Limpiar formulario
    document.getElementById('add-equipment-form').reset();
  });
  
  // Funcionalidad para modificar o eliminar equipos (simplificada)
  document.getElementById('inventory-table').addEventListener('click', function(event) {
    const target = event.target;
  
    if (target.classList.contains('modify-btn')) {
      alert('Modificando equipo...');
    } else if (target.classList.contains('remove-btn')) {
      target.closest('tr').remove();
    }
  });
  
  // Funcionalidad para generar un informe (simulación)
  document.querySelector('.generate-report').addEventListener('click', function() {
    alert("Generando informe de inventario...");
  });
  