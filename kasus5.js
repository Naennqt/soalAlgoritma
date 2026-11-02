const prompt = require('prompt-sync')({sigint:true})

const pecahan_1000 = 1000
const pecahan_500  = 500
const pecahan_100  = 100
const pecahan_50   = 50
const pecahan_25   = 25

let uang = Number(prompt('Nilai Uang : '))

let p1000 = parseInt(uang / pecahan_1000)
let sisa = uang % pecahan_1000

let p500  = parseInt(sisa / pecahan_500)
sisa = uang % pecahan_500

let p100  = parseInt(sisa / pecahan_100)
sisa = uang % pecahan_100

let p50   = parseInt(sisa / pecahan_50)
sisa = uang % pecahan_50

let p25   = parseInt(sisa / pecahan_25)

console.log(`
  ${p1000} buah pecahan Rp1000
  ${p500} buah pecahan Rp500
  ${p100} buah pecahan Rp100
  ${p50} buah pecahan Rp50
  ${p25} buah pecahan Rp25
`)