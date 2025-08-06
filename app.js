/*****************************************************************************
 * Objetivo: Desenvolver uma aplicação para a empresa viva moda
 * Autor: Isabelle
 * Data: 05/08/2025
 * Versão: 1.0
 ******************************************************************************/
const MESSAGE_ERROR_EMPTY         = 'ERRO: Não foi possível processar as informações, pois existem campos que não foram preenchidos!'
const MESSAGE_ERROR_OUT_OF_RANGE  = 'ERRO: Não é possível receber valores menores que 0!'
const MESSAGE_ERROR_NAN           = 'ERRO: Não é possível processar o calculo da média com caracteres. Deve-se entrar apenas com números entre 0 e 10!'

//Import da biblioteca para calcular Montante
const calcularMontante = require('./modulo/calculo.js')

//Import da biblioteca para permitir a entrada de dados pelo terminal
var readline = require('readline')

//Interface de entrada e saída de dados no terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Nome da empresa
const nomeEmpresa = "Viva Moda";

//Entrada de dados do Cliente
entradaDeDados.question('Digite seu nome:', function(nome){
    let nomeCliente = String(nome).toUpperCase()
    
    //Entrada de dados do Produto
    entradaDeDados.question('Digite o nome do Produto que deseja comprar:', function(produto){
        let nomeProduto = String(produto).toUpperCase()

        //Entrada de dados Capital Inicial
        entradaDeDados.question('Digite o capital inicial:', function(capital){
            let dados1 = capital

            //Entrada de dados Taxa de juros
        entradaDeDados.question('Insira a taxa de juros anual em percentual:', function(taxa){
            let dados2 = taxa

            //Entrada de dados Juros compostos por ano
        entradaDeDados.question('Insira o número de vezes que os juros são compostos por ano:', function(anual){
            let dados3 = anual

             //Entrada de dados Juros em anos
        entradaDeDados.question('Insira o tempo em anos:', function(tempo){
            let dados4 = tempo

            //Validação de entrada vazia
            if(nomeCliente == '' || nomeProduto == '' || dados1 == '' || dados2 == '' || dados3 == '' || dados4 == ''){
                console.log(MESSAGE_ERROR_EMPTY)
            
                //Validação de valores
            }else if( Number (dados1) <0 ||
                      Number (dados2) <0 ||
                      Number (dados3) <0 ||
                      Number (dados4) <0 
                    ){
                console.log(MESSAGE_ERROR_OUT_OF_RANGE)
                
                
            
                //Conversão de String para Números
                let principal = dados1;
                let taxaAnual = parseFloat(dados2);
                let composicaoAnual = parseInt(dados3);
                let tempoEmAnos = parseInt(dados4);
               
                //Validação para bloquear a entrada de letras
             }else if(isNaN(capital) || isNaN(taxa) || isNaN(anual) || isNaN(tempo)){
                console.log(MESSAGE_ERROR_NAN)
            }else{   
                let montanteFinal = calcularMontante(capital, taxa, anual, te);
              

                console.log(`**********************************${nomeEmpresa}**********************************
                            Muito obrigado por realizar a sua compra Conosco Sr(a)${nomeCliente}.
                            A compra do produto ${nomeProduto}, tem um valor de: ${dados1}.
                            A sua compra será parcelada em  ${dados3} vezes e o Sr(a) pagará ${montanteFinal}.
                            ***********************************************************************************`)

            }

                 })//Fecha a entrada Juros em anos
               })//Fecha a entrada Juros compostos por ano
            })//Fecha a entrada Taxa de juros
        })//Fecha a entrada Capital Inicial
    })//Fecha a entrada dados do Produto
})//Fecha a entrada dados do Cliente
