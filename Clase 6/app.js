function addUser() {


    let user = {
        username: document.getElementById("username").value,
        age: document.getElementById("age").value
    }


    if (localStorage.getItem("users") != null) {
        let users = JSON.parse(localStorage.getItem("users"))
        for (const i of users) {
            if (user.username == i.username && user.age == i.age) {
                alert("Su usuario esta repetido")
                return
            }
        }
    }


    if (localStorage.getItem("users") == null) {
        let users = []
        users.push(user)
        localStorage.setItem("users", JSON.stringify(users))
        console.log(users)
    } else {
        let users = JSON.parse(localStorage.getItem("users"))
        users.push(user)
        localStorage.setItem("users", JSON.stringify(users))
        console.log(users)
    }
    addHTML()
}


function addHTML() {
    let users = JSON.parse(localStorage.getItem("users"))
    let table = document.getElementById("tabla")

    table.innerHTML = ""

    for (let i = 0; i < users.length; i++) {
        let user = users[i]
        table.innerHTML += `
                <tr>
                    <td>${user.username}</td>
                    <td>${user.age}</td>
                </tr>`
    }

}
