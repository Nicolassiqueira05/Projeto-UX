const userInput = document.querySelector("#user-input")
const passwordInput = document.querySelector("#password-input")
const remember = document.querySelector("#remember")

const ls = localStorage

let contas = [
    {
        user: "nicolas",
        password: 12345,
    },
    {
        user: "teste",
        password: 12345,
    },
    {
        user: "gustavo",
        password: 123456,
    },
]

function loadStorage(){
    if (ls.getItem("user") != null) {
        let data = JSON.parse(ls.getItem("user"))
        userInput.value = data[0]
        passwordInput.value = data[1]
    }
}
function setStorage(){
    let user = []
    user[0] = userInput.value
    user[1] = passwordInput.value
    ls.setItem("user", JSON.stringify(user))
}

function getInputValues(){
    let result = {
        user: userInput.value,
        password: passwordInput.value,
    }
    return result
}

function login({user, password}){
    let i = 0
    let loginState = [
        false,
        false,
    ]
    while(i < contas.length){
        if (user == contas[i].user){
            loginState[0] = true
            if (password == contas[i].password) {
                loginState[1] = true
            }
        }
        i++
    }

    if (remember.checked == true) {
        setStorage()
    }

    if (loginState[0] == false){
        window.alert("Usuário não encontrado")
    }else if(loginState[0] == true && loginState[1] == false){
        window.alert("Senha incorreta")
    }else if(loginState[0] == true && loginState[1] == true){
        window.location.href = "./loggedindex.html"
    }

    return loginState
}

loadStorage()
