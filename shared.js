/* ============================================================
   shared.js — Data, SVG helpers, Favorites, Modal, Toast
   Dimuat oleh semua halaman (index, product, favorites)
   ============================================================ */

// ───────────────────────── DATA ──────────────────────────
const PRODUCTS = [
  {
    id: 'family-portrait',
    title: 'Custom Family Portrait',
    category: 'drawing',
    tag: 'Bestseller',
    price: 'Rp 185.000',
    duration: '5–7 hari',
    paper: 'A4 / A5',
    style: 'Watercolor + Ink',
    bg: '#FCD7DF', accent: '#C66B85', motif: 'family',
    description: 'Potret keluarga digambar tangan oleh Bunda dengan teknik cat air dan tinta. Setiap goresan dibuat dengan sabar — wajah, baju, sampai detail kecil seperti kacamata atau aksesori favorit, semua bisa request.',
    longDesc: 'Pengerjaan dimulai dari sketsa pensil halus, lalu pewarnaan bertahap menggunakan cat air pastel. Hasil akhir dipoles dengan tinta hitam halus dan finishing matte. Cocok untuk hadiah ulang tahun pernikahan, anniversary, atau kenang-kenangan keluarga.',
    recs: ['mom-daughter', 'wedding-portrait', 'birthday-card'],
    paletteRecs: ['sunset-pastel', 'rose-garden', 'mocha-cream'],
  },
  {
    id: 'birthday-card',
    title: 'Birthday Card Drawing',
    category: 'drawing',
    tag: 'Custom',
    price: 'Rp 95.000',
    duration: '3–4 hari',
    paper: 'A5',
    style: 'Marker + Crayon',
    bg: '#FFE5C9', accent: '#C66B85', motif: 'birthday',
    description: 'Kartu ulang tahun gambar tangan dengan nama dan pesan custom. Bunda akan menggambar tema sesuai cerita kamu — kue favorit, hobi, atau karakter kesukaan si penerima.',
    longDesc: 'Dibuat di kertas tebal premium, dilengkapi amplop kraft dan pita satin. Tinta tahan air, warna cerah tahan lama. Bisa ditambahkan foil emas atau perak untuk efek istimewa.',
    recs: ['family-portrait', 'castle-drawing', 'bunny-keychain'],
    paletteRecs: ['sunny-day', 'coral-reef', 'sunset-pastel'],
  },
  {
    id: 'mom-daughter',
    title: 'Mom & Daughter Portrait',
    category: 'drawing',
    tag: 'Signature',
    price: 'Rp 210.000',
    duration: '6–8 hari',
    paper: 'A4',
    style: 'Watercolor',
    bg: '#F5D9E8', accent: '#C66B85', motif: 'mom',
    description: 'Seri spesial Bunda — momen hangat ibu dan anak dalam cat air lembut. Pose, pakaian, dan suasana bisa direquest, hasilnya selalu terasa personal dan penuh cerita.',
    longDesc: 'Cocok untuk hadiah Hari Ibu atau kenang-kenangan bersama anak. Bisa ditambah teks kutipan favorit di pojok bawah, ditulis dengan tangan oleh Bunda.',
    recs: ['family-portrait', 'wedding-portrait', 'pet-portrait'],
    paletteRecs: ['rose-garden', 'lavender-dream', 'misty-morning'],
  },
  {
    id: 'bunny-keychain',
    title: 'Bunny Keychain',
    category: 'keychain',
    tag: 'Handmade',
    price: 'Rp 45.000',
    duration: '2–3 hari',
    paper: 'Shrink Plastic',
    style: 'Hand-painted',
    bg: '#FFF1DA', accent: '#C66B85', motif: 'bunny',
    description: 'Gantungan kunci kelinci lucu, digambar dan dipotong tangan. Bisa custom nama atau ditambah aksesori kecil seperti pita dan bunga.',
    longDesc: 'Material plastik tebal anti-pecah, dilapisi resin bening tahan air dan baret. Ukuran sekitar 5 cm. Cocok untuk pasangan, sahabat, atau hadiah souvenir.',
    recs: ['bear-keychain', 'octopus-keychain', 'birthday-card'],
    paletteRecs: ['sunset-pastel', 'sunny-day', 'mint-mojito'],
  },
  {
    id: 'bear-keychain',
    title: 'Honey Bear Keychain',
    category: 'keychain',
    tag: 'Cute',
    price: 'Rp 45.000',
    duration: '2–3 hari',
    paper: 'Shrink Plastic',
    style: 'Hand-painted',
    bg: '#FCE8C0', accent: '#C66B85', motif: 'bear',
    description: 'Gantungan kunci beruang madu warna karamel, dengan ekspresi malu-malu khas gambaran Bunda. Bisa custom nama dan pita.',
    longDesc: 'Dibuat dari shrink plastic high-grade, dipanggang khusus supaya warnanya tahan dan tidak melengkung. Hook kuningan anti-karat.',
    recs: ['bunny-keychain', 'octopus-keychain', 'family-portrait'],
    paletteRecs: ['honey-bee', 'mocha-cream', 'sunny-day'],
  },
  {
    id: 'wedding-portrait',
    title: 'Wedding Portrait',
    category: 'drawing',
    tag: 'Premium',
    price: 'Rp 295.000',
    duration: '8–10 hari',
    paper: 'A4 / A3',
    style: 'Watercolor + Ink',
    bg: '#F0E6F5', accent: '#C66B85', motif: 'wedding',
    description: 'Potret pengantin yang dilukis Bunda dengan detail kebaya, bunga, dan latar romantis. Hadiah yang akan dipajang seumur hidup.',
    longDesc: 'Dilengkapi frame kayu pilihan (natural / putih / hitam) dan kaca anti-UV. Pengiriman dibungkus busa dan kardus tebal — aman sampai tujuan.',
    recs: ['family-portrait', 'mom-daughter', 'birthday-card'],
    paletteRecs: ['rose-garden', 'lavender-dream', 'sunset-pastel'],
  },
  {
    id: 'octopus-keychain',
    title: 'Tiny Octopus Keychain',
    category: 'keychain',
    tag: 'Limited',
    price: 'Rp 50.000',
    duration: '2–3 hari',
    paper: 'Resin',
    style: 'Hand-cast',
    bg: '#D9ECEF', accent: '#C66B85', motif: 'octopus',
    description: 'Gantungan kunci gurita mini biru pastel — bentuk gemes, tangan satu-satu dibikin Bunda. Glow-in-the-dark opsional.',
    longDesc: 'Dicetak satu per satu dari mould silikon handmade. Setiap gurita sedikit berbeda — itu yang bikin special. Tahan air, ringan, tidak gampang gores.',
    recs: ['bunny-keychain', 'bear-keychain', 'castle-drawing'],
    paletteRecs: ['ocean-breeze', 'mint-mojito', 'misty-morning'],
  },
  {
    id: 'castle-drawing',
    title: 'Fairytale Castle Drawing',
    category: 'drawing',
    tag: 'Kids Favorite',
    price: 'Rp 165.000',
    duration: '5–6 hari',
    paper: 'A4',
    style: 'Marker + Watercolor',
    bg: '#D6E4F5', accent: '#C66B85', motif: 'castle',
    description: 'Istana dongeng penuh detail kecil — pelangi, balon, awan, dan jendela mungil. Bisa request karakter di balkonnya.',
    longDesc: 'Cocok dijadikan poster kamar anak. Bisa request nama anak terselip di antara awan atau bendera istana — surprise kecil yang manis.',
    recs: ['birthday-card', 'mom-daughter', 'family-portrait'],
    paletteRecs: ['lavender-dream', 'sunset-pastel', 'sunny-day'],
  },
  {
    id: 'pet-portrait',
    title: 'Pet Portrait',
    category: 'drawing',
    tag: 'New',
    price: 'Rp 175.000',
    duration: '5–7 hari',
    paper: 'A5 / A4',
    style: 'Watercolor',
    bg: '#FCE0CF', accent: '#C66B85', motif: 'pet',
    description: 'Potret peliharaan kesayangan — kucing, anjing, kelinci, bahkan ikan koi. Bunda akan tangkap karakternya, bukan cuma rupanya.',
    longDesc: 'Kirim 2–3 foto referensi sudut berbeda, plus cerita kecil tentang si peliharaan. Bunda akan menggambar dengan vibe sesuai cerita.',
    recs: ['family-portrait', 'mom-daughter', 'bunny-keychain'],
    paletteRecs: ['mocha-cream', 'sunny-day', 'rose-garden'],
  },
];

