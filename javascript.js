function fetchDataMain(){
    fetch("http://127.0.0.1:8000/").then(response => {
        return response.json();
    })
    .then(data => {
        document.querySelector("#Create").innerHTML = ``
        document.querySelector("#homepage").innerHTML = `
        <button onclick="fetchDataUsers()">Users</button>
        <button onclick="fetchDataContent()">Contents</button>
        `;
    })
}

function fetchDataContent(){
    fetch("http://127.0.0.1:8000/content/").then(response => {
        return response.json();
    })
    .then(data => {
        const html = data.map(content => {
            return `
            <h4>${content.id}</h4>
            <h5>Uploaded User ID - ${content.user_id}</h5>
            <img src = ${content.img}>
            <p>${content.caption}</p>`
        })
        .join("");
        document.querySelector("#Space").innerHTML = html;
        document.querySelector("#homepage").innerHTML = `
        <button onclick="fetchDataUsers()">Users</button>
        <a href="http://127.0.0.1:8000/content/"><button>Upload a post</button></a>
        `;
    })
}
    
function fetchDataUsers(){
    fetch("http://127.0.0.1:8000/users/").then(response => {
        return response.json();
    })
    .then(data => {
        const html = data.map(users => {
            return `<p>${users.id} - ${users.userName}</p>`
        })
        .join("");
        document.querySelector("#Space").innerHTML = "<h4>User ID - Username</h4>" + html;
        document.querySelector("#homepage").innerHTML = `
        <a href="http://127.0.0.1:8000/users/"><button>Update Users</button></a>
        <button onclick="fetchDataContent()">Contents</button>
        `;
    })
}
function popCreate(){
    document.querySelector("#homepage").innerHTML = ``
    document.querySelector("#Create").innerHTML = 
    `<form id = "form" style="border:1px solid #ccc">
     <div class="container"> 
     <h1>Sign Up</h1>
      <p>Please fill in this form to create an account.</p>
      <hr>
      <label for="userName"><b>UserName</b></label>
      <input id="userName" type="text" placeholder="Enter Username" name="userName" required>
      <label for="psw"><b>Password</b></label>
      <input id="password" type="password" placeholder="Enter Password" name="password" required>
      <div class="clearfix"><button type="button" class="cancelbtn">Cancel</button>
      <button onclick="postData()" type="submit" class="signupbtn">Sign Up</button>
      </div></div></form>`    
}

function postData(){
var form = document.getElementById('form');
form.addEventListener('submit', function(e){
    e.preventDefault();

    var uname = document.getElementById('userName').value;
    var pass = document.getElementById('password').value;

    fetch("http://127.0.0.1:8000/users/",{
        method: 'POST',
        body:JSON.stringify({
            userName: uname,
            password: pass
        }),
        headers:{
            "Content-Type":"application/json; charset = UTF-8"
        }
    })
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        document.querySelector("#homepage").innerHTML = `
        <button onclick="fetchDataUsers()">Users</button>
        <button onclick="fetchDataContent()">Contents</button>
        `;
        document.querySelector("#Create").innerHTML = `<h3> User Created Successfully</h3>`
    })
})
}



