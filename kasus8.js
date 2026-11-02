const prompt = require('prompt-sync')({sigint:true})

let tinggi = Number(prompt('Tinggi badan (cm) : '))

let berat = (tinggi - 100) * 0.9

console.log(`Berat badan ideal : ${berat.toFixed(2)} kg`)