const pool = require('../../utils/pool.js');

class Apple {
    id;
    color;
    size;
    is_rotten;

    constructor(row) {
      this.id = row.id;
      this.color = row.color;
      this.size = row.size;
      this.is_rotten = row.is_rotten;
    }

    static async insert(apple) {
      const { rows } = await pool.query(
        'INSERT INTO apples (color, size, is_rotten) VALUES ($1, $2, $3) RETURNING *', [apple.color, apple.size, apple.is_rotten]
      );

      return new Apple(rows[0]);
    }
}

module.exports = Apple;
