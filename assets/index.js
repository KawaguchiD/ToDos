
const GetMethod = async(url = "https://todolist-team1.deno.dev/api/todo") => {
  const fetcher = await fetch(url, {
    method: "GET"
  })
  .catch(error => {
    console.error('通信に失敗しました', error);
  });
  const toJson = await fetcher.json();
  return toJson;
}

const DeleteMethod = async(url, id) => {
  const Delete = await fetch(`${url}/${id}`, {
    method: "DELETE",
    mode: "cors",
  })
  return Delete
}

const POSTMethod = async(url = "https://todolist-team1.deno.dev/api/todo/", text) => {
  const Post = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(text),
    mode: "cors"
  })  
  .then(response => {
    if (!response.ok) {
      console.error('サーバーエラー');
    }
    // ここに成功時の処理を記述
  })
  .catch(error => {
    console.error('通信に失敗しました', error);
  });
  return Post
}
 
// 追加機能
const AddTask = (Elm1, Elm2, id) => {
  Elm1.addEventListener('keyup', event => {
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
        TodoListItemElement.setAttribute = id
        TodoListItemElement.innerHTML = `
            <input class="check" type="checkbox">
            <span class="todo-list-item-text" id="todo-list-item">${todoText}</span>
            <button class="fas fa-trash deleteButton" id="todo-list-item-trash">
        `
        Elm2.appendChild(TodoListItemElement)

        // idをあとで振られるpost
        const TodoArr = {id: "", name: todoText, state: "open"}
        POSTMethod("https://todolist-team1.deno.dev/api/todo", TodoArr)

        // Inputの要素を空にする
        event.target.value = ''

})}
// 一度目の描画
const FirstListRendering = (listdata, parentElm) => {
  // TodoListItemElement.className = 'todo-list-item'
  listdata.forEach(data => {
    const TodoListItemElement = document.createElement('li')
    TodoListItemElement.className = 'todo-list-item'

    TodoListItemElement.innerHTML = `
      <input class="check" type="checkbox" ${data.state === "open" ? "checked" : ""}>
      <span class="todo-list-item-text" id="todo-list-item">${data?.name}</span>
      <button class="fas fa-trash deleteButton todo-list-item-trash" id="${data.id}">
    `
    parentElm.appendChild(TodoListItemElement)
  })
}

const main = async() => {
    const TodoInputElement = document.querySelector('.new-todo')
    const TodoListElement = document.querySelector('.todo-list')
    const isChecked = document.querySelector(`.checkbox`)
    const TodolistItem = document.querySelector(`.todo-list-item`)
    //fetcher
    const fetchData = await GetMethod();
    console.log(fetchData)
    // firstRender
    // FirstListRendering(data, TodoListElement)
    FirstListRendering(fetchData, TodoListElement)
    // 追加機能(Inputの要素 ,親の要素)
    AddTask(TodoInputElement, TodoListElement)

  //削除機能
  TodoListElement.addEventListener(`click`, event => {
      const deleteElm = document.querySelector('.deleteButton')
      if(event.target.classList.contains(`deleteButton`)){
        event.target.parentElement.remove();
      }
      // DeleteMethod("https://todolist-team1.deno.dev/api/todo/", deleteElm.id)
  })
  //チェックボックスがチェックされているか否か
  var checkbox = Boolean(isChecked)
  isChecked.addEventListener('click', () => {
    if(checkbox) {
      TodolistItem.classList.add(`checked`)
    }
  })
}
window.addEventListener('load', main)
