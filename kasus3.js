const prompt=require('prompt-sync')({sigint:true})
let t1 =prompt('Masukkan Tanggal1 (yyyy-mm-dd)')
let t2 =prompt('Masukkan Tanggal2 (yyyy-mm-dd)')

const tanggal1 =new Date(t1)
const tanggal2 =new Date(t2)

const TAHUN_KE_HARI= 365 
const BULAN_KE_HARI= 30

let hasilPengurangan = Math.abs(tanggal2 - tanggal1)
let hasilHari = Math.round(hasilPengurangan/(24 * 60 * 60 * 1000))

let sisa = tahun = bulan =hari = 0

tahun = parseInt(hasilHari/TAHUN_KE_HARI)
hasilHari %= TAHUN_KE_HARI

bulan = parseInt(hasilHari/BULAN_KE_HARI)
hasilHari %= BULAN_KE_HARI
hari = hasilHari
console.log(`jaraknya adalah ${tahun} tahun ${bulan} bulan ${hari} hari yang lalu`)