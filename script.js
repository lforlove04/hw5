class Pendaftar {
  constructor(nama, umur, uangSaku) {
    this.nama = nama;
    this.umur = umur;
    this.uangSaku = uangSaku;
  }

  getResume() {
    return `Nama: ${this.nama}, Umur: ${this.umur}, Uang Saku: ${this.uangSaku}`;
  }
}

const pendaftarList = [];
let rataUangSaku = 0;
let rataUmur = 0;

function openTab(tabName) {
  const tabcontent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}

function resetForm() {
  document.getElementById("registrationForm").reset(); // Mengatur ulang formulir
}
function validateForm() {
  const nama = document.getElementById("nama").value;
  const umur = parseInt(document.getElementById("umur").value);
  const uang = parseInt(document.getElementById("uang").value);

  // ... (kode sebelumnya) ...

  // ... (kode selanjutnya) ...

  if (nama.length < 10 || umur < 25 || uang < 100000 || uang > 1000000) {
    alert("Data tidak valid. Periksa kriteria.");
    return;
  }

  const pendaftar = new Pendaftar(nama, umur, uang);
  pendaftarList.push(pendaftar);

  // Hitung rata-rata uang saku dan umur
  rataUangSaku =
    pendaftarList.reduce((total, pendaftar) => total + pendaftar.uangSaku, 0) /
    pendaftarList.length;
  rataUmur =
    pendaftarList.reduce((total, pendaftar) => total + pendaftar.umur, 0) /
    pendaftarList.length;

  document.getElementById("rataUangSaku").textContent = rataUangSaku.toFixed(2);
  document.getElementById("rataUmur").textContent = rataUmur.toFixed(2);

  displayPendaftarList();
}

function displayPendaftarList() {
  const table = document.getElementById("pendaftarTable");
  table.innerHTML =
    "<tr><th>Nama</th><th>Umur</th><th>Uang Saku</th><th>Resume</th></tr>";

  pendaftarList.forEach((pendaftar) => {
    const row = table.insertRow(-1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);

    cell1.textContent = pendaftar.nama;
    cell2.textContent = pendaftar.umur;
    cell3.textContent = pendaftar.uangSaku;
    cell4.textContent = pendaftar.getResume();
  });
}

openTab("registrasi");
