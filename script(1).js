document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    // Función para agregar una nueva tarea
    function addTask(taskText) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <div>
                <button class="complete">Completar</button>
                <button class="delete">Eliminar</button>
            </div>
        `;
        taskList.appendChild(li);

        // Evento para marcar la tarea como completada
        li.querySelector('.complete').addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        // Evento para eliminar la tarea
        li.querySelector('.delete').addEventListener('click', () => {
            taskList.removeChild(li);
        });
    }

    // Evento para agregar una tarea al enviar el formulario
    taskForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });
});
