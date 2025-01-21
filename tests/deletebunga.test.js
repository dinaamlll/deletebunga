// tests/deletebunga.test.js
const deleteBunga = require('../src/deletebunga');

describe('deleteBunga', () => {
    let mockDb;

    beforeEach(() => {
        mockDb = {
            query: jest.fn(),
        };
    });

    it('should delete flower successfully and return true', async () => {
        // Mock DB response
        mockDb.query.mockResolvedValue({ affectedRows: 1 });

        const kd_bunga = 1;

        const result = await deleteBunga(mockDb, kd_bunga);

        expect(mockDb.query).toHaveBeenCalledWith('DELETE FROM bunga WHERE kd_bunga = ?', [kd_bunga]);
        expect(result).toBe(true);
    });

    it('should throw an error if kd_bunga is missing', async () => {
        await expect(deleteBunga(mockDb, null)).rejects.toThrow('Kode bunga wajib diisi');
    });

    it('should return false if no rows are deleted', async () => {
        // Mock DB response
        mockDb.query.mockResolvedValue({ affectedRows: 0 });

        const kd_bunga = 1;

        const result = await deleteBunga(mockDb, kd_bunga);

        expect(mockDb.query).toHaveBeenCalledWith('DELETE FROM bunga WHERE kd_bunga = ?', [kd_bunga]);
        expect(result).toBe(false);
    });
});