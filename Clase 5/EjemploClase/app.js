document.getElementById("formulario").addEventListener("submit", login)
function login() {
    const email = document.getElementById("correo").value
    const password = document.getElementById("contra").value

    const users = [
        {
            email: "correo1@gmail.com",
            password: "123"
        }, {
            email: "correo2@gmail.com",
            password: "contra"
        },
        {
            email: "correo3@gmail.com",
            password: "password"
        }
    ]

    //Ambas opciones estan funcionales, si desean probar la segunda 
    //comenten primero la opcion 1 

    //Opcion 1
    for (let i = 0; i < users.length; i++) {
        if (email == users[i].email && password == users[i].password) {
            alert("Bienvenido!!!")
            break
        }
        if (users.length === (i + 1)) {
            alert("Correo o contraseña incorrecta")
        }

    }

    /*
    //Opcion 2
    let incorrect = true
    for (const user of users) {
        if (email == user.email && password == user.password) {
            alert("Bienvenido!!!")
            incorrect = false
            break
        }
    }

    if (incorrect) {
            alert("Correo o contraseña incorrecta")
    }*/

}