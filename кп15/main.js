document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.js--form');
    const input = document.querySelector('.js--form__input');
    const todosWrapper = document.querySelector('.js--todos-wrapper');

    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        addTodo();
    });

    function addTodo() {
        const value = input.value.trim();
        if (value) {
            const newTodo = {
                description: value,
                completed: false
            };
            todos.push(newTodo);
            updateLocalStorage();
            renderTodos();
            input.value = '';
        }
    }

    function deleteTodo(index) {
        todos.splice(index, 1);
        updateLocalStorage();
        renderTodos();
    }

    function toggleTodoCompletion(index) {
        todos[index].completed = !todos[index].completed;
        updateLocalStorage();
        renderTodos();
    }

    function updateLocalStorage() {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    function renderTodos() {
        todosWrapper.innerHTML = '';
        todos.forEach((todo, index) => {
            const todoItem = document.createElement('li');
            todoItem.classList.add('todo-item');
            if (todo.completed) {
                todoItem.classList.add('todo-item--checked');
            }

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = todo.completed;
            checkbox.addEventListener('change', () => toggleTodoCompletion(index));

            const description = document.createElement('span');
            description.classList.add('todo-item__description');
            description.textContent = todo.description;

            const deleteButton = document.createElement('button');
            deleteButton.classList.add('todo-item__delete');
            deleteButton.textContent = 'Видалити';
            deleteButton.addEventListener('click', () => deleteTodo(index));

            todoItem.appendChild(checkbox);
            todoItem.appendChild(description);
            todoItem.appendChild(deleteButton);

            todosWrapper.appendChild(todoItem);
        });
    }

    renderTodos();
});
