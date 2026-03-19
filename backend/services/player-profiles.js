const express = require('express');
const app = express();

app.get('/api/profiles', (req, res) => {
  res.json({ profiles: [] });
});

app.listen(3003, () => {
  console.log('Player profiles server running on port 3003');
});
