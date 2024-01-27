const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // code here
  const id = Number(req.params.id);

  let queryText = `UPDATE "gallery" SET "likes" = "likes" + '1' WHERE "id" = $1;`;

  pool
    .query(queryText, [id])
    .then((response) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error('Error:', error);
      res.sendStatus(500);
    });
});

// GET /gallery
router.get('/', (req, res) => {
  // code here
  const dbQuery = 'SELECT * FROM "gallery" ORDER BY "id" ASC;';
  pool
    .query(dbQuery)
    .then((result) => {
      console.log('Result:', result);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('Error', error);
      res.sendStatus(500);
    });
});

module.exports = router;
