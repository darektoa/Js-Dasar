/*
    Function dapat diartikan sebagai pengelompokan sekumpulan kode, yang dapat digunakan ulang
*/

function tampilkan(text) {
    console.log(text);
    console.log(typeof text);
}

tampilkan('Ini test string');

//#region STUDY CASE

function kotak(name) {
    console.log(
        ' ------------ \n', 
        '|          | \n',
        '|          | \n',
        '|          | \n',
        '|          | \n',
        '------------ \n',
        `Kotak untuk ${name}`
    )
}

kotak('Zul');
kotak('Maul');

//#endregion