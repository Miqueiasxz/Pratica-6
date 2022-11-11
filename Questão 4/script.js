let notas = [2, 4, 8, 15, 19]

document.querySelector("#result").innerHTML = `
    <h2>A soma das notas é de: ${notas.reduce(somar, 0)}</h2>
    <h2>A Média das notas dos alunos do Campus é: ${notas.reduce(somar, 0)/notas.length}
`
function somar(t, n) {
  return t + n
}