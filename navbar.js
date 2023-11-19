let openBtn = document.querySelector("#openNav")
let closeBtn = document.querySelector("#closeNav")
let navbar = document.querySelector("#nav-screen")
let userIcon = document.querySelector("#perfil-img")
userIcon.src = "img/UserIcon.png"

function open(){
    navbar.style.display = "flex";
    openBtn.style.display = "none"
    closeBtn.style.display = "flex"
}
function close(){
    navbar.style.display = "none";
    openBtn.style.display = "flex"
    closeBtn.style.display = "none"
}
function autoOpen(){  
    navbar.style.display = "flex"
    openBtn.style.display = "none"
    closeBtn.style.display = "none"
}
function autoClose() {
    navbar.style.diplay = "none"
    openBtn.style.display = "flex"
    closeBtn.style.display = "flex"
}

openBtn.addEventListener("click", open, false)
closeBtn.addEventListener("click", close, false)
addEventListener("resize", (event) =>{event.target.innerWidth >= 1500 ? autoOpen() : autoClose()}, false)

