const fs = require('fs');
const Apple = require('./Apple.js');
const pool = require('../../utils/pool.js');

describe('Apple model', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });

  it('inserts a new apple into the db', async() => {
    const newApple = await Apple.insert({
      color: 'red',
      size: 'small',
      is_rotten: false
    });

    const { rows } = await pool.query(
      'SELECT * FROM apples WHERE id = $1',
      [newApple.id]
    );

    expect(rows[0]).toEqual(newApple);
  });
  
});
