// Datos de ejemplo para entrenamientos
let workouts = [
  { name: "Flexiones de Bíceps", duration: 20, reps: 3, group: "brazo" },
  { name: "Sentadillas", duration: 30, reps: 4, group: "pierna" },
];

// Renderizar la tabla de entrenamientos
function renderWorkouts(group = "brazo") {
  const tableBody = document.getElementById("workoutsTable").getElementsByTagName("tbody")[0];
  tableBody.innerHTML = "";

  const filteredWorkouts = workouts.filter((workout) => workout.group === group);

  filteredWorkouts.forEach((workout, index) => {
    const row = tableBody.insertRow();
    row.innerHTML = `
      <td>${workout.name}</td>
      <td>${workout.duration}</td>
      <td>${workout.reps}</td>
      <td>${workout.group}</td>
      <td>
        <button class="btn-edit" onclick="editWorkout(${index})"><i class="fas fa-edit"></i> Editar</button>
        <button class="btn-delete" onclick="deleteWorkout(${index})"><i class="fas fa-trash"></i> Eliminar</button>
      </td>
    `;
  });
}

// Agregar un nuevo entrenamiento
document.getElementById("workoutForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("workoutName").value;
  const duration = document.getElementById("workoutDuration").value;
  const reps = document.getElementById("workoutReps").value;
  const group = document.getElementById("workoutGroup").value;

  workouts.push({ name, duration, reps, group });
  renderWorkouts(group);
  updateChart();
  document.getElementById("workoutForm").reset();
});

// Editar un entrenamiento
function editWorkout(index) {
  const workout = workouts[index];
  document.getElementById("workoutName").value = workout.name;
  document.getElementById("workoutDuration").value = workout.duration;
  document.getElementById("workoutReps").value = workout.reps;
  document.getElementById("workoutGroup").value = workout.group;

  // Eliminar el entrenamiento de la lista
  workouts.splice(index, 1);
  renderWorkouts(workout.group);
  updateChart();
}

// Eliminar un entrenamiento
function deleteWorkout(index) {
  if (confirm("¿Estás seguro de que deseas eliminar este entrenamiento?")) {
    const group = workouts[index].group;
    workouts.splice(index, 1);
    renderWorkouts(group);
    updateChart();
  }
}

// Gráfico de progreso
const ctx = document.getElementById("progressChart").getContext("2d");
const progressChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: workouts.map((workout) => workout.name),
    datasets: [
      {
        label: "Duración (minutos)",
        data: workouts.map((workout) => workout.duration),
        backgroundColor: "#007bff", // Azul vibrante
      },
      {
        label: "Repeticiones",
        data: workouts.map((workout) => workout.reps),
        backgroundColor: "#28a745", // Verde
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Actualizar el gráfico
function updateChart() {
  progressChart.data.labels = workouts.map((workout) => workout.name);
  progressChart.data.datasets[0].data = workouts.map((workout) => workout.duration);
  progressChart.data.datasets[1].data = workouts.map((workout) => workout.reps);
  progressChart.update();
}

// Cambiar de pestaña
document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => {
    // Remover la clase "active" de todos los botones
    document.querySelectorAll(".tab-button").forEach((btn) => btn.classList.remove("active"));
    // Agregar la clase "active" al botón seleccionado
    button.classList.add("active");
    // Renderizar los entrenamientos del grupo seleccionado
    const group = button.getAttribute("data-group");
    renderWorkouts(group);
  });
});

// Renderizar la tabla y el gráfico al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  renderWorkouts("brazo"); // Mostrar entrenamientos de brazo por defecto
  updateChart();
});
