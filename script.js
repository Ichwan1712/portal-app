class Barang {
  constructor() {
    this.hasil = [];
  }

  cek() {
    const uangUdin = parseInt(document.getElementById("uangUdin").value);
    const uangSamsul = parseInt(document.getElementById("uangSamsul").value);
    const hargaBarang = parseInt(document.getElementById("hargaBarang").value);

    if (isNaN(uangUdin) || isNaN(uangSamsul) || isNaN(hargaBarang)) {
      alert("mohon masukkan angka");
      return;
    }

    // Jika kedua orang bisa membeli sendiri
    if (uangUdin >= hargaBarang && uangSamsul >= hargaBarang) {
      this.hasil.push(uangUdin, uangSamsul, hargaBarang);
      document.getElementById("resultBarang").innerHTML = `
        <h6 class="fw-bold"><i class="fa-solid fa-gear"></i> Hasil Perhitungan:</h6>
        <hr class="my-2">
        <div class="mt-2">Samsul bisa membeli barang tersebut sendiri.</div>
        <div>Udin bisa membeli barang tersebut sendiri.</div>
        <div class="mt-2">Kembalian:</div>
        <div>Udin: ${uangUdin - hargaBarang}</div>
        <div>Samsul: ${uangSamsul - hargaBarang}</div>
      `;
    }
    // Jika hanya Samsul yang bisa membeli
    else if (uangUdin < hargaBarang && uangSamsul >= hargaBarang) {
      this.hasil.push(uangUdin, uangSamsul, hargaBarang);
      document.getElementById("resultBarang").innerHTML = `
        <h6 class="fw-bold"><i class="fa-solid fa-gear"></i> Hasil Perhitungan:</h6>
        <hr class="my-2">
        <div class="mt-2">Udin tidak bisa membeli barang tersebut.</div>
        <div>Samsul bisa membeli barang tersebut sendiri.</div>
        <div class="mt-2">Kembalian:</div>
        <div>Samsul: ${uangSamsul - hargaBarang}</div>
      `;
    }
    // Jika hanya Udin yang bisa membeli
    else if (uangUdin >= hargaBarang && uangSamsul < hargaBarang) {
      this.hasil.push(uangUdin, uangSamsul, hargaBarang);
      document.getElementById("resultBarang").innerHTML = `
        <h6 class="fw-bold"><i class="fa-solid fa-gear"></i> Hasil Perhitungan:</h6>
        <hr class="my-2">
        <div class="mt-2">Udin bisa membeli barang tersebut sendiri.</div>
        <div>Samsul tidak bisa membeli barang tersebut.</div>
        <div class="mt-2">Kembalian:</div>
        <div>Udin: ${uangUdin - hargaBarang}</div>
      `;
    }
    // Jika Udin dan Samsul patungan
    else if (uangUdin + uangSamsul >= hargaBarang) {
      const kembalian = uangUdin + uangSamsul - hargaBarang;
      this.hasil.push(uangUdin, uangSamsul, hargaBarang);
      document.getElementById("resultBarang").innerHTML = `
        <h6 class="fw-bold"><i class="fa-solid fa-gear"></i> Hasil Perhitungan:</h6>
        <hr class="my-2">
        <div class="mt-2">Udin dan Samsul bisa patungan membeli barang tersebut.</div>
        <div>Kembalian: ${kembalian}</div>
      `;
    }
    // Jika tidak ada yang cukup uang
    else {
      this.hasil.push(uangUdin, uangSamsul, hargaBarang);
      document.getElementById("resultBarang").innerHTML = `
        <h6 class="fw-bold"><i class="fa-solid fa-gear"></i> Hasil Perhitungan:</h6>
        <hr class="my-2">
        <div class="mt-2">Udin tidak bisa membeli barang tersebut.</div>
        <div>Samsul tidak bisa membeli barang tersebut.</div>
      `;
    }
  }
}
class Payroll {
  constructor() {
    this.hasil = [];
  }
  cek() {
    const namaKaryawan = document.getElementById("namaKaryawan").value;
    const golongan = document.getElementById("golongan").value;
    const jamKerja = document.getElementById("jamKerja").value;

    if (golongan === "Programmer") {
      this.hasil.push(namaKaryawan, golongan, jamKerja);

      let gajiDasar = 5000000; // Gaji dasar
      let jamKerjaStandar = 48; // Jam kerja standar
      let potonganPerJam = gajiDasar / jamKerjaStandar; // Hitung potongan per jam
      let totalPotongan = 0; // Inisialisasi potongan
      let totalGaji = gajiDasar; // Inisialisasi gaji total

      if (jamKerja < jamKerjaStandar) {
        totalPotongan = (jamKerjaStandar - jamKerja) * potonganPerJam; // Hitung potongan total
        totalGaji = gajiDasar - totalPotongan; // Hitung gaji setelah potongan
      }

      let totalLembur =
        jamKerja > jamKerjaStandar ? jamKerja - jamKerjaStandar : 0; // Hitung lembur
      totalGaji += totalLembur * 20000; // Tambahkan gaji lembur jika ada

      document.getElementById("resultPayroll").innerHTML = `
        <h6 class="fw-bold"><i class="fa-solid fa-gear"></i> Hasil Perhitungan:</h6>
        <hr class="my-2">
        <div class="mt-2">Nama Karyawan: ${namaKaryawan}</div>
        <div>Jabatan: ${golongan}</div>
        <div>Jam Kerja: ${jamKerja} jam</div>
        <div>Total Lembur: ${totalLembur} jam</div>
        <div>Potongan: Rp ${totalPotongan.toLocaleString()}</div>
        <div>Total Gaji: Rp ${totalGaji.toLocaleString()}</div>
      `;
    } else if (golongan === "UI/UX Designer") {
      this.hasil.push(namaKaryawan, golongan, jamKerja);

      let gajiDasar = 4000000;
      let JamKerjaStandar = 48;
      let potonganPerJam = gajiDasar / JamKerjaStandar;
      let totalPotongan = 0;
      let totalGaji = gajiDasar;

      if (jamKerja < JamKerjaStandar) {
        totalPotongan = (JamKerjaStandar - jamKerja) * potonganPerJam;
        totalGaji = gajiDasar - totalPotongan;
      }

      let totalLembur =
        jamKerja > JamKerjaStandar ? jamKerja - JamKerjaStandar : 0;
      totalGaji += totalLembur * 20000;

      document.getElementById("resultPayroll").innerHTML = `
        <h6 class="fw-bold"><i class="fa-solid fa-gear"></i> Hasil Perhitungan:</h6>
        <hr class="my-2">
        <div class="mt-2">Nama Karyawan: ${namaKaryawan}</div>
        <div>Jabatan: ${golongan}</div>
        <div>Jam Kerja: ${jamKerja} jam</div>
        <div>Total Lembur: ${totalLembur} jam</div>
        <div>Potongan: Rp ${totalPotongan.toLocaleString()}</div>
        <div>Total Gaji: Rp ${totalGaji.toLocaleString()}</div>
      `;
    } else if (golongan === "Project Manager") {
      this.hasil.push(namaKaryawan, golongan, jamKerja);

      let gajiDasar = 3000000;
      let JamKerjaStandar = 48;
      let potonganPerJam = gajiDasar / JamKerjaStandar;
      let totalPotongan = 0;
      let totalGaji = gajiDasar;

      if (jamKerja < JamKerjaStandar) {
        totalPotongan = (JamKerjaStandar - jamKerja) * potonganPerJam;
        totalGaji = gajiDasar - totalPotongan;
      }

      let totalLembur =
        jamKerja > JamKerjaStandar ? jamKerja - JamKerjaStandar : 0;
      totalGaji += totalLembur * 20000;

      document.getElementById("resultPayroll").innerHTML = `
        <h6 class="fw-bold"><i class="fa-solid fa-gear"></i> Hasil Perhitungan:</h6>
        <hr class="my-2">
        <div class="mt-2">Nama Karyawan: ${namaKaryawan}</div>
        <div>Jabatan: ${golongan}</div>
        <div>Jam Kerja: ${jamKerja} jam</div>
        <div>Total Lembur: ${totalLembur} jam</div>
        <div>Potongan: Rp ${totalPotongan.toLocaleString()}</div>
        <div>Total Gaji: Rp ${totalGaji.toLocaleString()}</div>
      `;
    }
  }
}

