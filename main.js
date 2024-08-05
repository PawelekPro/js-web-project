// Pobranie elementów z DOM
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Funkcja dodająca nowy element do listy
function addTodo(event) {
    event.preventDefault(); // Zapobiegamy przeładowaniu strony
    console.log("Button clicked");

    const todoText = todoInput.value.trim();
    if (todoText === '') return;

    const todoItem = document.createElement('li');
    todoItem.textContent = todoText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');

    deleteButton.addEventListener('click', () => {
        todoItem.remove();
    });

    todoItem.appendChild(deleteButton);

    todoItem.addEventListener('click', () => {
        todoItem.classList.toggle('complete');
    });

    todoList.appendChild(todoItem);

    todoInput.value = ''; // Czyścimy pole inputa
}

// Dodajemy nasłuchiwanie na submit formularza
todoForm.addEventListener('submit', addTodo);