const PALETTES = [
  { id: 'sunset-pastel',   name: 'Sunset Pastel',   tag: 'Romantis · Hangat',  colors: ['#FBD3D3','#F8B6C2','#E89BAE','#C66B85'] },
  { id: 'rose-garden',     name: 'Rose Garden',     tag: 'Klasik · Lembut',    colors: ['#FFE6E9','#F5C2CE','#D88BA0','#A55672'] },
  { id: 'ocean-breeze',    name: 'Ocean Breeze',    tag: 'Segar · Tenang',     colors: ['#E3F2F1','#B4DDE0','#7BB7C5','#4A8BA0'] },
  { id: 'mint-mojito',     name: 'Mint Mojito',     tag: 'Ceria · Adem',       colors: ['#E8F3E0','#C3DEB1','#8FBE7E','#5A8E5C'] },
  { id: 'forest-walk',     name: 'Forest Walk',     tag: 'Tenang · Natural',   colors: ['#EAE8DA','#C5C9A4','#8C9B6E','#566B3F'] },
  { id: 'mocha-cream',     name: 'Mocha Cream',     tag: 'Hangat · Elegan',    colors: ['#F5EBDF','#E0CAA8','#B58E6A','#7A5240'] },
  { id: 'lavender-dream',  name: 'Lavender Dream',  tag: 'Romantis · Mimpi',   colors: ['#EDE6F4','#CDBCDF','#9F84BF','#6E5394'] },
  { id: 'sunny-day',       name: 'Sunny Day',       tag: 'Ceria · Anak',       colors: ['#FFF1C9','#FCD982','#F4B43E','#D17A1C'] },
  { id: 'coral-reef',      name: 'Coral Reef',      tag: 'Cerah · Tropis',     colors: ['#FFE3D3','#FFB591','#F47D5C','#C44E36'] },
  { id: 'berry-sweet',     name: 'Berry Sweet',     tag: 'Manis · Pekat',      colors: ['#F8D9E3','#D88AA9','#A04E7A','#5C284B'] },
  { id: 'misty-morning',   name: 'Misty Morning',   tag: 'Lembut · Kalem',     colors: ['#EFEEEA','#D4D2C9','#A1A89E','#6C7372'] },
  { id: 'honey-bee',       name: 'Honey Bee',       tag: 'Hangat · Madu',      colors: ['#FFF4DC','#F8DA8C','#E0A640','#9A5E1D'] },
];

