const prompt = require('prompt-sync')({sigint:true});
let detik = Number(prompt('DETIK : '))
const HARI_KE_DETIK = 24 * 60 * 60;
const JAM_KE_DETIK = 60 * 60;
const MENIT_KE_DETIK = 60;

let sisa = hari = jam = menit = 0;

hari = parseInt(detik/HARI_KE_DETIK);
sisa = HARI_KE_DETIK

jam = parseInt(sisa/JAM_KE_DETIK)
sisa %= JAM_KE_DETIK

menit = parseInt(sisa/MENIT_KE_DETIK)
sisa %= MENIT_KE_DETIK

console.log(`
    ${hari} hari ${jam} jam ${menit} menit ${detik} detik 
    `)