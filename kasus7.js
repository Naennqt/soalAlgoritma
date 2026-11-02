const prompt = require('prompt-sync')({sigint:true})

let meter = Number(prompt('Meter : '))

let inch = (meter * 1000) / 25.4
let kaki = (meter * 100) / 30.48
let yard = meter / 0.9144

console.log(`
    ${inch.toFixed(2)} inch
    ${kaki.toFixed(2)} kaki
    ${yard.toFixed(2)} yard
`)
