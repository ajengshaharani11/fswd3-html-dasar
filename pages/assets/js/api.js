const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");
const inputan = document.getElementById("inputan");

//Rest API
const baseUrl = "https://crudcrud.com/api/";
const apiKey = "5c9e495a5d79460596632dfc7abdfc21";
const url = baseUrl + apiKey;
const endpointTodo = `${url}/todo`;

const handleError = (error) => console.log(error);
const handleSuccess = (result) => console.log(result);

// GET semua data
const getTodo = () => {
    fetch(endpointTodo).then(handleSuccess).catch(handleError);
};

// GET detail data
const detailTodo = (todo) => {
    fetch(`${endpointTodo}/${todo}`).then(handleSuccess).catch(handleError);
};

// document.addEventListener("DOMContentLoaded");
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("change", filterTodo);

function addTodo(event) {
    event.preventDefault();
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    const newTodo = document.createElement("li");
    newTodo.innerText = inputan.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check-circle"></li>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></li>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);
    inputan.value = "";

    const todoObj = {
        name: newTodo.innerText,
        isChecked: false,
    };

    fetch(endpointTodo, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(todoObj),
    })
        .then(handleSuccess)
        .catch(handleError);
}

//PUT UPDATE DATA
const updateTodo = (id, todo) => {
    fetch(`${endpointTodo}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
    })
        .then(handleSuccess)
        .catch(handleError);
};

//DELETE TODO BY ID
const deleteTodo = (id) => {
    fetch(`${endpointTodo}/${id}`, {
        method: "DELETE",
    })
        .then(handleSuccess)
        .catch(handleError);
};

function deleteCheck(e) {
    const item = e.target;

    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.classList.add("slide");
    }

    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "incomplete":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}

const updateTodoEdit = {
    name: "Belajar Javascript",
    isChecked: true,
};
// deleteTodo("641863c322534003e8c8edb1");
updateTodo("6418637222534003e8c8edaf", updateTodoEdit);
// detailTodo("6418637222534003e8c8edaf");

// function getLocalTodos() {
//   let todos = todos.forEach(function (todo) {
//     const todoDiv = document.createElement("div");
//     todoDiv.classList.add("todo");
//     const newTodo = document.createElement("li");
//     newTodo.innerText = todo;
//     newTodo.classList.add("todo-item");
//     todoDiv.appendChild(newTodo);

//     const completedButton = document.createElement("button");
//     completedButton.innerHTML = '<i class="fas fa-check-circle"></li>';
//     completedButton.classList.add("complete-btn");
//     todoDiv.appendChild(completedButton);

//     const trashButton = document.createElement("button");
//     trashButton.innerHTML = '<i class="fas fa-trash"></li>';
//     trashButton.classList.add("trash-btn");
//     todoDiv.appendChild(trashButton);

//     todoList.appendChild(todoDiv);
//   });
// }

// deleteCheck("64185cd622534003e8c8ed8c");
// function removeLocalTodos(todo) {
// let todos;
// if (localStorage.getItem("todos") === null) {
//   todos = [];
// } else {
//   todos = JSON.parse(localStorage.getItem("todos"));
// }
// const todoIndex = todo.children[0].innerText;
// todos.splice(todos.indexOf(todoIndex), 1);
// localStorage.setItem("todos", JSON.stringify(todos));
// }



