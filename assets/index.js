
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
        <input class="check" type="checkbox">
        <span class="todo-list-item-text" id="todo-list-item">${todoText}</span>
        <button  class="fas fa-trash deleteButton" id="todo-list-item-trash">
    `
    TodoListElement.appendChild(TodoListItemElement)
    // Inputの要素を空にする
    event.target.value = ''
  })
  //削除機能
  TodoListElement.addEventListener(`click`, event => {
      if(event.target.classList.contains(`deleteButton`)){
        event.target.parentElement.remove();
        }})
  //チェックボックスがチェックされているか否か
  // var checkbox = Boolean(document.querySelector(`checkbox`))
  // if(checkbox) {
  //   console.log("checked")
  // } else {
  //   console.log("not checked")
  // }

//ストレージ上に保存
localStorage.setItem(`hoge`,TodoListElement)
}
window.addEventListener('load', main)
