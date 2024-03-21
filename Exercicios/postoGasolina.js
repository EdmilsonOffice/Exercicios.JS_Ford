


function calculoDesconto(tipoCombustivel, quantidade) {
let desconto = 0; 
switch (tipoCombustivel) {
    case A:
        if (quantidade <=20) {
            desconto = 0.03;
        }
        else {
            desconto = 0.05;
        }
        break;
        case G:
            if (quantidade <=20) {
                desconto = 0.04;
            }
            else {
                desconto = 0.06;
            }
            break;
            //default:
               // alert("Tipo de combustivel invalido!");
                //return;
            }
            return desconto;   
        }
        const desconto = calculoDesconto(tipoCombustivel, quantidade);
        const valorTotal = quantidade * precoPorLitro * (1 - desconto);
        return valorTotal.toFixed(2)
        
        const tipoCombustivel = prompt("Digite o tipo de combustivel (A-álcool, G-gasolina):").toUpperCase();
        
        const quantidade = parseFloat(prompt("Digite a quantidade de litros:"));
        
        const valorAPagar = calculoValorAPagar(tipoCombustivel, quantidade);
        
        alert(`valor a ser pago: R$ ${valorAPagar}`);
            function calculoValorAPagar(tipoCombustivel, quantidade) {
                let precoPorLitro = 0; 
                switch (tipoCombustivel) {
                    case A:
                        precoPorLitro = 4.9;
                        break;
                        case G:
                            precoPorLitro = 5.3;
                            break
                            default:
                                alert("Tipo de combustivel invalido!");
                                return;
                                
                                
                            }
            }
                    


                        // Um posto está vendendo combustíveis com a seguinte tabela de descontos:
                        
                        
                        
// Álcool:
// . até 20 litros, desconto de 3% por litro Álcool
// . acima de 20 litros, desconto de 5% por litro

// Gasolina:
// . até 20 litros, desconto de 4% por litro Gasolina
// . acima de 20 litros, desconto de 6% por litro

// Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado
// da seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente
// sabendo-se que o preço do litro da gasolina é R$ 5,30 e o preço do litro do álcool é R$ 4,90.

// Dica: utilize switch case, operadores lógicos e relacionais e estrutura de condição para otimizar o algorítimo.


//entrada de dados
// = selecionar se deseja abastecer com alcool ou com gasolina;
// = selecionar a quantidade de litros que o usuário deseja;

//processamento de dados
// = switch case para gasolina ou alcool

//saida de dados
// = mostrar a porcentagem de desconto se for alcool ou se for gasolina