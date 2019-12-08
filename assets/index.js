const newtodo = document.querySelector(`.new-todo`)
const todolist = document.querySelector(`todo-list`)

const createTodo = task => {
        const html = `
        <li class="todo-list-item">
        <span class="todo-list-item-text">${task}</span>
        <button type="button" onclick="textdelete()" i class="fas fa-trash" id="todo-list-item-trash"></i>
        </li> `;
        list.innerHTML+=html;
}
