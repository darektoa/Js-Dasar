/*
    Object mirip dengan Array. Perbedaannya, index-nya bisa kita ganti dengan key yg mudah dibaca.
    Key dari object dapat berupa string atau number.
*/

const mobil = {
    brand: 'Toyota',
    harga: 145999000,
    asalNegara: 'Jepang'
}

console.log(mobil);
console.log(`Brand: ${mobil['brand']}`);
// console.log(`Brand: ${mobil.brand}`);
console.log(typeof mobil);



//#region STUDY CASE

// const siswa = ['Zulfikhar', 80, ['Nonton', 'Membaca']];

// console.log(
// `${siswa[0]} memiliki nilai ${siswa[1]},
// karena salah satu hobi-nya ${siswa[2][1]}`
// );


// const siswi = {
//     name : 'Angeline',
//     nilai: 90,
//     hobi : ['Belajar', 'Memasak']
// };

// console.log(
// `${siswi.name} memiliki nilai ${siswi.nilai},
// karena salah satu hobi-nya ${siswi.hobi[0]}`
// );

//#endregion