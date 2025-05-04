const nilai = 80;
const checkNilai = (nilai)=>{
    if(nilai >= 85){
        return "A"
    }else if(nilai >= 80 && nilai < 85){
        return "A-";
    }else if (nilai >= 75 && nilai < 80){
        return "B+";
    }else if (nilai >= 70 && nilai < 75){
        return "B";
    }else if (nilai >= 65 && nilai < 70){
        return "B-";
    }else if (nilai >= 60 && nilai < 65){
        return "C+";
    }else if (nilai >= 55 && nilai < 60){
        return "C";
    }else if (nilai >= 50 && nilai < 55){
        return "D";
    }else if (nilai >= 0 && nilai < 50){
        return "E";
    }else{
        return "❌ Nilai tidak valid. Masukkan angka antara 0 sampai 100."
    }
}

console.log(checkNilai(nilai));