const FAQS = [
  { q: 'Berapa lama proses pengerjaan?',          a: 'Gambar custom rata-rata 3–10 hari kerja tergantung tingkat detail. Gantungan kunci 2–3 hari. Setelah selesai, Bunda kirim foto preview dulu sebelum dipacking.' },
  { q: 'Apakah bisa revisi?',                     a: 'Bisa, satu kali revisi gratis di tahap sketsa. Setelah masuk pewarnaan, revisi besar dikenakan biaya tambahan kecil karena harus mulai dari awal.' },
  { q: 'Pengiriman ke mana saja?',                a: 'Seluruh Indonesia via JNE / J&T / Sicepat. Dibungkus rapi dengan bubble wrap dan kardus tebal. Untuk Jabodetabek bisa pakai instant courier.' },
  { q: 'Apakah bisa COD atau ketemu langsung?',   a: 'Bisa untuk area Bekasi & Jakarta Timur, dengan janji temu di alamat workshop. Hubungi via WhatsApp untuk jadwal.' },
  { q: 'Bagaimana cara bayarnya?',                a: 'Transfer bank (BCA, Mandiri) atau e-wallet (GoPay, OVO, Dana). DP 50% di awal, sisanya setelah preview disetujui.' },
];

const HOURS = [
  { day: 'Senin – Jumat',       time: '09.00 – 17.00', closed: false },
  { day: 'Sabtu',               time: '10.00 – 15.00', closed: false },
  { day: 'Minggu',              time: 'Libur',          closed: true  },
  { day: 'Hari Libur Nasional', time: 'Libur',          closed: true  },
];

