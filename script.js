
var comUl = document.querySelector("#com-ul");
var inconUl = document.querySelector("#incom-ul");
var todoForm = document.querySelector("#todo-form");

var createTask = function (task) {
    let todoList = document.createElement("li");
    let todoLable = document.createElement("label");
    let todoInput = document.createElement("input");

    todoLable.innerText = task;
    todoInput.type ="chackbox";
    todoList.appendChild(todoLable);
    todoList.appendChild(todoInput);

    return todoList;
}


var addTask = function () {
    
}
