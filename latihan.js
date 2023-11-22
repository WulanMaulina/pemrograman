var soal1 = prompt("1. 1 + 1: ");
var poin = 0

if (soal1 == 2) {
    point +=1 //   1
    alert(`jawaban anda benar, Point anda sekarang ${poin}`);
    var soal2 = prompt("ibu kota jawabarat adalah: ") 
    if (soal2 == "Bandung") {
        poin +=1
        alert(`jawaban anda benar, poin anda sekarang $ {poin}`);
    var soal3  = prompt("3. 2 x 5: ")
    if (soal3 == 10){
        poin += 1
        alert(`jawaban anda benar, poin  anda sekarang ${poin}`)
    }else{
        poin += 0
        alert(`jawaban saah poin anda salah ${poin}`)
    }

    }else{
        poin += 0
        alert(`jawaban salah poin anda adalah ${poin}`)
    }
    }else{
        poin += 0
        alert(`jawaban salah poin anda adalah ${poin}`)
    }
