let todoHolder = document.getElementById('todoHolder');``

async function getTodo(url){
   try {
    let response = await fetch(url);
    let data = await response.json();
    return data;
   } 
   catch(error) {
    console.log("Error",error.message);
   }
}



function showTodo(todo){
    console.log(todo);
    todoHolder.innerHTML = `
    <h1>User id:${todo.userId}</h1>
    <p>Id: ${todo.id}</p>
    <p>Title: ${todo.title}</p>
    <p>Is completed: ${todo.completed}</p>
    
    `
}

async function renderTodo(){
    let response = await getTodo('https://jsonplaceholder.typicode.com/todos/1');
    showTodo(response);
}

renderTodo();