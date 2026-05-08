// Bikin hujan bunga di Laman 1
function buatHujanBunga() {
    const container = document.getElementById('hujan-bunga');
    const emojis = ['🌸', '💮', '🌺']; 
    
    for(let i = 0; i < 35; i++) {
        let bunga = document.createElement('div');
        bunga.className = 'bunga-jatuh';
        bunga.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        bunga.style.left = Math.random() * 100 + 'vw';
        bunga.style.animationDuration = (Math.random() * 4 + 4) + 's'; 
        bunga.style.animationDelay = Math.random() * 5 + 's';
        bunga.style.fontSize = (Math.random() * 10 + 15) + 'px';
        container.appendChild(bunga);
    }
}
buatHujanBunga();

// Ganti puisi lu di sini
const pesanLaman2 = '"Dulu kupikir hanya buku yang menjadi duniaku, sampai kamu datang dalam hidupku. Kedatanganmu adalah ketidaksengajaan yang paling ku usahakan dalam hidupku, mungkin sekarang kita tidak bisa bersama selalu. Tapi ku yakin suatu hari nanti kita akan bersatu, menjadi melodi terindah sepanjang waktu. Sampai tibanya hari itu, aku akan selalu menjadi cincin bagi saturnus-mu"';
let indeksNgetik = 0;
let lagiNgetik = false;

// Fungsi Mesin Tik (Dipercepat)
function ngetikOtomatis() {
    if (indeksNgetik < pesanLaman2.length) {
        document.getElementById("teks-ngetik").innerHTML += pesanLaman2.charAt(indeksNgetik);
        indeksNgetik++;
        setTimeout(ngetikOtomatis, 35); // Kecepatan ngetik dipercepat (35ms)
    } else {
        document.getElementById('teks-ngetik').classList.remove('typing-cursor');
        document.getElementById("btn-page2").classList.remove("hidden");
    }
}

// Logika Pindah Laman
function nextPage(page) {
    document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
    document.getElementById('page' + page).classList.add('active');

    // Trigger Laman 2 (Musik Play & Ngetik)
    if (page === 2 && !lagiNgetik) {
        lagiNgetik = true;
        
        // BGM LANGSUNG PLAY DI LAMAN 2
        document.getElementById('bgm').play(); 

        document.getElementById('teks-ngetik').classList.add('typing-cursor'); 
        setTimeout(ngetikOtomatis, 800); // Tunggu sebentar pas masuk laman 2 baru ngetik
    }

    // Trigger Laman 3 (Bunga Gambar Mekar)
    if (page === 3) {
        startLaman3();
    }
}

// Logika Laman 3
function startLaman3() {
    const photoSection = document.getElementById('photo-slide');
    const bunga = document.getElementById('bunga-matahari');

    // Animasi Bunga Mekar (Gambar Realistis)
    setTimeout(() => {
        bunga.classList.add('mekar');
    }, 500); 

    // Slide ke bawah setelah bunga mekar penuh
    setTimeout(() => {
        document.getElementById('bunga-container').style.display = 'none';
        photoSection.classList.remove('hidden');
        
        const page3 = document.getElementById('page3');
        const scrollInterval = setInterval(() => {
            page3.scrollBy(0, 1); 
            if (page3.scrollHeight - page3.scrollTop <= page3.clientHeight + 5) {
                clearInterval(scrollInterval);
            }
        }, 25); 
    }, 4500); // Tunggu lebih lama karena animasi mekarnya dibikin lebih pelan dan dramatis (4.5 detik)
}
