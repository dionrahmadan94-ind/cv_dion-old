# Dion Rahmadan — Personal Portfolio

Single-page personal CV / portfolio landing page. Brutalist / Neo-Brutalist design.
Stack: HTML5 + CSS3 + Bootstrap 5.3.x + Vanilla JS. Lihat `PRD.md` untuk spesifikasi penuh.
Owner: Dion Rahmadan — Sistem Komputer, Budi Luhur University.

## Struktur

```text
├── index.html
├── PRD.md
├── README.md
├── css/style.css
├── js/main.js
└── assets/
    ├── images/
    └── icons/favicon.svg
```

## Cara jalan lokal

Buka `index.html` langsung di browser, atau jalankan server statis:

```bash
python3 -m http.server 8000
# buka http://localhost:8000
```

## Data terisi

- Nama: Dion Rahmadan
- Kampus: Budi Luhur University — Sistem Komputer
- Email: dionrahmadan94@gmail.com
- Kontak: Email + Instagram (https://www.instagram.com/dyonermdhn/) — GitHub/LinkedIn sengaja tidak dipasang agar tidak ada dead-link
- Fokus: Robotics / Embedded / Web (Arduino, ESP32, web dasar)

## Deploy ke GitHub Pages

1. Buat repo GitHub, push semua file (pastikan `index.html` di root).
2. Settings → Pages → Deploy from branch → pilih branch + `/ (root)` → Save.
3. Buka URL publik, tes tanpa login di mobile + desktop.
4. Cek: semua anchor, tombol CTA, email `mailto:`, tidak ada gambar rusak, tidak ada horizontal scroll di 320px.

## QA singkat

- [ ] Navbar anchor benar + toggle mobile berfungsi
- [ ] Tidak ada dead link / tombol palsu
- [ ] Desain brutalist konsisten (border tebal, hard shadow, tipografi besar)
- [ ] Responsif 320 / 375 / 768 / 1024 / 1440
- [ ] Fokus keyboard terlihat, `prefers-reduced-motion` dihormati
- [ ] Tidak ada error console
