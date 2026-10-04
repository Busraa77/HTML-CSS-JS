
//objects

const emre = {
    ad:'emre',
    yas: 32,
    evliMi:false,
    sevdigiRenkler: ['kırmızı','yesil'],
    adres: {
        il:'Ankara',
        plakaKodu:6,
    },
    bilgileriSoyle: function(){
        return 'benim adım emre yasım 32';
    },

    ['full-name']:'emre altunbilek',
};
console.log(emre[full-name]);


const hasan= createOgrenci('hasan',32,false,'ege');

function createOgrenci(ad,yas,evliMi,okul){
    return{//!!!!!!!!!!!
        isim:ad,
        yas:yas,
        evliMi:evliMi,
        okul:okul,

        bilgileriGoster: function(){
            return 'İsmim ${this.isim} yaşım ${this.yas} ve okulum ${this.okuduguOokul}';
        }
    };
}

console.log(emre.bilgileriGoster());

function Ogrenci(ad,yas,evliMi,okul)
{//BU BİR RETURN İFADESİ DEĞİL
    this.isim=ad;
    this.yas=yas;
    this.evliMi=evliMi;
    this.okuduguOkul = okul;
    this.bilgileriGoster = function () {
        return `İsmim ${this.isim} yaşım ${this.yas} ve okulum ${this.okuduguOokul}`;
    }
}

//new kullandığında 3 şey gerçekleşir.
//1 yeni bir obje oluşturur
//2 return yazmak zorunda kalmayız
//3 this kelimesini o an oluşturulan nesneye bağlar.
const yunus=new Ogrenci('yunus',30,false,'itü');
console.log(yunus.constructor);

//Prototipe ekleme. ORTAK METOT
Ogrenci.prototype.selamVer=function(){
    console.log('Merhaba, ben ${this.ad}');
};

const ahmet= new Ogrenci("Ahmet",25);
const mehmet= new Ogrenci("Mehmet",32);
ahmet.selamVer();
mehmet.selamVer();


//Object.create(), belirttiğiniz bir nesneyi doğrudan yeni oluşturulan 
// nesnenin prototipi ([[Prototype]]) yaparak sıfır bir nesne türetir.
const anaPrototip = {
  selamVer() {
    return `Merhaba, ben ${this.ad}`;
  }
};

// anaPrototip'i miras alan yeni bir boş nesne oluşturur
const kullanici = Object.create(anaPrototip);
kullanici.ad = "Deniz";

console.log(kullanici.selamVer()); // "Merhaba, ben Deniz"
console.log(kullanici.__proto__ === anaPrototip); // true


//map
const sayilar = [1, 2, 3, 4];

const kareler = sayilar.map(sayi => sayi * sayi);

console.log(kareler); // [1, 4, 9, 16]
console.log(sayilar); // [1, 2, 3, 4] (Orijinal dizi bozulmadı)


const kullanicilar = [
  { id: 1, ad: "Ahmet", rol: "Admin" },
  { id: 2, ad: "Ayşe", rol: "User" },
  { id: 3, ad: "Mehmet", rol: "User" }
];

// Sadece isimleri içeren bir string dizisi üretelim
const isimler = kullanicilar.map(kullanici => kullanici.ad);

console.log(isimler); // ["Ahmet", "Ayşe", "Mehmet"]



//Array.prototype Üzerine Eklenmesi: JavaScript'teki tüm dizilerin türediği ana prototipe 
// kendiMapYapim adında yeni bir metot ekleniyor. Böylece oluşturulan herhangi bir dizi 
// ([1, 2, 3]) bu metodu miras alarak doğrudan çağırabiliyor.

Array.prototype.kendiMapYapim = function (islem) {
  const yeniDizi = [];
  for (let i = 0; i < this.length; i++) {
    yeniDizi.push(islem(this[i], i));
  }
  return yeniDizi;
};
const sayi = [1, 2, 3, 4, 5];
const carpilmis = sayilar.kendiMapYapim(function(sayi) {
    return sayi * 10;
});
//islem(this[i], i): Dışarıdan parametre olarak gönderilen callback fonksiyonunu çağırır; 
// içine o anki elemanı (this[i]) ve indeksini (i) gönderir.



//default değer ataması
const [t1,t2,t3="Bilinmiyor",t4="Tanımlanmadı"]=['galatasaray','besiktas',"fener"];

//object destructuring (parçalanması)

let ayarlar = {
   
    genislik: '300px',
    yukseklik:'300px'
};

const{baslik:b="varsayılan başlık",genislik:g,yukseklik:y}=ayarlar;
console.log(b,g,y);

//destructuring (yapı bozma / parçalayarak alma)

let kisi = {
    ad: {
        firstName: "emre",
        lastName: "altunbilek"
    },

    sevdigiRenkler: ["sarı", "kırmızı"],

    yas: 32
};

//Bunu normal şekilde almak isteseydik:

console.log(kisi.ad.firstName);
console.log(kisi.ad.lastName);

console.log(kisi.sevdigiRenkler[0]);
console.log(kisi.sevdigiRenkler[1]);

console.log(kisi.yas);

//Ama destructuring ile hepsini tek seferde çıkarıyoruz:
const {
    ad: { firstName, lastName },
    sevdigiRenkler: [renk1, renk2],
    yas
} = kisi; //kisi nesnesinin içinden bu değerleri çıkar.

console.log(firstName,lastName,renk1,renk2,yas);



//EXPLİCT BİNDİNG 
function bilgilerimiYazdir(sehir, unvan) {
  console.log(`Ben ${this.ad}, ${this.yas} yaşındayım. ${sehir}'de ${unvan} olarak çalışıyorum.`);
}

const kisi1 = { ad: "Ahmet", yas: 25 };
const kisi2 = { ad: "Elif", yas: 30 };
//Bu fonksiyonu nesneye zorla giydirmek için .call() kullanılır:
bilgilerimiYazdir.call(kisi1, "İstanbul", "Yazılımcı");
//Aynısı sadece parametreleri dizi olarak alıyor.
bilgilerimiYazdir.apply(kisi2, ['İstanbul', 'Yazılımcı']);
//call hemen çağırır bind paketler.
const paketliFonksiyon = bilgilerimiYazdir.bind(kisi1); 
paketliFonksiyon(); // Şimdi çalıştı!




const Araba = function (renk,model){
    this.renk=renk;
    this.model=model;
}

const honda=new Araba('kırmızı','civic');


//ARROW FUNC   nesne içinde metot tanımlarında önerilmez.
/*Arrow function'ların kendi this bağlamı yoktur.

İçinde bulundukları nesneyi tanımazlar; 
this kelimesini nesnenin dışındaki kapsamdan (genelde window veya global) alırlar. */
const fonksiyon = () => {
    console.log(this);
}




//closure
function sayacOlustur() {
  let sayi = 0; // Bu değişken sayacOlustur'un içinde hapis

  return function() {
    sayi++; // İçteki fonksiyon dışarıdaki 'sayi' değişkenine erişiyor
    return sayi;
  };
}

// sayacOlustur çalıştı ve BİTTİ (Normalde 'sayi' değişkeninin silinmesi gerekirdi)
const sayac1 = sayacOlustur();

console.log(sayac1()); // 1
console.log(sayac1()); // 2
console.log(sayac1()); // 3