// ───────────────────────── ICON SVG ──────────────────────────
function icon(name, size) {
  size = size || 18;
  var s = size;
  var a = 'width="' + s + '" height="' + s + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"';
  switch (name) {
    case 'heart':       return '<svg ' + a + '><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>';
    case 'heart-fill':  return '<svg width="' + s + '" height="' + s + '" viewBox="0 0 24 24" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>';
    case 'search':      return '<svg ' + a + '><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>';
    case 'whatsapp':    return '<svg ' + a + ' viewBox="0 0 24 24"><path d="M17.6 14.2c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4z"/><path d="M20.5 3.5a10 10 0 0 0-16.4 11l-1.4 5.2 5.3-1.4a10 10 0 0 0 14.9-8.7 9.9 9.9 0 0 0-2.4-6.1z"/></svg>';
    case 'instagram':   return '<svg ' + a + '><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>';
    case 'tiktok':      return '<svg ' + a + ' viewBox="0 0 24 24"><path d="M21 8.5a6.5 6.5 0 0 1-4-1.5v8.5a6 6 0 1 1-6-6v3a3 3 0 1 0 3 3V3h3a4.5 4.5 0 0 0 4 4.5z"/></svg>';
    case 'shopee':      return '<svg ' + a + '><path d="M5 8h14l-1 12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 8z"/><path d="M9 8a3 3 0 0 1 6 0"/></svg>';
    case 'pin':         return '<svg ' + a + '><path d="M12 21s-7-7-7-12a7 7 0 0 1 14 0c0 5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>';
    case 'mail':        return '<svg ' + a + '><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 7 9-7"/></svg>';
    case 'clock':       return '<svg ' + a + '><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>';
    case 'paint':       return '<svg ' + a + '><path d="M19 11h2a2 2 0 0 1 0 4h-2"/><path d="M3 11V8a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v3z"/><path d="M3 11h18v6a4 4 0 0 1-4 4h-3a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H7a4 4 0 0 1-4-4z"/></svg>';
    case 'palette':     return '<svg ' + a + '><path d="M12 22a10 10 0 1 1 10-10c0 2.8-2.2 5-5 5h-1.8a2 2 0 0 0-1.4 3.4l.2.2a2 2 0 0 1-1.4 3.4z"/><circle cx="7.5" cy="10.5" r="1"/><circle cx="12" cy="7" r="1"/><circle cx="16.5" cy="10.5" r="1"/></svg>';
    case 'arrow-left':  return '<svg ' + a + '><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>';
    case 'arrow-right': return '<svg ' + a + '><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>';
    case 'x':           return '<svg ' + a + '><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>';
    case 'plus':        return '<svg ' + a + '><path d="M12 5v14"/><path d="M5 12h14"/></svg>';
    case 'sparkle':     return '<svg ' + a + '><path d="M12 3 14 9l6 2-6 2-2 6-2-6-6-2 6-2 2-6z"/></svg>';
    case 'package':     return '<svg ' + a + '><path d="m7.5 4.27 9 5.15"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.27 6.96 12 12.01l8.73-5.05"/><path d="M12 22.08V12"/></svg>';
    case 'gift':        return '<svg ' + a + '><path d="M20 12v10H4V12"/><path d="M2 7h20v5H2z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>';
    default:            return '';
  }
}


// ───────────────────────── PRODUCT IMAGE HELPER ──────────────────────────
function productImg(product) {
  return '<img src="images/products/' + product.id + '.svg" alt="' + product.title + '" style="width:100%;height:100%;object-fit:cover">';
}

function productArtSVG(product) {
  return productImg(product);
}

// ───────────────────────── FAVORITES (localStorage) ──────────────────────────
function loadFavs() {
  try {
    var stored = localStorage.getItem('gf_favs');
    return stored ? JSON.parse(stored) : { products: [], palettes: [] };
  } catch(e) {
    return { products: [], palettes: [] };
  }
}
function saveFavs(favs) {
  localStorage.setItem('gf_favs', JSON.stringify(favs));
}
function toggleFav(type, id) {
  var favs = loadFavs();
  var arr  = favs[type];
  var idx  = arr.indexOf(id);
  if (idx === -1) arr.push(id); else arr.splice(idx, 1);
  saveFavs(favs);
  return arr.indexOf(id) !== -1;
}
function getFavCount() {
  var f = loadFavs();
  return f.products.length + f.palettes.length;
}
function updateFavBadge() {
  var count  = getFavCount();
  var badge  = document.getElementById('fav-badge');
  var btn    = document.getElementById('fav-btn');
  if (!badge) return;
  if (count > 0) {
    badge.textContent = count;
    badge.style.display = 'inline-flex';
  } else {
    badge.style.display = 'none';
  }
  if (btn) btn.innerHTML = icon(count > 0 ? 'heart-fill' : 'heart', 18) + badge.outerHTML;
}

