document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Obtener datos del formulario
    const name = document.getElementById('name').value;
    const amount = document.getElementById('amount').value;
    const method = document.getElementById('payment-method').value;
  
    // Crear nueva fila en la tabla de pagos
    const table = document.getElementById('payments-table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    newRow.innerHTML = `
      <td>${name}</td>
      <td>${amount}</td>
      <td>${method}</td>
      <td>${new Date().toLocaleString()}</td>
    `;
  
    // Limpiar formulario
    document.getElementById('payment-form').reset();
    
    // Mostrar notificación de pago pendiente
    const notificationList = document.getElementById('notifications-list');
    const newNotification = document.createElement('li');
    newNotification.textContent = `Pago pendiente de ${name} por ${amount} (${method})`;
    notificationList.appendChild(newNotification);
  });
  
  // Función para generar informe (solo como ejemplo, integración real de PDF sería necesaria)
  document.querySelector('.generate-report').addEventListener('click', function() {
    alert("Generando informe PDF...");
  });
  