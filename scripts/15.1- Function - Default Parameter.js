/*
    Parameter -> Tempat untuk menampung argument
    Argument  -> Nilai yang kita teruskan ke parameter
*/

function volumeBalok(panjang, lebar, tinggi) {
    const volume  = lebar * panjang * tinggi;
    return volume;
}

volumeBalok(6, 2, 4);


// function apakahGenap(number) {
//     if(number % 2 === 0) return true;
//     else return false;
// }

// (apakahGenap(10));

//#region STUDY CASE

// function invoice(name, harga) {
//     console.log(
//         '  -------------------- \n', 
//         ' | Invoice Pembayaran \n',
//         ' -------------------- \n',
//         ` | Nama: ${name} \n`,
//         ` | Harga: ${harga} \n`, 
//         ' -------------------- \n', 
//     )
// }

// invoice('Zul');
// invoice('Maul');

//#endregion