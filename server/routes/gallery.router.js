const express = require('express');
const router = express.Router();

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // code here
  const id = Number(req.params.id);

  

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
