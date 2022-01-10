/*
    Array Multidimensi adalah Array yg Array di dalamnya
    Array tetap dimulai dari index 0
*/

//                      0                     1                   2
const mobil = [['Toyota', 'Jepang'], ['Jeep', 'Amerika'], ['BMW', 'Jerman']];
//                 0          1          0        1          0        1

const negara = [
    ['Indonesia', 'Jakarta'],
    ['Jepang', 'Tokyo'],
    ['Korea', 'Seoul']
]

console.log(mobil);
console.log(`Brand: ${mobil[0][0]}`);
console.log(`Asal: ${mobil[0][1]}`);



//#region STUDY CASE

// const siswa1      = 'Zul';
// const nilaiSiswa1 = 80;
// const hobiSiswa1  = ['Nonton', 'Membaca'];

// const siswa2      = 'Maul';
// const nilaiSiswa2 = 85;

// const siswa3      = 'Rayhan';
// const nilaiSiswa3 = 78;

// const siswa  = [
//     ['Zul', 80, ['Nonton', 'Membaca']],
//     ['Maul', 85],
//     ['Rayhan', 78],
// ];


// console.log(
// `${siswa[0][0]} memiliki nilai ${siswa[0][1]},
// karena salah satu hobi-nya ${siswa[0][2][1]}`
// );

//#endregion