const barang = new Barang();
const payroll = new Payroll();

document.getElementById("simulasi").addEventListener("change", function () {
  const sim = this.value;
  const table = document.getElementById("iwan");

  console.log("Simulasi value:", sim);

  if (sim === "udinSamsul") {
    table.innerHTML = `
<div class="card">
  <div class="card-header">
    <i class="fas fa-cube"></i>
  </div>
  <div class="card-body">
    <span class="badge bg-success mb-3">Selected</span>
    <h6 class="mt- 4">Anda memilih:  <span style="font-style:italic">Simulasi Udin x Samsul</span></h6>
    <div class="row mt-3">
      <div class="col-md-3">
        <label class="form-label">Uang Udin</label>
        <input type="number" class="form-control" id="uangUdin" />
      </div>
      <div class="col-md-3">
        <label class="form-label">Uang Samsul</label>
        <input type="number" class="form-control" id="uangSamsul"  />
      </div>
      <div class="col-md-4">
        <label class="form-label">Harga Barang</label>
        <input type="number" class="form-control" id="hargaBarang"  />
      </div>
      <div class="col-md-2 d-flex align-items-end">
        <button class="btn btn-success w-100" onclick="barang.cek()"><i class="fas fa-search"></i> Check</button>
      </div>
    </div>
    <div class="row mt-3" id="resultBarang"></div>
  </div>
</div>`;
  } else if (sim === "payroll") {
    table.innerHTML = `
<div class="card">
  <div class="card-header">
    <i class="fas fa-cube"></i>
  </div>
  <div class="card-body">
    <span class="badge bg-primary mb-3">Selected</span>
    <h6>
      Anda memilih: <span style="font-style: italic">Simulasi Payroll</span>
    </h6>
    <div class="row mt-3">
      <div class="col-md-4">
        <label class="form-label">Nama Karyawan</label>
        <input type="text" class="form-control" id="namaKaryawan" />
      </div>
      <div class="col-md-4">
        <label class="form-label">Golongan</label>
        <select class="form-select" id="golongan">
          <option hidden></option>
          <option value="Programmer">Programmer</option>
          <option value="UI/UX Designer">UI/UX Designer</option>
          <option value="Project Manager">Project Manager</option>
        </select>
      </div>
      <div class="col-md-2">
        <label class="form-label">Jam Kerja</label>
        <input type="number" class="form-control" id="jamKerja" />
      </div>
      <div class="col-md-2 d-flex align-items-end">
        <button class="btn btn-primary w-100" onclick="payroll.cek()"> <i class="fas fa-search"></i> Check</button>
      </div>
    </div>
    <div class="row mt-3" id="resultPayroll"></div>
  </div>
</div>
`;
  }
});
