// Escreva um algoritmo que permita a leitura dos nomes de 10 pessoas e armazene os nomes
// lidos em um vetor. Após isto, o algoritmo deve permitir a leitura de mais 1 nome qualquer de
// pessoa (para efetuar uma busca) e depois escrever a mensagem ACHEI, se o nome estiver
// entre os 10 nomes lidos anteriormente (guardados no vetor), ou NÃO ACHEI caso contrário.

/*let frutas = ['banana', 'maçã', 'abacaxi', 'laramja'];
console.log(frutas[2])

/*for(let contador = 0; contador < 4; contador += 1){
    console.log(frutas[contador], contador);
}*/

/*for(let i = 0; i < frutas.length; i++) {
    console.log(frutas[i], i);
}*/

             //VERSÃO CORRIGIDA


function buscarNome(){

    
    let nomes = [];
    
    for(let i = 0; i < 10; i++) {
        
        nomes.push(window.prompt('Digite um nome'));
        //nomes [i] window.prompt('Digite um nome'));
    }
    console.log(nomes);

    const nomeBuscado = window.prompt('Digite o nome que deseja buscar');

     if(nomes.indexOf(nomeBuscado) >= 0){
   //if (nomes.includes(nomeBuscado)) {
    window.alert('Achei');
   } else {
    window.alert('Não Achei');
    //nomes.indexOf(nomeBuscado) Retorna -1 se for falso
   }
}


         //VERSÃO NÃO CORRIGIDA


/*function lerNome() {
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
    }*/
