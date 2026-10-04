let sehir1 = {
    adi: "Istanbul",
    plaka: 34,
    komsu: ["Kocaeli", "Tekirdag", "Edirne"]    
}

let sehir2 = {
    adi: "Ankara",
    plaka: 6,
    komsu: ["Konya", "Eskisehir", "Kirikkale"]
}

let sehir3 = {
    adi: "Izmir",
    plaka: 35,
    komsu: ["Aydin", "Manisa", "Balikesir"]
}

let sehirler = [sehir1, sehir2, sehir3];

//Pozitif bir değer (> 0) dönerse: b elemanını a'nın önüne al (yer değiştir).
//Negatif bir değer (< 0) dönerse: a elemanını b'nin önünde tut (yer değiştirme).
sehirler.sort(function(a,b){
    if(a.adi < b.adi){
        return 1;
    }
    if(a.adi > b.adi){
        return -1;
    }
    else return 0;
});



//------------------------------


let toplam=0;
myArray = [0,1];
function fibonacci(n) {
    for (let i = 0; i < n; i++) {
     let toplam = myArray[i] + myArray[i + 1];
     if(toplam < n)
     {
         myArray.push(toplam);
     }
     else
     {
            break;
     }
    }
    return myArray;
}
console.log(fibonacci(100));
//------------------------------

let ogrenciler = [
    { adi: "Ali", soyadi: "Yilmaz", id: 1 },
    { adi: "Ayse", soyadi: "Demir", id: 2 },
    { adi: "Mehmet", soyadi: "Kaya", id: 3 },
    { adi: "Fatma", soyadi: "Sahin", id: 4 }
];

    // const ciftIdOgrenciler = ogrenciler.reduce((acc, curr) => {
    //     if(curr.id % 2 ==0)
    //     {
    //         let fullName = curr.adi + " " + curr.soyadi;
    //         acc.push(fullName);
    //     }
    //     return acc.sort();
    // },[]);


    //------------------------------
    // filter'dan çıkan bu 2 elemanlı yeni dizinin elemanlarını tek tek alır ve belirlediğin formata dökerek yepyeni bir diziye dönüştürür
    
    const ciftIdOgrenciler = ogrenciler
    .filter(curr => curr.id % 2 === 0)
    .map(curr => `${curr.adi} ${curr.soyadi}`);

    ciftIdOgrenciler.sort();