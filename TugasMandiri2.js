const prompt = require('prompt-sync')();

function getGrade(nilai) {
    if (nilai >= 85 && nilai <= 100) return "A";
    if (nilai >= 80 && nilai < 85) return "A-";
    if (nilai >= 75 && nilai < 80) return "B+";
    if (nilai >= 70 && nilai < 75) return "B";
    if (nilai >= 65 && nilai < 70) return "B-";
    if (nilai >= 60 && nilai < 65) return "C+";
    if (nilai >= 55 && nilai < 60) return "C";
    if (nilai >= 50 && nilai < 55) return "D";
    if (nilai >= 0 && nilai < 50) return "E";
};

const nama = prompt("Nama: ");
const nilai = parseFloat(prompt("Nilai: "));

const pesanPerGrade = {
    "A": `${nama}, kerjamu luar biasa! Kamu top tier!`,
    "A-": `Nyaris sempurna ${nama}! Sedikit lagi ke A!`,
    "B+": `Bagus! Tetap pertahankan ya ${nama}!`,
    "B": `Lumayan stabil, tapi masih bisa naik lagi tuh ${nama}!`,
    "B-": `Kamu bisa lebih baik dari ini ${nama}!`,
    "C+": `Jangan lengah, yuk semangat lagi belajarnya ${nama}!`,
    "C": `Perlu lebih banyak belajar lagi nih ${nama}!`,
    "D": `Kamu harus fokus dan lebih giat lagi ya ${nama}`,
    "E": `${nama} yuk evaluasi cara belajarnya, semangat!`,
};

if (isNaN(nilai) || nilai < 0 || nilai > 100) {
    console.log("❌ Nilai tidak valid. Masukkan angka antara 0 sampai 100.");
} else {
    const grade = getGrade(nilai);
    console.log(`\n📝 Hasil Penilaian`);
    console.log(`Nama  : ${nama}`);
    console.log(`Nilai : ${nilai}`);
    console.log(`Grade : ${grade}`);
    console.log(`Pesan : ${pesanPerGrade[grade]}`);
}