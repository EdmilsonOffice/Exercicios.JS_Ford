//const ladoA = prompt("Informe a medida do primeiro lado")
//const ladoB = prompt("Informe a medida do segundo lado")
//const ladoC = prompt("Informe a medida do terceiro lado")

//if (ladoA === ladoB && ladoB === ladoC){
 //alert("Triangulo Equilátero ");
//} else if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC) {
  //  alert("Triangulo Escaleno")
//} else {
  //  alert("Triangulo isósceles")
//}

const ld1 = 10
const ld2 = 90
const ld3 = 30

if (ld1 == ld2 && ld2 == ld3) {
    console.log("Triangulo é Equilatero pois tem 3 lados iguais");
}
else if (ld1 == ld2 || ld2 == ld3 || ld1 == ld3) {
    console.log("Triangulo é Isósceles pois tem 2 lados iguais");

}
else {
    console.log("Triangulo é Escaleno pois possui todos os lados diferentes");
}















// Escreva     um     programa que leia     as     medidas     dos     lados     de     um     triângulo     e    escreva    se    ele    é    Equilátero,    Isósceles    ou  Escaleno. 
// Sendo    que:    
// − Triângulo    Equilátero:    possui    os    3    lados    iguais.
// − Triângulo    Isóscele:    possui    2    lados    iguais.
// − Triângulo    Escaleno:    possui    3    lados    diferentes.




//entrada de dados
// = informar as 3 medidas de um triangulo

//processamento
// = verificar se o triangulo tem os 3 lados igual ou 2 lados iguais ou os 3 lados diferentes
// = para isso temos que utilizar os operadores lógicos && || ! 

//saida de dados
// = informar se o triangulo é equilátero, escaleno ou isócele
// = motrar a saída do programa na console
