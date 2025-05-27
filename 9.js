const pares_objetos = (pares) => {
    const resultado = {};
    for (let i = 0; i < pares.length; i++) {
        const par = pares[i];
        if (par.length === 2) {
        resultado[par[0]] = par[1];
        }
    }
    return resultado;
}

const objeto_par = (obj) => {
    const resultado = [];
    for (const chave in obj) {
        if (obj.hasOwnProperty(chave)) {
            resultado.push([chave, obj[chave]]);
        }
    }
    return resultado;
}




const pares = [['nome', 'João'], ['idade', 30], ['cidade', 'São Paulo'], ['estado', 'SP']];
const resultado = pares_objetos(pares);
console.log(resultado);

const obj = { nome: 'Maria', idade: 25, cidade: 'Rio de Janeiro', estado: 'RJ' };
const resultado_objeto = objeto_par(obj);
console.log(resultado_objeto);
