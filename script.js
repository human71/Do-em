document.getElementById('add-task-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let taskInput = document.getElementById('task-input');
    let taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
        taskInput.focus();
    }
});

document.getElementById('task-list').addEventListener('click', function(event) {
    let target = event.target;
    if (target.classList.contains('delete-task')) {
        let taskItem = target.parentNode;
        taskItem.remove();
    } else if (target.classList.contains('task-text')) {
        target.classList.toggle('completed');
    } else if (target.classList.contains('task-checkbox')) {
        let taskItem = target.parentNode;
        taskItem.querySelector('.task-text').classList.toggle('completed');
    }
});

function addTask(taskText) {
    let taskList = document.getElementById('task-list');
    let taskItem = document.createElement('li');
    let taskTextElement = document.createElement('span');
    let currentDateElement = document.createElement('span');
    let taskCheckbox = document.createElement('input');
    let deleteButton = document.createElement('button');

    taskTextElement.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`;
    taskTextElement.textContent += taskText;
    taskTextElement.innerHTML += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`;
    taskTextElement.classList.add('task-text');

    currentDateElement.textContent = getCurrentDate();
    currentDateElement.classList.add('text-muted');
    currentDateElement.innerHTML += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`;

    taskCheckbox.type = 'checkbox';
    taskCheckbox.classList.add('task-checkbox');
    
    
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('btn', 'btn-danger', 'delete-task', );

    taskItem.classList.add('list-group-item', 'd-flex', 'align-items-center');
    taskItem.appendChild(taskCheckbox);
    taskItem.appendChild(taskTextElement);
    taskItem.appendChild(currentDateElement);
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);
}



function getCurrentDate() {
    let currentDate = new Date();
    let day = String(currentDate.getDate()).padStart(2, '0');
    let month = String(currentDate.getMonth() + 1).padStart(2, '0');
    let year = currentDate.getFullYear();
    return day + '/' + month + '/' + year;
}