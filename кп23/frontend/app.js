// frontend/app.js

const apiUrl = 'http://localhost:5000/api/todos';

async function fetchTodos() {
    const response = await fetch(apiUrl);
    const todos = await response.json();
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.title;
        if (todo.completed) {
            li.style.textDecoration = 'line-through';
        }
        li.addEventListener('click', () => showModal(todo.title));
        li.addEventListener('dblclick', () => deleteTodo(todo._id));
        todoList.appendChild(li);
    });
}

function showModal(taskText) {
    const modalContent = document.getElementById('modalTaskContent');
    modalContent.textContent = taskText;
    const taskModal = new bootstrap.Modal(document.getElementById('taskModal'));
    taskModal.show();
}

async function addTodo(title) {
    await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title }),
    });
    fetchTodos();
}

async function deleteTodo(id) {
    await fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
    });
    fetchTodos();
}

document.getElementById('todoForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const todoInput = document.getElementById('todoInput');
    const title = todoInput.value.trim();
    if (title) {
        addTodo(title);
        todoInput.value = '';
    }
});

fetchTodos();
