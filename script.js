function inserirNome () {
    let nomeUsuario = prompt("Qual o seu nome");
    let elemento = document.querySelector("#nome-usuário");
    elemento.textContent = nomeUsuario;
}
inserirNome();

let linguagens = ["JavaScript", "Python", "C++"];
console.log(linguagens[1])

const item = document.querySelector("#lista");
//item.textContent = linguagens[1];
item.textContent = `${linguagens[0]}, ${linguagens[1]} e ${linguagens[2]}`;

let aluno { 
    nome: Gabriel
    idade: 13,
    anoLetivo: "2ªsérie",
    materiasFavoritas: ["Geografia","Programação","Arte"]
}
const objeto = document.querySelector("#aluno");
objeto.textContent = aluno1.idade;
