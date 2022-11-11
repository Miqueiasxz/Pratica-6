let arr = ["a", "b", "c", "b", "d", "c", "d", "f"];


let resultado = arr.reduce((acc, val) => {
  if (!acc[val]) acc[val] = {
    "número": val,
    "quantidade": 1
  };
  else acc[val]["quantidade"]++;
  return acc;
}, {});


console.log(resultado);