// ───────────────────────── TOAST ──────────────────────────
var _toastTimer = null;
function showToast(msg) {
  var t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.style.display = 'block';
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(function(){ t.style.display = 'none'; }, 2500);
}

// ───────────────────────── WHATSAPP MODAL ──────────────────────────
var _modalPayload = null;

function initModal() {
  // Modal overlay
  var overlay = document.createElement('div');
  overlay.id = 'modal-overlay';
  overlay.className = 'modal-overlay';
  overlay.style.display = 'none';
  overlay.innerHTML =
    '<div class="modal" id="modal-box">' +
      '<button class="modal-close" onclick="closeModal()">' + icon('x',18) + '</button>' +
      '<h2>Kirim pesanan ke WhatsApp</h2>' +
      '<p class="modal-sub">Bunda akan balas dalam beberapa jam kerja. Pesanmu sudah siap di-paste, tinggal kirim.</p>' +
      '<div id="modal-products-preview"></div>' +
      '<div id="modal-palettes-preview"></div>' +
      '<div class="modal-field"><label>Nama Kamu</label><input type="text" id="modal-name" placeholder="Misalnya: Hanna"></div>' +
      '<div class="modal-field"><label>Catatan / Request</label><textarea id="modal-notes" rows="3" placeholder="Cerita sedikit tentang yang dipesan, tema, deadline, dll."></textarea></div>' +
      '<button class="btn btn-wa btn-block" onclick="sendWhatsApp()" style="margin-top:8px">' + icon('whatsapp',18) + ' Buka WhatsApp</button>' +
      '<p style="font-size:12px;color:var(--text-mute);text-align:center;margin-top:12px;margin-bottom:0">Tidak ada pembayaran di sini — semua dikonfirmasi langsung dengan Bunda di chat.</p>' +
    '</div>';
  document.body.appendChild(overlay);

  // Tutup modal hanya jika klik tepat di backdrop (bukan di dalam modal-box)
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) closeModal();
  });

  // Toast
  var toast = document.createElement('div');
  toast.id = 'toast';
  toast.className = 'toast';
  toast.style.display = 'none';
  document.body.appendChild(toast);
}

function openWhatsApp(payload) {
  _modalPayload = payload;
  var prods   = payload.items || (payload.defaultProduct ? [payload.defaultProduct] : []);
  var pals    = payload.palettes || (payload.defaultPalette ? [payload.defaultPalette] : []);

  var prodEl  = document.getElementById('modal-products-preview');
  var palEl   = document.getElementById('modal-palettes-preview');

  prodEl.innerHTML = prods.length > 0
    ? '<div class="modal-preview"><h4>Produk Pilihan (' + prods.length + ')</h4><ul>' +
      prods.map(function(p){ return '<li><span class="dot"></span>' + p.title + ' <span style="color:var(--text-mute)">· ' + p.price + '</span></li>'; }).join('') +
      '</ul></div>' : '';

  palEl.innerHTML = pals.length > 0
    ? '<div class="modal-preview"><h4>Color Palette (' + pals.length + ')</h4><ul>' +
      pals.map(function(pl){
        var swatches = pl.colors.map(function(c){ return '<span style="width:12px;height:12px;background:' + c + ';display:inline-block"></span>'; }).join('');
        return '<li><span style="display:inline-flex;border-radius:4px;overflow:hidden;border:1px solid var(--line-soft);margin-right:8px">' + swatches + '</span>' + pl.name + '</li>';
      }).join('') +
      '</ul></div>' : '';

  document.getElementById('modal-name').value = '';
  document.getElementById('modal-notes').value = '';
  var overlay = document.getElementById('modal-overlay');
  overlay.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  var overlay = document.getElementById('modal-overlay');
  if (overlay) overlay.style.display = 'none';
  document.body.style.overflow = '';
}

