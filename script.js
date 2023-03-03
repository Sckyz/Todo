let addButton = document.getElementById('addTodo');
let todoContainer = document.getElementById('list');
let textInput = document.getElementById('txt');

addButton.addEventListener('click', function () {
    var newItem = document.createElement('li');
    newItem.innerText = textInput.value;
    todoContainer.appendChild(newItem);
    textInput.value = "";
    newItem.addEventListener('click', function () {
        newItem.style.textDecoration = "line-through";
        newItem.style.backgroundColor = "#81B585";
    })
    newItem.addEventListener('dblclick', function () {
        todoContainer.removeChild(newItem);
    })
})