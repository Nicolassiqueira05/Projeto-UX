const userInput = document.querySelector("#user-input")
const passwordInput = document.querySelector("#password-input")

let contas = [
    {
        user: "nicolas",
        password: 12345,
    },
    {
        user: "teste",
        password: 12345,
    },
    {},
]

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
        }else if(password == contas[i].password){
            loginState[1] = true
        }
        i++
    }
    if (loginState[0] == true && loginState[1] == true) {
        window.location.href = "loggedIndex.html"
    }else if(loginState[0] == true && loginState[1] == false){
        window.alert("Senha Incorreta")
    }else if(loginState[0] == false){
        window.alert("Usuario não encontrado")
    }
    return loginState
}