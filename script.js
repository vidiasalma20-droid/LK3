// Fungsi untuk membuka form dan menampilkan modal
function prosesMenu(pilihan) {
    const modal = document.getElementById('formModal');
    const overlay = document.getElementById('modalOverlay');

    // Sembunyikan semua form
    document.querySelectorAll('.form-section').forEach(form => {
        form.classList.remove('active');
    });

    // Sembunyikan semua hasil
    document.querySelectorAll('.hasil-section').forEach(hasil => {
        hasil.classList.remove('active');
    });

    // Tampilkan form yang dipilih
    const formId = 'form' + pilihan;
    const form = document.getElementById(formId);
    if (form) {
        form.classList.add('active');
    }

    // Tampilkan modal dan overlay
    modal.classList.add('active');
    overlay.classList.add('active');

    // Fokus ke input pertama
    setTimeout(() => {
        const firstInput = form.querySelector('input');
        if (firstInput) {
            firstInput.focus();
        }
    }, 100);
}

// Fungsi untuk menutup form
function closeForm() {
    const modal = document.getElementById('formModal');
    const overlay = document.getElementById('modalOverlay');

    modal.classList.remove('active');
    overlay.classList.remove('active');

    // Kosongkan semua input
    document.querySelectorAll('input').forEach(input => {
        input.value = '';
    });

    // Kosongkan semua hasil
    document.querySelectorAll('.hasil-section').forEach(hasil => {
        hasil.classList.remove('active');
        hasil.innerHTML = '';
    });
}

// 1. MENGETAHUI UMUR
function cekUmur() {
    const umur = Number(document.getElementById('umur').value);
    const hasilDiv = document.getElementById('hasil1');

    if (document.getElementById('umur').value === '' || isNaN(umur)) {
        alert('Mohon masukkan umur yang valid!');
        return;
    }

    let hasil;
    if (umur < 17) {
        hasil = `<div class="result">❌ Belum cukup umur</div>
                 <p>Usia Anda: <span class="label">${umur} tahun</span></p>
                 <p>Anda masih kurang dari 17 tahun.</p>`;
    } else {
        hasil = `<div class="result">✅ Sudah cukup umur</div>
                 <p>Usia Anda: <span class="label">${umur} tahun</span></p>
                 <p>Anda sudah memenuhi syarat usia.</p>`;
    }

    hasilDiv.innerHTML = hasil;
    hasilDiv.classList.add('active');
    console.log(umur < 17 ? "Belum cukup umur" : "Sudah cukup umur");
}

// 2. BILANGAN POSITIF & NEGATIF
function cekBilangan() {
    const angka = Number(document.getElementById('angka').value);
    const hasilDiv = document.getElementById('hasil2');

    if (document.getElementById('angka').value === '' || isNaN(angka)) {
        alert('Mohon masukkan angka yang valid!');
        return;
    }

    let hasil, pesan;
    if (angka > 0) {
        hasil = `<div class="result">➕ Bilangan Positif</div>
                 <p>Angka: <span class="label">${angka}</span></p>`;
        pesan = "Bilangan Positif";
    } else if (angka < 0) {
        hasil = `<div class="result">➖ Bilangan Negatif</div>
                 <p>Angka: <span class="label">${angka}</span></p>`;
        pesan = "Bilangan Negatif";
    } else {
        hasil = `<div class="result">0️⃣ Bilangan Nol</div>
                 <p>Angka: <span class="label">${angka}</span></p>`;
        pesan = "Bilangan nol";
    }

    hasilDiv.innerHTML = hasil;
    hasilDiv.classList.add('active');
    console.log(pesan);
}

// 3. ANGKA BESAR ATAU KECIL
function bandingkanAngka() {
    const angka1 = Number(document.getElementById('angka1').value);
    const angka2 = Number(document.getElementById('angka2').value);
    const hasilDiv = document.getElementById('hasil3');

    if (document.getElementById('angka1').value === '' || document.getElementById('angka2').value === '' || isNaN(angka1) || isNaN(angka2)) {
        alert('Mohon masukkan kedua angka!');
        return;
    }

    let hasil, pesan;
    if (angka1 > angka2) {
        hasil = `<div class="result">📊 Angka terbesar adalah ${angka1}</div>
                 <p>Angka 1: <span class="label">${angka1}</span></p>
                 <p>Angka 2: <span class="label">${angka2}</span></p>`;
        pesan = "Angka terbesar adalah " + angka1;
    } else if (angka2 > angka1) {
        hasil = `<div class="result">📊 Angka terbesar adalah ${angka2}</div>
                 <p>Angka 1: <span class="label">${angka1}</span></p>
                 <p>Angka 2: <span class="label">${angka2}</span></p>`;
        pesan = "Angka terbesar adalah " + angka2;
    } else {
        hasil = `<div class="result">🟰 Kedua angka sama besar</div>
                 <p>Angka 1: <span class="label">${angka1}</span></p>
                 <p>Angka 2: <span class="label">${angka2}</span></p>`;
        pesan = "Kedua angka sama besar";
    }

    hasilDiv.innerHTML = hasil;
    hasilDiv.classList.add('active');
    console.log(pesan);
}

