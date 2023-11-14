export default function ehUmCPF(campo) {
  const cpf = campo.value.replace(/\.|-/g, "");

  if (
    validaNumerosRepetidos(cpf) ||
    validaPrimeiroDigito(cpf) ||
    validaSegundoDigito(cpf)
  ) {
    console.log("CPF NAO EXISTE");
  } else {
    console.log("CPF EXISTE");
  }
}

function validaNumerosRepetidos(cpf) {
  let numerosRepetidos = [];
  for (let i = 0; i < 10; i++) {
    let seq = [i, i, i, i, i, i, i, i, i, i, i];
    numerosRepetidos.push(seq.join(""));
  }
  return numerosRepetidos.includes(cpf);
}

function validaPrimeiroDigito(cpf) {
  let soma = 0;
  let multiplicador = 10;

  for (let tamanho = 0; tamanho < 9; tamanho++) {
    soma += cpf[tamanho] * multiplicador;
    multiplicador--;
  }

  soma = (soma * 10) % 11;

  if (soma == 10 || soma == 11) {
    soma = 0;
  }

  return soma != cpf[9];
}

function validaSegundoDigito(cpf) {
  let soma = 0;
  let multiplicador = 11;

  for (let tamanho = 0; tamanho < 10; tamanho++) {
    soma += cpf[tamanho] * multiplicador;
    multiplicador--;
  }

  soma = (soma * 10) % 11;

  if (soma == 10 || soma == 11) {
    soma = 0;
  }

  return soma != cpf[10];
}
