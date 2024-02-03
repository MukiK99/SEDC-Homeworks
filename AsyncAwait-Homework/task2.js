let todoHolder = document.getElementById('todoHolder');
let userHolder = document.getElementById('userHolder');

async function getData(url) {
    try {
        let response = await fetch(url);
        let data = await response.json();
        return data;
    }
    catch (error) {
        console.log("Error", error.message);
    }
}

function showUser(user) {
    console.log("This is our user:", user);
    userHolder.innerHTML = `
    <h1>USER DATA</h1>
    <h2>Id:${user.id}</h2>
    <p>Name: ${user.name}</p>
    <p>Username: ${user.username}</p>
    <p>Email ${user.email}</p>
    <p>Address: ${user.adress}</p>
    `
    
}

function showTodo(todo) {
    console.log("Todo",todo);
    todoHolder.innerHTML = `
    <h1>TODO DATA</h1>
    <h2>Id:${todo.id}</h2>
    <p>Title: ${todo.title}</p>
    <p>Is completed: ${todo.completed}</p>
    
    `

}


async function renderTodo(userId, id) {
    let user = await getData(`https://jsonplaceholder.typicode.com/users/${userId}`);
    showUser(user);
    let response = await getData(`https://jsonplaceholder.typicode.com/todos/${id}`);
    showTodo(response);
    
}


renderTodo(1,1);