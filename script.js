const loginBtn = document.getElementById("login")
const registerBtn = document.getElementById("register")
const user =[]
function login(){
let user = JSON.parse(localStorage.getItem("user"))
let username = prompt("username :")
let password = prompt("password :")
if(user.username == username && user.password ==password){
    alert(`Welcome ${user.name}`)
}
else{
    console.log("username ve ya password yalnisdir");
}
}
function register(){
    let username = prompt("username")
    let name = prompt("name")
    let password = prompt("password")
    let confirmPassword = prompt("confirmPassword")
    if(username != "" && name != "" && password != "" && confirmPassword != "")
    if(password === confirmPassword){
        let newUser = {
         name: name,
         username:username,
         password: password,

        }
        localStorage.setItem("user", JSON.stringify(newUser))
    }
    else{
        alert("Password duzgun deyil")
    }
    else{
        alert ("Bos input saxlanila bilmez")
    }
}
registerBtn.addEventListener("click", register)
loginBtn.addEventListener("click", login)