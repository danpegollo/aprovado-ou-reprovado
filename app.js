function pegarInput() {
  const n1 = parseFloat(document.querySelector(`#nota_1`).value);
  const n2 = parseFloat(document.querySelector(`#nota_2`).value);
  const n3 = parseFloat(document.querySelector(`#nota_3`).value);
  const n4 = parseFloat(document.querySelector(`#nota_4`).value);
  return [n1, n2, n3, n4];
}
function calcularMedia() {
  const notas = pegarInput();
  const notaInvalida = notas.some(
    (nota) => isNaN(nota) || nota < 0 || nota > 10
  );
  if (notaInvalida) {
    document.querySelector("#resposta").innerHTML =
      "Por favor, insira apenas notas entre 0 e 10.";
  }
  (() => {
    const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

    media >= 6
      ? (document.querySelector(
          "#resposta"
        ).innerHTML = `Parabéns!!! Sua média é ${media}, logo você foi aprovado`)
      : (document.querySelector(
          "#resposta"
        ).innerHTML = `Que pena, sua média é ${media}, logo você foi reprovado`);
  })();
}
function reiniciar() {
  document.querySelector(`#nota_1`).value = "";
  document.querySelector(`#nota_2`).value = "";
  document.querySelector(`#nota_3`).value = "";
  document.querySelector(`#nota_4`).value = "";
  document.querySelector(`#resposta`).innerHTML = "";
}
