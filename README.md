BNCC Feedback Backend

Backend sederhana untuk mengelola data feedback sebagai bagian dari Quest BNCC RnD.

Cara Menjalankan Project

1. Install dependency:
npm install

markdown
Salin kode

2. Jalankan server:
npm run dev

markdown
Salin kode

3. Backend berjalan di:
http://localhost:5000

yaml
Salin kode

Endpoint API
POST /api/feedback
Membuat feedback baru.

GET /api/feedback
Mengambil semua feedback.

PUT /api/feedback/:id
Mengupdate feedback berdasarkan ID.

DELETE /api/feedback/:id
Menghapus feedback berdasarkan ID.


📁 Tech Stack
- Node.js
- Express.js
- CORS
- Nodemon


✨ Author
Brian Antonia (BNCC RnD)
