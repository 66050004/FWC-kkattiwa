const ftList = document.getElementById("ft_list");

window.onload = () => {
loadToDos();
};

function newToDo() {
const text = prompt("Enter a new TO DO:");
if (text && text.trim() !== "") {
    addToDo(text.trim());
    saveToDos();
}
}

function addToDo(text) {
const todo = document.createElement("div");
todo.textContent = text;
todo.onclick = () => {
    if (confirm("Do you want to remove this TO DO?")) {
        todo.remove();
        saveToDos();
    }
};
ftList.prepend(todo);
}

function saveToDos() {
const todos = [];
const items = ftList.querySelectorAll("div");
items.forEach(item => todos.push(item.textContent));
document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos)) + ";path=/;max-age=31536000";
}

function loadToDos() {
const cookies = document.cookie.split(";");
for (let c of cookies) {
    c = c.trim();
    if (c.startsWith("todos=")) {
        try {
            const todos = JSON.parse(decodeURIComponent(c.substring(6)));
            todos.reverse().forEach(text => addToDo(text));
        } catch (e) {}
    }
}
}
