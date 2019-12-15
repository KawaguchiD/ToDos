
const main = () => {
    const TodoInputElement = document.querySelector('.new-todo')
    const TodoListElement = document.querySelector('.todo-list')
    
    TodoInputElement.addEventListener('keyup', event => {
    // Enter Key以外が押された時は何もしない
    if (event.key !== 'Enter') {
      return
    }
    // Inputにテキストが入力されていない時は何もしない
    if (event.target.value === '') {
      return
    }
    // 日本語変換が完了していない時は何もしない
    if (event.isComposing) {
      return
    }
    // Enter Keyが押され、Inputにテキストが入力されている時の処理
    const todoText = event.target.value
    const TodoListItemElement = document.createElement('li')
    TodoListItemElement.className = 'todo-list-item'
    TodoListItemElement.innerHTML = `
      <li id="todo-list-item" class="todo-list">
        <span class="todo-list-item-text" id="todo-list-item">${todoText}</span>
        <button  class="fas fa-trash" id="todo-list-item-trash">
      </li>
    `
    TodoListElement.appendChild(TodoListItemElement)
    // Inputの要素を空にする
    event.target.value = ''
  })
  //削除機能
  const deleteButton = document.getElementById(`todo-list-item`)
  TodoListElement.addEventListener(`click`,event => {
      console.log("hoge")
      if(event.target.classList.contains(`hoge`)){
        console.log("OK")
        deleteButton.parentElement.remove();
  }
})
}
window.addEventListener('load', main)
