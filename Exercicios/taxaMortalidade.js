function calcularTaxa(tipo,numNascidos, numObitos, numHabitantes) {
    let taxa = 0;

    switch(tipo) {
        case "natalidade":
            taxa = (numNascidos * 1000) / numHabitantes;
            break;
            default:
                console.log("Tipo inválido. Digite 'natalidade' ou 'mortalidade' .");
                return;
    }
    return taxa.toFixed(2);
}  
  
const tipo = prompt("Digite o tipo de taxa que deseja calcular (natalidade/mortalidade):").toLocaleUpperCase();
const numNascidos = parseInt(prompt("Digite o numero de nascidos"));
const numObitos = parseInt(prompt("Digite o numero de óbitos:"));
const numHabitantes = parseInt(prompt("Digite o numero de habitantes:"));

const taxa = calcularTaxa(tipo, numNascidos, numObitos, numHabitantes);
alert(`A taxa de ${tipo} é de ${taxa} por mil habitantes.`);
  
  
  
  
  // A taxa de natalidade e a taxa de mortalidade são indicadores estatísticos de fundamental importância por ajudar a compreender aquilo que os especialistas chamam de dinâmica populacional e a entender sua relação com variáveis que influenciam o desenvolvimento, como qualidade de vida, migrações, , fatores socioeconômicos e localização. Sabendo disso, crie um programa que calcule os dois indicadores utilizando o comando switch.



// Observação : A taxa de natalidade é calculada pela seguinte fórmula: taxa de natalidade = (número de crianças nascidas x 1000) / número de habitantes;
// Enquanto que, a taxa de mortalidade = (números de óbitos x 1000) /número de habitantes.

//olá!

//entrada de dados
// verificar o que o usuario vai querer calcular (natalidade ou mortalidade)
// determinar o número de crianças nascidas e o número de habitantes para natalidade
// determinar o número de óbitos e o número de habitantes para mortalidade

//processamento de dados
// realizar o calculo de natalidade e mortalidade 
// determinar com switch case se o usuario vai querer calcular natalidade ou mortalidade

//saída de dados
// imprimir na tela a taxa de mortalidade ou natalidade