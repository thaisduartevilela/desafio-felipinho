let nomeHeroi = prompt("Digite o nome do Heroi: ");
let xp = prompt("Digite o XP do Heroi: ");
let nivel = ""

if(xp < 1000)  nivel = "Ferro"
else if(xp <= 2000) nivel = "Bronze"
else if(xp <= 5000) nivel = "Prata"
else if(xp <= 7000) nivel = "Ouro"
else if (xp <= 8000) nivel = "Platina"
else if (xp <= 9000) nivel  = "Ascendente"
else if (xp <= 10000) nivel = "Imortal"
else nivel = "Radiante"

console.log("O nome do Herói é" + nomeHeroi)
console.log("O nivel do Herói é" + nível)
