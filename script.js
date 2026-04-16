// Database Link Afiliasi Anda
const affiliateDatabase = [
    {
        keyword: ['fokus', 'berisik', 'konsentrasi'],
        reply: "Untuk fokus maksimal di lingkungan berisik, kamu butuh Active Noise Cancelling.",
        productName: "Headphone Bose QuietComfort",
        productLink: "https://shope.ee/link-anda-1",
        image: "🎧"
    },
    {
        keyword: ['meja', 'berantakan', 'setup'],
        reply: "Meja yang rapi meningkatkan fokus. Coba gunakan organizer minimalis ini.",
        productName: "Desk Organizer Kayu Estetik",
        productLink: "https://shope.ee/link-anda-2",
        image: "📦"
    }
];

function handleSendMessage() {
    const input = document.getElementById('user-input');
    const message = input.value.trim().toLowerCase();
    
    if (message === "") return;

    // 1. Tampilkan Chat User
    appendChat('user', input.value);
    input.value = "";

    // 2. Logika AI Mencari Masalah
    setTimeout(() => {
        let found = false;
        
        affiliateDatabase.forEach(item => {
            if (item.keyword.some(key => message.includes(key))) {
                appendChat('ai', item.reply);
                showProduct(item);
                found = true;
            }
        });

        if (!found) {
            appendChat('ai', "Menarik sekali. Bisa jelaskan lebih detail bagian mana yang paling menghambat produktivitasmu?");
        }
    }, 800);
}

function appendChat(sender, text) {
    const chatBox = document.getElementById('chat-box');
    const msgDiv = document.createElement('div');
    msgDiv.className = sender === 'user' ? 'flex justify-end' : 'flex items-start gap-3';
    
    msgDiv.innerHTML = sender === 'user' 
        ? `<div class="bg-blue-600 text-white p-3 rounded-2xl rounded-tr-none shadow-sm text-sm max-w-[80%]">${text}</div>`
        : `<div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs"><i class="fas fa-robot"></i></div>
           <div class="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border text-sm max-w-[80%]">${text}</div>`;
    
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function showProduct(product) {
    const chatBox = document.getElementById('chat-box');
    const card = document.createElement('div');
    card.className = 'ml-11 mt-2';
    card.innerHTML = `
        <div class="product-card bg-white p-4 rounded-xl max-w-[250px]">
            <div class="text-2xl mb-2">${product.image}</div>
            <div class="text-xs font-bold uppercase text-blue-600">Rekomendasi Alat</div>
            <div class="text-sm font-semibold mb-3">${product.productName}</div>
            <a href="${product.productLink}" target="_blank" class="block bg-blue-600 text-white text-center py-2 rounded-lg text-xs font-bold hover:bg-blue-700">
                LIHAT PRODUK
            </a>
        </div>
    `;
    chatBox.appendChild(card);
    chatBox.scrollTop = chatBox.scrollHeight;
      }
      function showSection(sectionId) {
    // 1. Sembunyikan semua section
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.add('hidden'));

    // 2. Tampilkan section yang dipilih
    const activeSection = document.getElementById(sectionId + '-section');
    if (activeSection) {
        activeSection.classList.remove('hidden');
    }

    // 3. Update judul halaman (Optional)
    const titles = {
        'home': 'Selamat Datang di Gakribetid',
        'chat': 'Chat AI Assistant',
        'dashboard': 'Statistik Pengguna',
        'pricing': 'Pilih Paket Anda'
    };
    document.getElementById('page-title').innerText = titles[sectionId] || 'Gakribetid';
}

// Inisialisasi: Tampilkan Chat saat pertama buka
window.onload = () => showSection('chat');
                                  