// 4. NILAI PREDIKAT
function cekPredikat() {
    const nilai = Number(document.getElementById('nilai').value);
    const hasilDiv = document.getElementById('hasil4');

    if (document.getElementById('nilai').value === '' || isNaN(nilai)) {
        alert('Mohon masukkan nilai yang valid!');
        return;
    }

    let predikat, pesan;
    if (nilai >= 90) {
        predikat = "A";
    } else if (nilai >= 80) {
        predikat = "B";
    } else if (nilai >= 70) {
        predikat = "C";
    } else if (nilai >= 60) {
        predikat = "D";
    } else {
        predikat = "E";
    }

    pesan = "Predikat " + predikat;
    const hasil = `<div class="result">⭐ Predikat ${predikat}</div>
                   <p>Nilai Anda: <span class="label">${nilai}</span></p>`;

    hasilDiv.innerHTML = hasil;
    hasilDiv.classList.add('active');
    console.log(pesan);
}

// 5. CHALLENGE PROJECT - NILAI AKHIR
function hitungNilaiAkhir() {
    const nama = document.getElementById('nama').value;
    const kelas = document.getElementById('kelas').value;
    const tugas = Number(document.getElementById('tugas').value);
    const uts = Number(document.getElementById('uts').value);
    const uas = Number(document.getElementById('uas').value);
    const hasilDiv = document.getElementById('hasil5');

    // Validasi input
    if (!nama || !kelas || document.getElementById('tugas').value === '' || document.getElementById('uts').value === '' || document.getElementById('uas').value === '' || isNaN(tugas) || isNaN(uts) || isNaN(uas)) {
        alert('Mohon lengkapi semua data dengan benar!');
        return;
    }

    // Hitung nilai akhir (30% tugas + 30% UTS + 40% UAS)
    const nilaiAkhir = (30 / 100 * tugas) + (30 / 100 * uts) + (40 / 100 * uas);

    // Tentukan keterangan
    let keterangan;
    if (nilaiAkhir > 90) {
        keterangan = "Sangat Baik";
    } else if (nilaiAkhir > 80) {
        keterangan = "Baik";
    } else if (nilaiAkhir > 75) {
        keterangan = "Cukup";
    } else {
        keterangan = "Belum Lulus";
    }

    // Format hasil
    const hasil = `
        <div style="text-align: center; margin-bottom: 15px;">
            <h3 style="color: #FF69B4;">HASIL PENILAIAN</h3>
        </div>
        <p><span class="label">Nama Siswa:</span> ${nama}</p>
        <p><span class="label">Kelas:</span> ${kelas}</p>
        <p><span class="label">Nilai Tugas:</span> ${tugas}</p>
        <p><span class="label">Nilai UTS:</span> ${uts}</p>
        <p><span class="label">Nilai UAS:</span> ${uas}</p>
        <hr>
        <div class="result" style="text-align: center; font-size: 1.2em;">
            Nilai Akhir: <strong>${nilaiAkhir.toFixed(2)}</strong>
        </div>
        <div class="result" style="text-align: center;">
            Keterangan: ${keterangan}
        </div>
    `;

    hasilDiv.innerHTML = hasil;
    hasilDiv.classList.add('active');

    // Console log hasil
    console.log("===================================\n" +
                "           HASIL PENILAIAN\n" +
                "===================================\n" +
                "Nama          : " + nama + "\n" +
                "Kelas         : " + kelas + "\n" +
                "Nilai Tugas   : " + tugas + "\n" +
                "Nilai UTS     : " + uts + "\n" +
                "Nilai UAS     : " + uas + "\n" +
                "Nilai Akhir   : " + nilaiAkhir.toFixed(2) + "\n" +
                "Keterangan    : " + keterangan + "\n" +
                "===================================");
}

// Tutup modal ketika klik di luar (overlay)
document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('modalOverlay');
    overlay.addEventListener('click', closeForm);
});

// Tutup modal dengan tombol Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeForm();
    }
});