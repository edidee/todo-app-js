



// create a new list item in the DOM

// function renderTodo(todo){

//     const item = document.querySelector(`[data-key='${todo.id}']`);

//     const isChecked = todo.checked ? 'done' : '';
//     const node = document.createElement('li');

//     node.setAttribute('class', `{$isChecked}`);

//     node.setAttribute('data-key', todo.id)

//     node.innerHTML =
//         `
//         <input id="${todo.id}" type=checkbox>
//         <label for="${todo.id}" class="tick js-tick"></label>

//         <span>${todo.text}</span>

//         <button class="delete-todo js-delete-todo">x</button>
//         `;


//     if (item){
//         list.replaceChild(node, item);
//     } else {

//         list.append(node);
//     }
    
// }

// // To create an object of task and push to an Array

// function addTodo(text){
    
//     const todo = {
//         text,
//         checked: false,
//         id: Date.now()
//     };

//     todoArray.push(todo);
//     renderTodo(todo)

// }

// // handle the submit button
// form.addEventListener('submit', event => {
//     event.preventDefault();

//     let text = input.value.trim();
//     if(text !== ''){
//         addTodo(text);

//         input.value = '';
//     }
// });



// // mark as a task
// list.addEventListener('click', event => {
//     if(event.target.classList.contains('js-tick')){
//         const itemKey = event.target.parentElement.dataset.key;
//         toggleDone(itemKey);
//     }
// });

// function toggleDone(key){
//     const index = todoItems.findIndex(item => item.id === Number(key));
//     todoItems[index].checked = !todoItems[index].checked;
//     renderTodo(todoItems[index]);
// }
// // delete item

// const deleteItem = document.querySelector('.delete-todo');
























let input = document.querySelector(".mainInput");
let list = document.querySelector(".taskList");

let form = document.querySelector("form");
let btn = document.querySelector('.btn');

let todoArray = [];
let getTodo = localStorage.getItem('todo');

if(getTodo) {
    let todos = JSON.parse(getTodo);
    todos.forEach((todo, key) => {
        let task = todo;

        // create a new list element
        let newList = document.createElement("li");
        let listText = document.createTextNode(task);
        // newList.className = " checked"
        newList.appendChild(listText);
            
         // create a delete button
        let eachTask = document.createElement('SPAN');
        let textTask = document.createTextNode("x");
        eachTask.className = "close"
        eachTask.appendChild(textTask);
        newList.appendChild(eachTask)
        list.appendChild(newList);
        input.value = '';

        //event handler for delete button
        eachTask.addEventListener('click', function() {
            todos.splice(key, 1);
            window.localStorage.setItem('todo', JSON.stringify(todos));
            newList.remove();
            location.reload();
        });

    })
}


btn.addEventListener('click', function(e){
    e.preventDefault();

    let task = input.value;
    

    if (input.value === ""){
        alert("You have to input a task")
        return false
    }
            
    if(getTodo) {
        let todos = JSON.parse(getTodo);
        todos.push(task);
        window.localStorage.setItem('todo', JSON.stringify(todos));

    }else {
        
    // Save to local storage
    todoArray.push(task);
    window.localStorage.setItem('todo', JSON.stringify(todoArray));
    }

    location.reload();

        
    });

    // Add a "checked" symbol when clicking on a list item

list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
});

    
