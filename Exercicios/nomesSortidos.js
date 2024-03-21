// Escreva um algoritmo que permita a leitura dos nomes de 10 pessoas e armazene os nomes
// lidos em um vetor. Após isto, o algoritmo deve permitir a leitura de mais 1 nome qualquer de
// pessoa (para efetuar uma busca) e depois escrever a mensagem ACHEI, se o nome estiver
// entre os 10 nomes lidos anteriormente (guardados no vetor), ou NÃO ACHEI caso contrário.

function lerNome() {
    const nome = prompt("Digite um nome:");
    return nome;
}
function buscarNome(nome, vetor) {
    for (let i = 0; i < vetor.length; i++)
    {
        if (nome === vetor [i]){
            return true;
        }
    }
    return false;
}

    const nomes = [];
    for (let i = 0; i <10; i++) {
        nomes.push(lerNome());
    }

    const nomeBuscado = lerNome();
    const nomeEncontrado = buscarNome(nomeBuscado, nomes);

    if (nomeEncontrado) {
        alert("Achei");
    }
    else {
        alert("Não Achei");
    }
