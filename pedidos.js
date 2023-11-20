let list = document.querySelector("#cart-list")
let screen = document.querySelector("#content-main")
const baseScreen = screen.innerHTML
let cartList = []

function addOrRemove(product){
    let found = false;
    for (let i = 0; i < cartList.length; i++) {
        if (product === cartList[i]) {
            cartList.splice(i, 1)
            found = true
            document.querySelector(`#${product}`).src = `img/Food/${product}.png`
            console.log("removed")
            break
        }
    }
    if (!found){
        cartList.push(product)
        console.log(product)
        document.querySelector(`#${product}`).src = `img/Food/${product}Remove.png`
    }
}
function printList() {
    list.innerHTML = null
    for(let i = 0; i < cartList.length; i++){
        list.innerHTML += `<li class="list-item">${cartList[i]}</li>`
    }
}
function handleAdd(product){
    addOrRemove(product)
    printList()
}
function handleCancel(){
    cartList = []
    printList()
}
function handleConfirm(){
    screen.innerHTML = "</div><div id='checked'><img id='checked-icon' src='img/Checked.png'><h1 id='checked-text'>Pedido realizado com sucesso</h1></div>"
    setTimeout(() =>{screen.innerHTML = baseScreen}, 5000)
}