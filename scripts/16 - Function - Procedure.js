/*
    Procedure Function sama dengan Function biasa tetapi dia tidak mengembalikan nilai,
    atau dapat dikatakan hanya menjalankan perintah-perintah / algoritma.
*/

function cetakVolumeBalok() {
    const panjang = 6;
    const lebar   = 2;
    const tinggi  = 4;
    const volume  = lebar * panjang * tinggi;

    console.log(volume);
}

volumeBalok();



//#region STUDY CASE

// function tampilkanKotak() {
//     console.log(
//         '▩▩▩▩▩▩▩▩ \n' +
//         '▩▩▩▩▩▩▩▩ \n' +
//         '▩▩▩▩▩▩▩▩ \n' +
//         '▩▩▩▩▩▩▩▩ \n' +
//         '▩▩▩▩▩▩▩▩ \n'
//     )
// }

// function tampilkanSegitiga() {
//     console.log(
//         '    *     \n' +
//         '   ***    \n' +
//         '  *****   \n' +
//         ' *******  \n' +
//         '********* \n'
//     )
// }

// tampilkanKotak();
// tampilkanSegitiga();

//#endregion