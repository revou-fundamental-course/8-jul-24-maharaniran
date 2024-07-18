// ini javascript 

// bagian yang hilang ketika klik tombol reset
function reset() {
    event.preventDefault();
    document.getElementById('input-berat-badan').value = "";
    document.getElementById('input-tinggi-badan').value = "";
    document.getElementById('input-usia').value = "";
    document.getElementById('result').textContent = "";
    document.getElementById('kategori').textContent = "";
    document.getElementById('deskripsi').textContent = "";
    document.getElementById('saran').textContent = "";
}

// rumus function untuk menjalankan perhitungan BMI
function calculateBMI() {
    event.preventDefault(); // mencegah form otomatis kembali ke default

    const weight = document.getElementById('input-berat-badan').value;
    const height = document.getElementById('input-tinggi-badan').value / 100; 
    const bmi = weight / (height * height);

    let result = "";
    let kategori = "";
    let deskripsi = "";
    let saran = "";
    let color = "";

// rumus if untuk mengklasifikasikan BMI sesuai kategori
// text output setelah mendapatkan hasil BMI
    if (bmi < 18.5) {
        kategori = "Underweight (<18.5)";
        deskripsi = "Anda berada dalam kategori berat badan kurang.";
        saran = "Tambah asupan kalori harian Anda dengan makanan bergizi dan seimbang, termasuk protein, lemak sehat, dan karbohidrat kompleks.";
        changeColor('#00cfcb');

    } else if (bmi >= 18.5 && bmi < 24.9) {
        kategori = "Normal (<18.5 - 24.9)";
        deskripsi = "Anda berada dalam kategori berat badan normal.";
        saran = "Pertahankan pola makan seimbang dan rutin berolahraga untuk menjaga kesehatan dan berat badan ideal. Pastikan Anda mendapatkan nutrisi yang cukup dan menjaga gaya hidup aktif.";
        changeColor('#02b010');

    } else if (bmi >= 25 && bmi < 29.9) {
        kategori = "Overweight (<18.5 - 24.9)"
        deskripsi = "Anda berada dalam kategori berat badan berlebih.";
        saran = "Mulailah mengadopsi pola makan sehat yang rendah kalori dan tinggi serat serta tingkatkan aktivitas fisik.";
        changeColor('#ff9900');

    } else if (bmi >=30) {
        kategori = "Obese (>30)"
        deskripsi = "Anda berada dalam kategori obesitas.";
        saran = "Fokus pada perubahan gaya hidup yang melibatkan pola makan sehat dan peningkatan aktivitas fisik. Konsultasikan lebih lanjut dengan ahli gizi atau profesional kesehatan.";
        changeColor('#db0000');

    } else {
        kategori = "INVALID";
        deskripsi = "Pastikan semua input terisi dengan benar!";
        saran = "";
    }

// text yang ditampilkan
    document.getElementById('result').textContent = bmi.toFixed(2); 
    document.getElementById('kategori').textContent = kategori;
    document.getElementById('deskripsi').textContent = deskripsi;
    document.getElementById('saran').textContent = saran;
}

// mengubah warna result
function changeColor(color) {
    const element = document.getElementById('result');
    element.style.color = color;
}