function sendWhatsApp() {
  if (!_modalPayload) return;
  var name  = document.getElementById('modal-name').value.trim();
  var notes = document.getElementById('modal-notes').value.trim();
  var prods = _modalPayload.items || (_modalPayload.defaultProduct ? [_modalPayload.defaultProduct] : []);
  var pals  = _modalPayload.palettes || (_modalPayload.defaultPalette ? [_modalPayload.defaultPalette] : []);

  var msg = 'Halo Bunda, saya tertarik pesan ✨\n\n';
  if (name) msg += 'Nama: ' + name + '\n';
  msg += '\n*Produk yang dipilih:*\n';
  prods.forEach(function(p){ msg += '• ' + p.title + ' (' + p.price + ') — ' + p.duration + '\n'; });
  if (pals.length) {
    msg += '\n*Color palette favorit:*\n';
    pals.forEach(function(pl){ msg += '• ' + pl.name + ' — ' + pl.colors.join(' · ') + '\n'; });
  }
  if (notes) msg += '\n*Catatan:*\n' + notes + '\n';
  msg += '\nTerima kasih 🤍';

  window.open('https://wa.me/6281234567890?text=' + encodeURIComponent(msg), '_blank');
  closeModal();
}

// ───────────────────────── NAVBAR HELPERS ──────────────────────────
function initNavCommon() {
  // Fav badge
  updateFavBadge();

  // Search button icon
  var sb = document.getElementById('search-btn');
  if (sb) sb.innerHTML = icon('search', 18);

  // Heart / fav nav btn
  var favBtn = document.getElementById('fav-btn');
  var favs   = loadFavs();
  var cnt    = favs.products.length + favs.palettes.length;
  if (favBtn) {
    favBtn.innerHTML = icon(cnt > 0 ? 'heart-fill' : 'heart', 18) +
      '<span class="badge" id="fav-badge" style="' + (cnt > 0 ? '' : 'display:none') + '">' + cnt + '</span>';
  }

  // Search popover toggle
  if (sb) {
    sb.addEventListener('click', function(e){
      e.stopPropagation();
      var pop = document.getElementById('search-pop');
      if (!pop) return;
      var open = pop.style.display !== 'none';
      pop.style.display = open ? 'none' : 'block';
      if (!open) {
        var inp = document.getElementById('search-input');
        if (inp) setTimeout(function(){ inp.focus(); }, 50);
      }
    });
  }
  document.addEventListener('click', function(){
    var pop = document.getElementById('search-pop');
    if (pop) pop.style.display = 'none';
  });

  // Init modal + toast
  initModal();

  // ── Mobile hamburger & drawer ──
  var navActions = document.querySelector('.nav-actions');
  if (navActions) {
    var hbtn = document.createElement('button');
    hbtn.className = 'nav-hamburger';
    hbtn.setAttribute('aria-label', 'Buka menu');
    hbtn.innerHTML = '<span></span><span></span><span></span>';
    navActions.insertBefore(hbtn, navActions.firstChild);

    var isIndexPage = window.location.pathname.indexOf('product.html') === -1 &&
                      window.location.pathname.indexOf('favorites.html') === -1;
    var pfx = isIndexPage ? '' : 'index.html';

    var mnav = document.createElement('div');
    mnav.className = 'mobile-nav';
    mnav.innerHTML =
      '<div class="mobile-nav-inner">' +
        '<a href="' + pfx + '#home"     class="mobile-nav-link">Home</a>' +
        '<a href="' + pfx + '#about"    class="mobile-nav-link">About</a>' +
        '<a href="' + pfx + '#products" class="mobile-nav-link">Products</a>' +
        '<a href="' + pfx + '#palettes" class="mobile-nav-link">Palettes</a>' +
        '<a href="' + pfx + '#order"    class="mobile-nav-link">How to Order</a>' +
        '<a href="' + pfx + '#contact"  class="mobile-nav-link">Contact</a>' +
        '<div class="mobile-nav-ctas">' +
          '<a href="favorites.html" class="btn btn-ghost">' + icon('heart', 16) + ' Favorites</a>' +
          '<a href="' + pfx + '#order" class="btn btn-primary">Pesan Sekarang</a>' +
        '</div>' +
      '</div>';
    document.body.appendChild(mnav);

    function closeMobileNav() {
      mnav.classList.remove('open');
      hbtn.classList.remove('open');
      document.body.style.overflow = '';
    }

    hbtn.addEventListener('click', function() {
      if (mnav.classList.contains('open')) {
        closeMobileNav();
      } else {
        mnav.classList.add('open');
        hbtn.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });

    // Tutup saat klik backdrop
    mnav.addEventListener('click', function(e) {
      if (e.target === mnav) closeMobileNav();
    });

    // Tutup saat klik link apapun
    var mlinks = mnav.querySelectorAll('a');
    for (var i = 0; i < mlinks.length; i++) {
      mlinks[i].addEventListener('click', closeMobileNav);
    }
  }
}
