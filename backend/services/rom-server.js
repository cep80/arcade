const express = require('express');
const app = express();

app.get('/api/roms', (req, res) => {
  res.json({ roms: [] });
});

app.listen(3001, () => {
  console.log('ROM server running on port 3001');
});
