const alturaUsuario = document.getElementById("altura");
const pesoUsuario = document.getElementById("peso");
const calculoBtn = document.getElementById("calculo");
const resultado = document.getElementById("resultado");
const classificacaoPessoa = document.getElementById("classificacao");

calculoBtn.addEventListener("click", calculoIMC);

function calculoIMC() {
  const altura = parseFloat(alturaUsuario.value);
  const peso = parseFloat(pesoUsuario.value);
  let classificacao;

  const formula = peso / (altura * altura);
  resultado.innerHTML = formula.toFixed(1);

  if (formula < 18.5) {
    classificacao = "Magreza";
  } else if (formula < 24.9) {
    classificacao = "Normal";
  } else if (formula < 29.9) {
    classificacao = "Sobrepeso";
  } else if (formula < 39.9) {
    classificacao = "Obesidade";
  } else if (formula > 39.9) {
    classificacao = "Obesidade Grave";
  }

  classificacaoPessoa.innerHTML = classificacao;
}
