const formTodo = document.querySelector(".todo_area .form"),
  inputTodo = document.querySelector(".input_todo"),
  ul = document.querySelector(".todo_area .todo_list");

const TODO_LOCALSTORAGE = "todo";

let todoArr = [];

const deleteTodo = event => {
  const button = event.target;
  const li = button.parentNode;
  ul.removeChild(li);
  const arrangedTodo = todoArr.filter(todo => {
    return todo.id !== parseInt(li.id);
  })
  todoArr = arrangedTodo;
  saveTodo();
}

const saveTodo = () => {
  localStorage.setItem(TODO_LOCALSTORAGE, JSON.stringify(todoArr));
};

const makeList = todo => {
  const newId = Math.floor(Math.random()*10000 + 1);
  const li = document.createElement('li');
  const buttonDelete = document.createElement('button');
  const todoObj = {
    id: newId,
    todo: todo
  }

  li.id = newId;
  li.innerText = todo;
  li.classList.add('todo_item');
  buttonDelete.innerText = '❎';
  buttonDelete.classList.add('button_delete');
  buttonDelete.addEventListener('click', deleteTodo);
  li.appendChild(buttonDelete);
  ul.appendChild(li);
  todoArr.push(todoObj);
  // printTodo(todo);
  saveTodo();
}

const handleTodoSubmit = (event) => {
  event.preventDefault();
  const currentValue = inputTodo.value;
  makeList(currentValue);
  inputTodo.value = '';
};

const getTodo = () => {
  const currentTodo = localStorage.getItem(TODO_LOCALSTORAGE);
  if (currentTodo !== null) {
    const parsedTodo = JSON.parse(currentTodo);
    parsedTodo.forEach(item => {
      makeList(item.todo);
    })
  } 
};

const initTodo = () => {
  formTodo.addEventListener("submit", handleTodoSubmit);  
  getTodo();
};
initTodo();
