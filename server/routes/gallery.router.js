const express = require('express');
const router = express.Router();

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // code here
});

// GET /gallery
router.get('/', (req, res) => {
  // code here
  const dbQuery = 'SELECT * FROM "gallery" ORDER BY "id" ASC;';
  pool
    .query(dbQuery)
    .then(() => {})
    .catch(() => {});
});

module.exports = router;
