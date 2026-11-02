const prompt = require('prompt-sync')({sigint: true})

let x = Number(prompt('Masukkan nilai x : '))
let y = Number(prompt('Masukkan nilai y : '))
let z = Number(prompt('Masukkan nilai z : '))

console.log(`Nilai awal : 
    x   : ${x} 
    y   : ${y} 
    z   : ${z}
    `)

let temp = x
x = y
y = z
z = temp

console.log(`Nilai akhir : 
    x   : ${x}
    y   : ${y} 
    z   : ${z}
    `)