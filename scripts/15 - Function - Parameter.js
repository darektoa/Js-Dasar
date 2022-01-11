/*
    Function dapat diartikan sebagai pengelompokan sekumpulan kode, yang dapat digunakan ulang
*/

function tampilkan(text) {
    console.log(text);
    console.log(typeof text);
}

tampilkan('Ini test string');

//#region STUDY CASE

function invoice(name, harga) {
    console.log(
        '  -------------------- \n', 
        ' | Invoice Pembayaran \n',
        ' -------------------- \n',
        ` | Nama: ${name} \n`,
        ` | Harga: ${harga} \n`, 
        ' -------------------- \n', 
    )
}

invoice('Zul');
invoice('Maul');

//#endregion