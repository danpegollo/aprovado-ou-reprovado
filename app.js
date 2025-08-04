function pegarInput() {
  const n1 = parseFloat(document.querySelector(`#nota_1`).value);
  const n2 = parseFloat(document.querySelector(`#nota_2`).value);
  const n3 = parseFloat(document.querySelector(`#nota_3`).value);
  const n4 = parseFloat(document.querySelector(`#nota_4`).value);
  return [n1, n2, n3, n4];
}
function calcularMedia() {
  const notas = pegarInput();
  const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

  if (media >= 6) {
    document.querySelector(
      "#resposta"
    ).innerHTML = `Parabéns!!! Sua média é ${media.toFixed(
      2
    )}, logo você foi aprovado`;
  } else {
    document.querySelector(
      "#resposta"
    ).innerHTML = `Que pena, sua média é ${media.toFixed(
      2
    )}, logo você foi reprovado`;
  }
}
function reiniciar() {
  document.querySelector(`#nota_1`).value = "";
  document.querySelector(`#nota_2`).value = "";
  document.querySelector(`#nota_3`).value = "";
  document.querySelector(`#nota_4`).value = "";
  document.querySelector(`#resposta`).innerHTML = "";
}
