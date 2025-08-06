/*****************************************************************************
 * Objetivo: Desenvolver uma aplicação para a empresa viva moda
 * Autor: Isabelle
 * Data: 05/08/2025
 * Versão: 1.0
 ******************************************************************************/

//function para calcular o montante final
function calcularMontante(capital, taxa, anual, tempo){
    
    le
    const taxaComposta = taxa / anual;
    const numeroDePeriodos = anual * tempo;
    const montante = capital * Math.pow((1 + taxaComposta), numeroDePeriodos);
    return montante;
}

module.exports = {
    calcularMontante
};
