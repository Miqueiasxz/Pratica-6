let nome = prompt("digitar o seu nome:")
let nomes = nome.split(" ")
let abrevi = nomes.reduce((abr,n)=>abr+=n.slice(0,1),"")
document.write(abrevi)
