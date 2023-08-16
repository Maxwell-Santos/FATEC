function pegarMedia() {
  const nota1 = parseFloat(document.getElementById('nota1').value);
  const nota2 = parseFloat(document.getElementById('nota2').value);

  const media = (nota1 + nota2) / 2;

  if (media >= 7) {
    alert(`Parabens, aprovado! Media ${media}`);
  } else {
    alert('Reprovado!');
  }
}
