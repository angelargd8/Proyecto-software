let btnIngreso = document.getElementById('btnIngreso')

//btnIngreso.addEventListener("click",accederUsuario)

let form = document.getElementById('formIngresar')

form.addEventListener("submit",function(event){
    event.preventDefault()

    let username = document.getElementById('username').value
    let password = document.getElementById('password').value

    fetch('http://127.0.0.1:8000/users')

    console.log(username, password)
})

