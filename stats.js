class Worker {
    constructor(name, func, id, pedidos, faltas, horas, obra){
        this.name = name
        this.func = func
        this.id = id
        this.pedidos = pedidos
        this.faltas = faltas
        this.horas = horas
        this.obra = obra
    }
    workerTag(){
        return `<li class="result-itens">
            <span class="result-item">${this.name}</span>
            <span class="result-item">${this.func}</span>
            <span class="result-item">${this.id}</span>
            <span class="result-item">${this.pedidos}</span>
            <span class="result-item">${this.faltas}</span>
            <span class="result-item">${this.horas}</span>
            <span class="result-item">${this.obra}</span>
            </li>`
    }
}
const workers = []
workers.push(new Worker("Rafael Santos", "Gestor", "3256", "Sim", "20", "7", "#15267"))
workers.push(new Worker("Lucas Silva", "Ala B", "4502", "Sim", "10", "13", "#15275"))
workers.push(new Worker("Lucas Almeida", "Ala A", "3257", "Sim", "15", "24", "#15150"))
workers.push(new Worker("Guilherme Oliveira", "Ala C", "4057", "Não", "5", "12", "#15783"))

for (let i = 0; i < workers.length; i++) { 
    document.querySelector("#result-list").innerHTML += workers[i].workerTag()
}
