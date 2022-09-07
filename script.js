var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);

  var resultado;

  if (chute == numeroSecreto) {
    resultado = "Acertou";
  } else if (chute > 10 || chute < 0) {
    resultado = "O valor deve ditar um valor entre 0 e 10";
  } else {
    resultado = "Errou";
  }

  var valorResultado = document.getElementById("resultado");
  valorResultado.innerHTML = resultado;
}
