document.getElementById('add-task-button').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('task-list');
    const newTask = document.createElement('li');

    newTask.textContent = taskText;

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.style.marginRight = '10px';
    completeButton.addEventListener('click', () => {
        newTask.classList.toggle('completed');
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(newTask);
    });

    newTask.appendChild(completeButton);
    newTask.appendChild(deleteButton);

    taskList.appendChild(newTask);

    taskInput.value = '';
}
