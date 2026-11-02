const prompt = require('prompt-sync')({sigint:true})

let cm = Number(prompt('cm : '))

let km = parseInt(cm / 100000)
let sisa = cm % 100000

let m = parseInt(sisa / 100)
let sisaCm = sisa % 100

console.log(`${km} km ${m} m ${sisaCm} cm`)