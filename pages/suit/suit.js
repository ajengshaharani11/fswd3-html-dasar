var tanya = true;
while (tanya) {
    var p = prompt('pilih : kertas, batu, gunting');

    var comp = Math.random();

    if (comp < 0.34) {
        comp = 'kertas';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'gunting';
    } else {
        comp = 'batu';
    }

    var hasil = '';
    if (p == comp) {
        alert('hasilnya seri')
    } else if (p == 'kertas') {

        hasil = (comp == 'gunting') ? 'MENANG' : 'KALAH';
    } else if (p == 'gunting') {
        hasil = (comp == 'batu') ? 'MENANG' : 'KALAH';
    } else if (p == 'batu') {
        hasil = (comp == 'gunting') ? 'MENANG' : 'KALAH';
    } else {
        hasil = 'Memasukan pilihan yang salah';
    }

    alert('Kamu memilih : ' + p + ' dan Komputer memilih : ' + comp + '\n Maka hasilnya : Kamu' + hasil);

    tanya = confirm('lagi?');
}

alert('Terimakasih sudah bermain.')