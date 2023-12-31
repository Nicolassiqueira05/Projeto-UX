const userInput = document.querySelector("#user-input")
const passwordInput = document.querySelector("#password-input")
const remember = document.querySelector("#remember")

const ls = localStorage

let contas = [
    {
        user: "teste",
        password: "teste",
    },
    {
        user: "Teste",
        password: "teste",
    },
    {
        user: "teste",
        password: "Teste",
    },
    {
        user: "Teste",
        password: "Teste",
    }
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
        window.alert("Usuário não encontrado ")
        window.alert("Tente Usuário e Senha 'teste'")
    }else if(loginState[0] == true && loginState[1] == false){
        window.alert("Tente Usuário e Senha 'teste'")
    }else if(loginState[0] == true && loginState[1] == true){
        window.location.href = "./dashboard.html"
    }

    return loginState
}

loadStorage()
