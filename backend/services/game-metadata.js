const express = require('express');
const app = express();

app.get('/api/metadata', (req, res) => {
  res.json({ metadata: {} });
});

app.listen(3002, () => {
  console.log('Game metadata server running on port 3002');
});
