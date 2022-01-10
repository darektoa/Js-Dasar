/*
    Object Multidimensi adalah Object yg memiliki Object di dalamnya
    Setiap object yg berada di dalam Object tetap memiliki key-nya sendiri
*/

const mobil = {
    brand      : 'Toyota',
    harga      : 145999000,
    asalNegara : 'Jepang',
    details    : {
        berat: 200,
        tinggi: 2,
        material: ['Aluminium', 'Baja', 'Kaca'],
        dibuatPada: '09/01/22',
    }
}

console.log(mobil);
console.log(`Brand: ${mobil.brand}`);
console.log(`Berat: ${mobil.details.berat}Kg`);
console.log(`Material Utama: ${mobil.details.material[0]}`);
console.log(`Material: ${mobil.details.material}`);



//#region STUDY CASE

// const siswa = {
//     name : 'Zulfikhar',
//     hobi : ['Nonton', 'Membaca'],
//     nilai: {
//         matematika: 90,
//         fisika: 85,
//         kimia: 88,
//     }
// };

// console.log(
// `Nilai ${siswa.name}:
//   - Matematika = ${siswa.nilai.matematika},
//   - Kimia = ${siswa.nilai.kimia},
//   - Fisika = ${siswa.nilai.Fisika}`
// );

//#endregion