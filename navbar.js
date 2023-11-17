let openBtn = document.querySelector("#openNav")
let closeBtn = document.querySelector("#closeNav")
let navbar = document.querySelector("#nav-screen")

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

openBtn.addEventListener("click", open, false)
closeBtn.addEventListener("click", close, false)

