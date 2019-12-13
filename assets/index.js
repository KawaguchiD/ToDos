//タスク機能の追加
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
      <span class="todo-list-item-text">${todoText}</span>
      <button  class="fas fa-trash delete" id="todo-list-item-trash"></i>
    `
    TodoListElement.appendChild(TodoListItemElement)
    // Inputの要素を空にする
    event.target.value = ''
  })
  //削除機能
  TodoListElement.addEventListener(`click`,event => {
      console.log("hoge")
          if (event.target.classList.contains('delete')){
        event.target.parentElement.remove();
  })
}
window.addEventListener('load', main)
