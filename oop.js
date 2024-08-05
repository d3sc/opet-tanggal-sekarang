// membuat class Mobil
class Mobil {
  // constructor digunakan untuk menangkap parameter yang diberikan pada saat inisialisasi class
  constructor(merk, model) {
    this.merk = merk;
    this.model = model;
  }

  // method klakson
  klakson() {
    console.log("Beep!!");
  }

  gas() {
    console.log("mobil jalan kedepan..")
  }

  spek() {
    console.log(`merk mobil ${this.merk}, model mobil ${this.model}`)
  }
}

// inisialisasi var mobilSaya dari class Mobil, menggunkan new namaKelas
const mobilSaya = new Mobil("Toyota", "Corolla");
// memanggil method spek dari inisialisasi mobilSaya
mobilSaya.spek();

// inisialisasi var mobilSaya dari class Mobil, menggunkan new namaKelas
const mobilTetangga = new Mobil("Toyota", "Supra");
// memanggil method spek dari inisialisasi mobilTetangga
mobilTetangga.spek()
























// class NasiGoreng{
//   constructor(telur, rasa){
//     this.telur = telur
//     this.rasa = rasa
//   }

//   masak() {
//     if(this.telur) {
//       console.log(`nasi goreng ${this.rasa} dengan telur sudah jadi`)
//     } else {
//       console.log(`nasi goreng ${this.rasa} sudah jadi`)
//     }
//   }
// }

// const makanan1 = new NasiGoreng(false, "pedas");
// makanan1.masak()







