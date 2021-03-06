/*
    Function dapat diartikan sebagai pengelompokan sekumpulan kode yang mengembalikan nilai,
    dan dapat digunakan secara berulang.
*/

function volumeBalok() {
    const panjang = 6;
    const lebar   = 2;
    const tinggi  = 4;
    const volume  = lebar * panjang * tinggi;

    return volume;
}

console.log(volumeBalok());



//#region STUDY CASE

// function kotak() {
//     return(
//         '▩▩▩▩▩▩▩▩ \n' +
//         '▩▩▩▩▩▩▩▩ \n' +
//         '▩▩▩▩▩▩▩▩ \n' +
//         '▩▩▩▩▩▩▩▩ \n' +
//         '▩▩▩▩▩▩▩▩ \n'
//     )
// }

// function segitiga() {
//     return(
//         '    *     \n' +
//         '   ***    \n' +
//         '  *****   \n' +
//         ' *******  \n' +
//         '********* \n'
//     )
// }

// console.log(kotak());
// console.log(segitiga());

//#endregion