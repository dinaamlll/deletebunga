// src/deletebunga.js
const deleteBunga = async (db, kd_bunga) => {
    if (!kd_bunga) {
        throw new Error('Kode bunga wajib diisi');
    }

    const result = await db.query('DELETE FROM bunga WHERE kd_bunga = ?', [kd_bunga]);

    return result.affectedRows > 0;
};

module.exports = deleteBunga;