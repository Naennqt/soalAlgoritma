const prompt=require('prompt-sync')({sigint:true})
let hari = Number(prompt('Masukkan Lama Pekerjaan : '))
const HARI_KE_TAHUN = 365
const HARI_KE_BULAN = 30

let sisa = tahun = bulan = 0

tahun = parseInt(hari/HARI_KE_TAHUN)
hari %= HARI_KE_TAHUN

bulan = parseInt(hari/HARI_KE_BULAN)
hari %= HARI_KE_BULAN

console.log(`
    ${tahun} tahun ${bulan} bulan ${hari} hari`)