const multiplicar = async (base) => {
  let salida = `<table><tr><th>Base</th><th>x</th><th>Resultado</th></tr>`;

  for (let i = 1; i <= 10; i++) {
    const resultado = base * i;
    salida += `<tr><td>${base}</td><td>${i}</td><td>${resultado}</td></tr>`;
  }

  salida += '</table>';

  try {
    return salida;
  } catch (error) {
    throw error;
  }
};

module.exports = { multiplicar };
