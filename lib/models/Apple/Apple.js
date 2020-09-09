const pool = require('../../utils/pool.js');

class Apple {
    id;
    color;
    size;
    isRotten;

    constructor(row) {
      this.id = row.id;
      this.color = row.color;
      this.size = row.size;
      this.isRotten = row.isRotten;
    }

    static async insert(apple) {
      const { rows } = await pool.query(
        'INSERT INTO apples (color, size, isRotten) VALUES ($1, $2, $3) RETURNING *', [apple.color, apple.size, apple.isRotten]
      );

      return new Apple(rows[0]);
    }
}

module.exports = Apple;
