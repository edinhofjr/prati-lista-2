import prompt from './prompt.js'

function ehDataValida(dia,mes,ano) {
  dia = Number(dia);
  mes = Number(mes);
  ano = Number(ano);
  
  if (mes < 0 || mes > 12) return false;
  if (ano < 0) return false;
  
  return dia > 0 && dia <= meses[mes] + ((ano_bissexto(ano) && mes === 2) ? 1 : 0);
}

const meses = {
  1: 31,
  2: 28, 
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31
}

const ano_bissexto = (ano) => {
  return ano % 4 === 0 && ((ano % 100 != 0) || (ano % 400 === 0));
}
