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

  if (formula < 18) {
    classificacao = "Magreza";
  }
  if (formula >= 18.5 || formula <= 24.9) {
    classificacao = "Normal";
  }
  if (formula >= 25 && formula <= 29.9) {
    classificacao = "Sobrepeso";
  }
  if (formula >= 30 && formula <= 39.9) {
    classificacao = "Obesidade";
  }
  if (formula > 40) {
    classificacao = "Obesidade Grave";
  }

  classificacaoPessoa.innerHTML = classificacao;
}
