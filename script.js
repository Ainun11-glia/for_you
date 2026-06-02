function buatHujanBunga() {
    const container = document.getElementById('hujan-bunga');
    if (!container) return;
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

const pesanLaman2 = '"Dulu kupikir hanya buku yang menjadi duniaku, sampai kamu datang dalam hidupku. Kedatanganmu adalah ketidaksengajaan yang paling ku usahakan dalam hidupku, mungkin sekarang kita tidak bisa bersama selalu. Tapi ku yakin suatu hari nanti kita akan bersatu, menjadi melodi terindah sepanjang waktu. Sampai tibanya hari itu, aku akan selalu menjadi cincin bagi saturnus-mu"';
let indeksNgetik = 0;
let lagiNgetik = false;

function ngetikOtomatis() {
    if (indeksNgetik < pesanLaman2.length) {
        document.getElementById("teks-ngetik").innerHTML += pesanLaman2.charAt(indeksNgetik);
        indeksNgetik++;
        setTimeout(ngetikOtomatis, 35);
    } else {
        document.getElementById('teks-ngetik').classList.remove('typing-cursor');
        document.getElementById("btn-page2").classList.remove("hidden");
    }
}

function nextPage(page) {
    document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
    document.getElementById('page' + page).classList.add('active');

    if (page === 2 && !lagiNgetik) {
        lagiNgetik = true;
        document.getElementById('bgm').play(); 
        document.getElementById('teks-ngetik').classList.add('typing-cursor'); 
        setTimeout(ngetikOtomatis, 800);
    }

    if (page === 3) {
        startLaman3();
    }
}

function startLaman3() {
    const photoSection = document.getElementById('photo-slide');
    const bunga = document.getElementById('bunga-matahari');

    setTimeout(() => {
        if(bunga) bunga.classList.add('mekar');
    }, 500); 

    setTimeout(() => {
        if(document.getElementById('bunga-container')) {
            document.getElementById('bunga-container').style.display = 'none';
        }
        if(photoSection) photoSection.classList.remove('hidden');
        
        const page3 = document.getElementById('page3');
        const scrollInterval = setInterval(() => {
            page3.scrollBy(0, 1); 
            if (page3.scrollHeight - page3.scrollTop <= page3.clientHeight + 5) {
                clearInterval(scrollInterval);
            }
        }, 25); 
    }, 4500);
}

// LOGIKA BARU: INTERAKTIF 3 FOTO DENGAN EFEK KETIKAN
const databaseMemori = {
    1: "Melihat foto ini selalu bikin aku mikir... Di masa-masa kita udah hampir lulus dan bersiap melangkah masing-masing, siapa yang sangka kalau gadis manis di buku tahunan ini bakal jadi pusat gravitasi terkuat yang selalu aku semogakan sampai sekarang",
    2: "Kadang, kebahagiaan itu gak perlu jauh-jauh. Cukup lihat postingan santaimu gini aja, hariku yang lagi ruwet bisa langsung adem lagi, makasi yaa",
    3: "Ini momen terfavoritku dari semua perjalanan hidupmu. Walaupun waktu itu aku gak bisa hadir secara fisik buat nemenin kamu di sudut Jogja, tapi asal kamu tahu... di setiap detik dan langkahmu di sana, namamu gak pernah absen aku semogakan. Selamat ulang tahun, Saturnus-ku"
};

let indeksModal = 0;
let teksSekarang = "";
let timerKetik;

function bukaMemori(idFoto) {
    // Reset data modal sebelum ngetik ulang
    tutupMemori(); 
    
    const modal = document.getElementById("memori-modal");
    const teksElement = document.getElementById("teks-memori");
    const btnClose = document.getElementById("btn-close-modal");
    
    teksSekarang = databaseMemori[idFoto];
    indeksModal = 0;
    teksElement.innerHTML = "";
    
    modal.classList.remove("hidden");
    teksElement.classList.add("typing-cursor");
    btnClose.classList.add("hidden");
    
    // Jalankan efek ketik modal
    ngetikModal();
}

function ngetikModal() {
    const teksElement = document.getElementById("teks-memori");
    const btnClose = document.getElementById("btn-close-modal");
    
    if (indeksModal < teksSekarang.length) {
        teksElement.innerHTML += teksSekarang.charAt(indeksModal);
        indeksModal++;
        timerKetik = setTimeout(ngetikModal, 30); // Kecepatan ketikan di dalam pop up box
    } else {
        teksElement.classList.remove("typing-cursor");
        btnClose.classList.remove("hidden"); // Munculkan tombol close pas udah di ujung titik
    }
}

function tutupMemori() {
    clearTimeout(timerKetik);
    document.getElementById("memori-modal").classList.add("hidden");
    document.getElementById("teks-memori").innerHTML = "";
    document.getElementById("btn-close-modal").classList.add("hidden");
}
