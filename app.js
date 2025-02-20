function calcularMedia() {
  let n1 = parseFloat(document.querySelector(`#nota_1`).value) || 0;
  let n2 = parseFloat(document.querySelector(`#nota_2`).value) || 0;
  let n3 = parseFloat(document.querySelector(`#nota_3`).value) || 0;
  let n4 = parseFloat(document.querySelector(`#nota_4`).value) || 0;

  let média = (n1 + n2 + n3 + n4) / 4;

  if (média >= 6) {
    document.querySelector(
      "#resposta"
    ).innerHTML = `Parabéns!!! Sua média é ${média}, logo você foi aprovado`;
  } else {
    média > 6;
    document.querySelector(
      "#resposta"
    ).innerHTML = `Que pena, sua média é ${média}, logo você foi reprovado`;
  }
}
function reiniciar() {
  document.querySelector(`#nota_1`).value = "";
  document.querySelector(`#nota_2`).value = "";
  document.querySelector(`#nota_3`).value = "";
  document.querySelector(`#nota_4`).value = "";
  document.querySelector(`#resposta`).innerHTML = "";
}

