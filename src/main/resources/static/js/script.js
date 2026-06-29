const API_KEY = "my-secret-key";

function showRegister() {
    document.getElementById("registerForm").style.display = "block";
    document.getElementById("loginForm").style.display = "none";
}

function showLogin() {
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
}


function register(){

fetch("/auth/register",{

method:"POST",

headers:{
"Content-Type":"application/json",
"API-KEY":API_KEY
},

body:JSON.stringify({

username:document.getElementById("username").value,

password:document.getElementById("password").value

})

})

.then(res=>res.text())

.then(data=>alert(data));

}

function login(){

fetch("/auth/login",{

method:"POST",

headers:{
"Content-Type":"application/json",
"API-KEY":API_KEY
},

body:JSON.stringify({

username:document.getElementById("loginUsername").value,

password:document.getElementById("loginPassword").value

})

})

.then(res=>res.text())

.then(data => {
    alert(data);
    window.location.href = "home.html";
});

}