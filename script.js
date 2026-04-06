const form = document.getElementById("formDoacao");
const mensagem = document.getElementById("mensagem");
const lista = document.getElementById("lista");

let doadores = [];

form.addEventListener("submit", function(e) {
    e.preventDefault();

    mensagem.textContent = "";

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let idade = document.getElementById("idade").value.trim();
    let peso = document.getElementById("peso").value.trim();
    let tipoSanguineo = document.getElementById("tipoSanguineo").value;
    let telefone = document.getElementById("telefone").value.trim();
    let cidade = document.getElementById("cidade").value.trim();
    let estado = document.getElementById("estado").value.trim();



    if (!nome || !email || !idade || !peso || !tipoSanguineo || !telefone || !cidade || !estado) {
        mensagem.textContent = "Todos os campos são obrigatórios!";
        return;
    }

    if (nome.split(" ").length < 2) {
        mensagem.textContent = "Digite nome e sobrenome!";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        mensagem.textContent = "Email inválido!";
        return;
    }

    if (idade < 16) {
        mensagem.textContent = "Idade mínima é 16 anos!";
        return;
    }

    if (peso < 50) {
        mensagem.textContent = "Peso mínimo é 50kg!";
        return;
    }

    if (!/^[0-9]+$/.test(telefone)) {
        mensagem.textContent = "Telefone deve conter apenas números!";
        return;
    }
    let doador = {
        nome: nome,
        email: email,
        idade: idade,
        peso: peso,
        tipoSanguineo: tipoSanguineo,
        telefone: telefone,
        cidade: cidade,
        estado: estado
    };

    doadores.push(doador);

    console.log(doadores);

    mensagem.style.color = "green";
    mensagem.textContent = "Cadastro realizado com sucesso!";

    atualizarLista();

    form.reset();
});

function atualizarLista() {
    lista.innerHTML = "";

    doadores.forEach(d => {
        lista.innerHTML += `
            <p>
                <strong>${d.nome}</strong> - ${d.tipoSanguineo} - ${d.cidade}/${d.estado}
            </p>
        `;
    });
}